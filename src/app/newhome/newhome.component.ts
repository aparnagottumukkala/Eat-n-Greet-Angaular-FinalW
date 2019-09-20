import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Postmeal } from '../postmeal';
import { PostmealserService } from '../postmealser.service';

@Component({
  selector: 'app-newhome',
  templateUrl: './newhome.component.html',
  styleUrls: ['./newhome.component.css']
})
export class NewhomeComponent implements OnInit {
  message: string;
  public userinfo: Postmeal[] = [];
  obj: any;
/*userinfo = [
  {
    id: 1,
    price: 20,
    quantity: 4,
    name: 'chapathi',
    details: 'this is made of chapathi',
    uri: "https://demostore121332.blob.core.windows.net/images/food_sample.jpg?sv=2018-03-28&ss=b&srt=sco&sp=rlac&se=2019-10-17T09:50:35Z&st=2019-09-16T01:50:35Z&spr=https&sig=tPN6aDJSveCJ%2BDa0E2HFftepTGYFMGt6CDPqQmbYbQU%3D"
  },
  {
    id: 2,
    price: 30,
    quantity: 4,
    name: 'chenag',
    details: 'this is made of chenag',
    uri : "https://demostore121332.blob.core.windows.net/images/food1.jpg?sv=2018-03-28&ss=b&srt=sco&sp=rlac&se=2019-10-17T09:50:35Z&st=2019-09-16T01:50:35Z&spr=https&sig=tPN6aDJSveCJ%2BDa0E2HFftepTGYFMGt6CDPqQmbYbQU%3D"
  },
  {
    id: 3,
    price: 10,
    quantity: 3,
    name: 'chicken',
    details: 'this is made of chicken',
    uri: "https://demostore121332.blob.core.windows.net/images/food_sample.jpg?sv=2018-03-28&ss=b&srt=sco&sp=rlac&se=2019-10-17T09:50:35Z&st=2019-09-16T01:50:35Z&spr=https&sig=tPN6aDJSveCJ%2BDa0E2HFftepTGYFMGt6CDPqQmbYbQU%3D"
  },
  {
    id: 4,
    price: 20,
    quantity: 4,
    name: 'Chickenfry',
    details: 'this is made of chickenfry',
    uri : "https://demostore121332.blob.core.windows.net/images/food1.jpg?sv=2018-03-28&ss=b&srt=sco&sp=rlac&se=2019-10-17T09:50:35Z&st=2019-09-16T01:50:35Z&spr=https&sig=tPN6aDJSveCJ%2BDa0E2HFftepTGYFMGt6CDPqQmbYbQU%3D"
  },
  {
    id: 5,
    price: 20,
    quantity: 4,
    name: 'chenagNICEONE',
    details: 'this is made of chenag',
    uri: "https://demostore121332.blob.core.windows.net/images/food_sample.jpg?sv=2018-03-28&ss=b&srt=sco&sp=rlac&se=2019-10-17T09:50:35Z&st=2019-09-16T01:50:35Z&spr=https&sig=tPN6aDJSveCJ%2BDa0E2HFftepTGYFMGt6CDPqQmbYbQU%3D"
  }
];*/
  constructor(private router: Router, private data: DataService, private post: PostmealserService) { }

  ngOnInit() {
    this.post.getpostmeal().subscribe(
      (data) => {this.userinfo = data;
      console.log(this.userinfo);
      
    });
  }
logout() {
  sessionStorage.clear();
  this.router.navigate(['login']);
}
orders() {
 this.router.navigateByUrl('/myorders');
}
postMeal()  {
  this.router.navigateByUrl('/postmeal');
 }
 waller()  {
  this.router.navigateByUrl('/wallet');
 }
 homeitself() {
  this.router.navigateByUrl('/home');
 }
 newMessage(user1: Postmeal[]) {
  this.data.changeMessage(user1);
 }
 bookmeal() {
   this.router.navigateByUrl('/bookameal');
 }
}
