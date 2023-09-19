import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  // items$: Observable<any[]>;
  private communityQuestionsCollection = 'community_questions';
  private officialQuestionsCollection = 'official_questions';

  constructor(
    private firestore: AngularFirestore
  ) { }

  getAllCommunityQuestions() {
    return this.firestore.collection(this.communityQuestionsCollection).snapshotChanges();
  }

  createCommunityQuestion(data: any) {
    return this.firestore.collection(this.communityQuestionsCollection).add(data);
  }

  updateCommunityQuestion(documentId: string, data: any) {
    return this.firestore.collection(this.communityQuestionsCollection).doc(documentId).set(data);
  }

  deleteCommunityQuestion(documentId: string) {
    return this.firestore.collection(this.communityQuestionsCollection).doc(documentId).delete();
  }


  getAllOfficialQuestions() {
    return this.firestore.collection(this.officialQuestionsCollection).snapshotChanges();
  }

  createOfficialQuestion(data: any) {
    return this.firestore.collection(this.officialQuestionsCollection).add(data);
  }

  updateOfficialQuestion(documentId: string, data: any) {
    return this.firestore.collection(this.officialQuestionsCollection).doc(documentId).set(data);
  }

  deleteOfficialQuestion(documentId: string) {
    return this.firestore.collection(this.officialQuestionsCollection).doc(documentId).delete();
  }

}
