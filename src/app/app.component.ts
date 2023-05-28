import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cnt = false
  open(){
    this.cnt = true
  }
  close(){
    this.cnt = false
  }
  closeoverlay(e:any){
    if (e.target.classList.contains('overlay')){
      this.cnt = false
    }
  }
    

  
  
  }
