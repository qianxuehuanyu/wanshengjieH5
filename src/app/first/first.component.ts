import { Component,OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent  implements OnInit, OnDestroy {
  wH = window.innerHeight;
  gameOrder=false;
  gameResult=false;
  user:any;
  login=false;
  text="";
  tipMessage="在万圣节前夜，你即将参加一个糟糕的假面舞会，为了对抗想要愚弄你的死党/闺蜜/小伙伴们，你决定用种一些魔法南瓜来反击！";
  tipOrder="因为恶作剧你丢失了你的魔杖，你现在只能使用编号为0001-9999这样的4位数字组成的魔法指令来改变南瓜的状态，当魔法南瓜的状态值达到100，你将收获一个魔法南瓜！";
  tipResult="没有南瓜！没有南瓜！没有南瓜！";
  successResult:any=[];
  constructor() {}

  ngOnInit():void {
    let wL=window.localStorage;
    //window.localStorage.setItem
    let username=window.localStorage.getItem('username');
    let sR=window.localStorage.getItem('successResult');

    if(username==null||username.length==0){
    }else{
      this.login=true;
      this.tipResult=sR==null?this.tipResult:("您拥有"+sR.length+"个南瓜");
      this.successResult=sR||[];
    }
    this.text=this.tipMessage;
  }
  showGameOrder(){
    this.gameOrder=true;
    this.text=this.tipOrder;
  }
  hideGameOrder(){
    this.gameOrder=false;
  }
  showGameResult(){
    if(this.login){
      let sR=window.localStorage.getItem('successResult');
      this.tipResult=sR==null?this.tipResult:("您拥有"+sR.length+"个南瓜");
      this.successResult=sR||[];
    }
    this.gameResult=true;

  }
  hideGameResult(){
    this.gameResult=false;
  }
  ngOnDestroy():void {}

}
