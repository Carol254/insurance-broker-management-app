import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute,RouterOutlet } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent,RouterOutlet],
})
export class FolderPage  {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}


}
