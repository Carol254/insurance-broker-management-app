import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonGrid, IonRow,IonCard,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent,IonIcon, IonButton, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.page.html',
  styleUrls: ['./personal-data.page.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonButton, IonRow, IonGrid, IonCol, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonCard,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent,IonIcon]
})
export class PersonalDataPage  {

  constructor() { }

  

}
