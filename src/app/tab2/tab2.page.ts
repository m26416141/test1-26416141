import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';

import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService) {}

  async addPhotoToGallery() {
    this.photoService.addNewToGallery();

    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photoService.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });
  }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }
}
