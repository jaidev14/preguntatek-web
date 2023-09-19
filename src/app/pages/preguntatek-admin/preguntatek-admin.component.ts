import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DeleteDialogComponent } from 'src/app/components/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from 'src/app/components/edit-dialog/edit-dialog.component';
import { PreguntatekQuestion } from 'src/app/models/preguntatek-question';

import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-preguntatek-admin',
  templateUrl: './preguntatek-admin.component.html',
  styleUrls: ['./preguntatek-admin.component.scss']
})
export class PreguntatekAdmin implements OnInit {
  preguntatekQuestions: PreguntatekQuestion[] = [];

  constructor(
    private firestoreService: FirestoreService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.retrieveQuestions();
  }

  retrieveQuestions() {
    this.firestoreService.getAllCommunityQuestions().subscribe((preguntatekQuestionsSnapshot) => {
      this.preguntatekQuestions = [];
      preguntatekQuestionsSnapshot.forEach((preguntatekQuestionData: any) => {
        const questionData = preguntatekQuestionData.payload.doc.data();
        console.log(questionData);
        this.preguntatekQuestions.push({
          id: questionData.Id,
          text: questionData.Value
        });
      })
    });
  }

  public deleteQuestion(documentId: string) {
    this.firestoreService.deleteCommunityQuestion(documentId).then(() => {
      console.log('Documento eliminado!');
    }, (error) => {
      console.error(error);
    });
  }

  public sendQuestion(data: any, documentId: string) {
      this.firestoreService.createOfficialQuestion(data).then(() => {
        console.log('Documento creado exitósamente!');
      }, (error) => {
        console.error(error);
      });
  }

  openEditDialog(questionIndex: number) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {
        question: this.preguntatekQuestions[questionIndex].text,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDeleteDialog(questionIndex: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {
        question: this.preguntatekQuestions[questionIndex].text,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
