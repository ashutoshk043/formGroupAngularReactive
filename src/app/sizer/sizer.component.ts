import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder) { }
  title = "form Data Using Angular FormGroup";

  formData:any = []

  data = this._formBuilder.group({
    firstName : [""],
    lastName : [""],
    email:[""],
    country:[""],
    gender:[""],
    hobbies:[""]
  })

  findValue(){
    this.formData = this.data.value
  }

  ngOnInit(): void {
  }

}
