import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonGrid,IonRow,IonCol ,IonCard,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent} from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonGrid,IonRow,IonCol,IonCard,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent]
})
export class DashboardPage  {

  constructor() { }

  
}
