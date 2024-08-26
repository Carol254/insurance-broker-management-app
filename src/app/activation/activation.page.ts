import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol,IonRow, IonCard ,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent,IonIcon, IonList, IonItem,IonButton,IonLabel,IonNote } from '@ionic/angular/standalone';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.page.html',
  styleUrls: ['./activation.page.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonCard, IonCol, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule ,IonRow ,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent,IonIcon,IonButton,IonLabel,IonNote]
})
export class ActivationPage  {

  constructor() { }



}
