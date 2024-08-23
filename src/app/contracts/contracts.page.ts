import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol,IonRow, IonCard ,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent,IonIcon, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.page.html',
  styleUrls: ['./contracts.page.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonCard, IonCol, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule ,IonRow ,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent,IonIcon]
})
export class ContractsPage  {

  constructor() { }



}
