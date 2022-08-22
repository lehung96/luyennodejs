'user strict';

class Pesron {
    constructor(firstName, lastName){
     this.firstName = firstName;
     this.lastName = lastName;
    }
    // chúng ta cần phải tạo ra một cái hàm sayHello ở trong cái class Person này 
    // chúng ta cần phải định nghĩa hàm ở đây 
    // định nghĩa function 

    sayHello() {
        // in một dòng thông báo ra màn hình console
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }


}

// cách sử dụng class
var Hanoi = new Pesron("Ba Đình", " Cầu giấy");
Hanoi.sayHello();

// chúng ta cần khai báo một đối tượng nữa thì 
var saigon = new Pesron("Q1", "Q2");

saigon.sayHello();





// ko dùng Es6 
// function Pesron (firstName, lastName){
//      this.firstName = firstName;
//      this.lastName  = lastName;
//  }

//  Pesron.prototype.sayHello = function() {
//     console.log("Hello" + this.firstName + " "+ this.lastName);
    
//  }


//  var p = new Pesron("Hà Nôi", "Sài Gòn");

//  p.sayHello();