import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css'],
})
export class PromisesComponent implements OnInit {
  hp: any = [
    { brand: 'HP', price: 50000, processr: '11th gen i7', ram: '8Gb' },
  ];

  dell: any = [
    { brand: 'Dell' },
    { price: 60000 },
    { processr: '11th gen i5' },
    { ram: '8Gb' },
  ];

  hpLaptop() {
    return true;
  }
  dellLaptop() {
    return false;
  }

  constructor() {}

  ngOnInit() {
    // let laptop=new Promise((resolve,reject)=>{
    //   resolve("Resolve promise")
    // })

    // laptop.then(res=>console.log(res))
    let laptop = new Promise((resolve, reject) => {
      if (this.hpLaptop()) {
        setTimeout(() => {
          resolve(this.hp);
        }, 3000);
      } else if (this.dell) {
        resolve(this.dell);
      } else {
        reject('No laptop purchased');
      }
    })
      .then((res) => console.log(res))
      .catch((rej) => console.log(rej));
  }
}
