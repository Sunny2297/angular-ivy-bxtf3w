import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-and-from-operator',
  templateUrl: './of-and-from-operator.component.html',
  styleUrls: ['./of-and-from-operator.component.css']
})
export class OfAndFromOperatorComponent implements OnInit {

  dataHolder;
  constructor() { }

  ngOnInit() {
    //by of Operator we can we create stream 
 const data=of({a:'Bhushan',b:'Sanjay',c:'Jangale'});

 data.subscribe(res=>{
   this.dataHolder=res
   console.log(res);
 })


 //create Observable from Array ,an Array Like object, a promise 


 //Array
const arr=["ds","sd","sf","fs"];
 const DataFromArray= from(arr)

 DataFromArray.subscribe(data=>{
 //  console.log(data)
 })

 //promise 
 
 let promise=new Promise((resolve,reject)=>{
   setTimeout(()=>{  resolve("promise is resolved")},3000)
 
 })

 const promiseObservable= from(promise);
 promiseObservable.subscribe(res=>{
   console.log(res)
 })

  }

}