// bước 1 sẽ khai báo một cái đối tượng obj Literals

var obj = {
    name: "Hà Nôi",
    // và có một cái hàm của đối tượng này là sayHello()
    sayHello: function (params1, params2) {
        // sử dụng kiểu nối chuỗi templa  teliterals 
        console.log(`Hello ${this.name}`);
        console.log("params: ", params1, params2);
    }
}

obj.sayHello("Xin chào", "2022");

// Bây giờ chúng ta thử dùng hàm call và hàm apply thì sao?
// Ví dụ một obj litter có tên sau đây sẽ gọi một cái hàm call 
obj.sayHello.call({name: "Sài Gòn"});

//với hàm apply thì khác gì không ? 
obj.sayHello.apply({name: "Sài Gòn" })


// vậy hàm call và apply khác nhau chỗ nào ?và sự khác nhau giữa call và apply chính là cách chúng ta truyền vào tham số

// đối với call thì chúng ta chuyền vào list (danh sách tham số ) và sẽ liệt kê danh sách vào đây 
obj.sayHello.call({name: "Sài Gòn"}, "xin chào", "2017");

// đối với apply thì tham số chúng ta truyền vào dưới dạng một mảng []
obj.sayHello.apply({name: "Sài Gòn"}, ["xin chào", "2022"])

// ====> Kết luận call và apply cho phép thay đổi cái ngữ cảnh của cái từ khóa this ở đây với kỹ thuật này giúp chúng ta làm việc với một cái đối tượng mới 

