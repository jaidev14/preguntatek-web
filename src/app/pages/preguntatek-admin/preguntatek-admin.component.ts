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
        this.preguntatekQuestions.push({
          id: preguntatekQuestionData.payload.doc.id,
          text: questionData.Value
        });
      });
      console.log(this.preguntatekQuestions);

    });
  }

  openEditDialog(questionIndex: number) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {
        question: this.preguntatekQuestions[questionIndex].text,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined && result !== '') {
        this.sendQuestion(result, this.preguntatekQuestions[questionIndex].id);
      }
    });
  }

  public sendQuestion(data: any, documentId: string) {
      this.firestoreService.createOfficialQuestion({ Value: data }).then(() => {
        this.retrieveQuestions();
        this.deleteQuestion(documentId);
      }, (error) => {
        console.error(error);
      });
  }

  

  openDeleteDialog(questionIndex: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {
        question: this.preguntatekQuestions[questionIndex].text,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteQuestion(this.preguntatekQuestions[questionIndex].id);
      }
    });
  }

  public deleteQuestion(documentId: string) {
    this.firestoreService.deleteCommunityQuestion(documentId).then(() => {
        this.retrieveQuestions()
    }, (error) => {
      console.error(error);
    });
  }

}
