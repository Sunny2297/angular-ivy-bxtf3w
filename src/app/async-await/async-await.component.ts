import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css'],
})
export class AsyncAwaitComponent implements OnInit {
  // async keyword used before any function then that function always return promise
  //  async getData(){
  //    return "return promises"
  //  }

  // laptop=new Promise((resolve,reject)=>{
  //   setTimeout(()=>{
  //     resolve("promise will resolve after 3 sec")
  //   },3000)
  // })

  // async getPromise(){
  //   let res=await this.laptop;  //if we not give await then we get null value
  //   console.log(res);
  // }
   
  constructor() {
    // this.getPromise();
    
  
  }
  hp: any = [
    { brand: 'HP', price: 50000, processr: '11th gen i7', ram: '8Gb' },
  ];

  laptop = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.hp);
    }, 7000);
  });

//using promise
  fetch1Data() {
   let result1 = document.getElementById('res1');
    result1.innerText = 'fetching data';
    this.laptop.then((res) => {
      result1.innerText = JSON.stringify(res);
    });
  }

  //using async and await
  async fetch2Data(){
    let result2 = document.getElementById('res2');
    result2.innerHTML="fetching data"
    await this.laptop.then((res)=>{
      result2.innerText=JSON.stringify(res);
    })
  
  }

 

  ngOnInit() {
    // this.getData().then(console.log)
  }
}
