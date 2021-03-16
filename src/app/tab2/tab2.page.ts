import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  tebakan=0;
  id="tandatanya"
  constructor() {
  }

  tebak(){
    var angka = Math.floor(Math.random() * 10);
    if(this.tebakan == angka){
      console.log("bener");
      alert("bener");
      this.id="profile";
    }
    else{
      console.log("salah");
      alert("salah");
    }
  }
}
