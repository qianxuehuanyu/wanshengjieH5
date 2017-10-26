import { Component ,OnInit,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-nangua',
  templateUrl: './nangua.component.html',
  styleUrls: ['./nangua.component.css']
})
export class NanguaComponent implements OnInit, OnDestroy  {
  wH = window.innerHeight;
  login=false;
  user:any={};
  value=0.11;
  constructor() {}

  ngOnInit():void {
    //window.localStorage.setItem
    let username=window.localStorage.getItem('username');
    if(username==null||username.length==0){
    }else{
      this.login=true;
      this.user.username=username;
    }
  }
  ngOnDestroy():void {

  }
}
