import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';


import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-create-new-event',
  templateUrl: './create-new-event.component.html',
  styleUrls: ['./create-new-event.component.css']
})
export class CreateNewEventComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  files: { url: string, file: File }[] = [];
  showErrorMessage: boolean = false;
  center: google.maps.LatLngLiteral = { lat: 20.5937, lng: 78.9629 }; // Coordinates for India
  zoom = 5; // Adjust zoom level as needed
  selectedLocation: google.maps.LatLngLiteral | null = null;
  

  constructor(private _formBuilder: FormBuilder) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const selectedFiles = Array.from(input.files);
      const remainingSlots = 3 - this.files.length;

      if (selectedFiles.length > remainingSlots) {
        this.showErrorMessage = true;
        setTimeout(() => {
          this.showErrorMessage = false;
        }, 3000); // Hide the error message after 3 seconds
      }

      selectedFiles.slice(0, remainingSlots).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.files.push({ url: e.target.result, file });
        };
        reader.readAsDataURL(file);
      });

      input.value = '';
    }
  }

  removeFile(index: number): void {
    this.files.splice(index, 1);
  }

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.selectedLocation = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
    }
  }


}

