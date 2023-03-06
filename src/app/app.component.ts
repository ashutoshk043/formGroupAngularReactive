import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Form Using Angular ';
  data:any = []

  onclicklogin(){
    // console.log(this.loginForm.value)
    this.data = this.loginForm.value
    console.log(this.data)
  }

  loginForm = new FormGroup({
    user: new FormControl(""),
    pass: new FormControl("")
  })


  
}
