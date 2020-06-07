import { Component, OnInit } from '@angular/core';
import { PlanetListService } from './service/planet-list.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  planetList : any;
  finalList:any;
  form: FormGroup;
  constructor(private planetListService: PlanetListService, private fb: FormBuilder) {
    this.form = this.fb.group({
      favouriteList: this.fb.array([], [Validators.required])
    })
  }

  ngOnInit(): void {
    this.planetListService.getPlanetList().subscribe(data => {
      this.planetList = data;
    })
  }

  // onclick of  checkbox this method will be called
  onCheckboxChange(e) {
    const favouriteList: FormArray = this.form.get('favouriteList') as FormArray;
    if (e.target.checked) {
      favouriteList.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      favouriteList.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          favouriteList.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  // this method is called  onclick of submit button
  submitForm() {
    const data = this.form.value;
    this.finalList = data.favouriteList;

  }

}
