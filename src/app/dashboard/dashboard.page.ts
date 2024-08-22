import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonGrid,IonRow,IonCol ,IonCard,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent, IonItem, IonIcon, IonLabel, IonNote ,IonList, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonButton, IonNote, IonLabel, IonIcon, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonGrid,IonRow,IonCol,IonCard,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent,IonList]
})
export class DashboardPage  {

  constructor() { }

  
}
