import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol,IonRow, IonCard ,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent,IonIcon, IonList, IonItem,IonLabel,IonNote, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
  standalone: true,
  imports: [IonButton,  IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol,IonRow, IonCard ,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent,IonIcon, IonList, IonItem,FormsModule,CommonModule,IonLabel,IonNote]
})
export class DocumentsPage  {

  constructor() { }

 

}
