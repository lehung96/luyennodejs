//với  Object  chúng ta khai báo theo kiểu object literal
var obj = {
    sayHello: "Hello"
}

console.log(obj.sayHello);
// có thể gọi thuộc tính sayHelo bằng cách khác không ?
// chúng ta ko sử dụng dấu . mà chúng ta sử dụng bằng cách gọi truy cập đến index bằng cái mảng [ ] truyền vào cái propetyName nhưng mà chúng ta chuyền vào một string 
console.log(obj["sayHello"]);

// mà còn một cách nữa là 
var prop =  "sayHello";

//  và lúc này thay vì truyền trực tiếp sayHello này thì chúng ta sẽ truyền cái biến mà chúng ta mới khai báo song 

console.log(obj[prop]);
  
//==>>   với fn và arr thì sao cách gọi của chúng thì có giống object hay ko ? 

var arr = []; // có một mảng rỗng như thế này ?

// gọi nhanh một cái hàm push() đẩy vào một cái fuction 


arr.push( function(){
   // trong cái function này làm một nhiềm vụ là log ra
   console.log("Hello Nodejs 1");
});
arr.push( function(){
   // trong cái function này làm một nhiềm vụ là log ra
   console.log("Hello Nodejs 2");
});
arr.push( function(){
   // trong cái function này làm một nhiềm vụ là log ra
   console.log("Hello Nodejs 3");
});

// đầy 3 cái phần tử vào trong cái mảng arr và có thể gọi cái mảng arr một cách trực tiếp truy cập đến một cái phần tử thứ nhất bằng cách là truyền vào chỉ số 0  

arr[0](); // phần tử thứ 1 sẽ được thực thi 
arr[1](); // phần tử thứ 2 sẽ được thực thi 
arr[2](); // phần tử thứ 3 sẽ được thực thi 


console.log("==================================");


//====>>> và có một cách gọi đặc biệt hơn đó là chúng ta sẽ sử dụng cái vòng lặp for duyệt cái mảng arr này 


 
// for  duyệt các phần tử của mảng này chúng ta sẽ gọi đến các function trong này như thế nào ?
// dùng một cái hàm sẵn có trong javascript là forEach gọi hàm callback này sẽ trả về cho chúng ta trong cái mảng arr này 

arr.forEach(function (item) {
    item();
});



