// tạo ra một đối tượng kế thừa Event Emitter
// khai báo một cái biến là EventEmitter 

var EventEmitter = require("events");

var util = require("util");

// Bược 1 là chúng ta sẽ tạo ra một cái hôm thoại Dialog()
function Dialog(){
    // và trong cái Dialog này chúng ta sẽ có một cái thuộc tính là Dialog()

    this.message = "Hello World";

}

// và lúc này tôi mong muốn là sử dụng cái thư viện util để kế thừa những gì có sẵn trong Event Emitter 
// tham số truyền vào util thứ nhất là Dialog, tham số thứ 2 là đối tượng cha chúng ta mong muốn kế thừa EventEmitter
util.inherits(Dialog, EventEmitter)


// Bước 2 chúng ta sẽ mở rộng thêm  Dialog này một cái hàm sayHello 

Dialog.prototype.sayHello = function(data) {
    // và trong này sẽ in cái message này  ra 
    console.log(this.message +": " + data);
// và sau khi in ra chúng ta sẽ emit
  this.emit("hello", data );

}

// Bước 3 Lúc này chúng ta sẽ bắt đầu khởi tạo một đối tượng dialog

var dialog = new Dialog();

// và chúng ta sẽ lắng nghe một cái sự kiện là "hello" truyền vào một cái hàm xử lý khi mà có sự kiện "hello" này xảy ra   
dialog.on("hello", function (data) {
    //và chúng ta sẽ nghi một cái dòng thông điệp ra cái giao diện console
console.log("có một lời chào mới !", data);
});

// và chúng ta gọi đến cái hàm sayHello này 

dialog.sayHello("Mai Hoa");

//---------------------------------------------

//và trong cái event Emitter này có một tính năng rất hay đó là chúng ta có thể truyền dữ liệu, có thể emit("hello") một cái event và 
// chúng ta  sẽ truyền cái dữ liệu cái data sang cho cái hàm dialog lắng nghe này để xử lý cái dữ liệu đó 
dialog.on("hello", function (params) {
    //và chúng ta sẽ nghi một cái dòng thông điệp ra cái giao diện console
console.log("có một lời chào mới !");
});

// ====== > Chúng ta có thể viết một cái ứng dụng để có thể trao đổi dữ liệu thông qua " emit  " và on tạo ra một cái file appEventEmitter2.js



