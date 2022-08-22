var person = {
    firstName: " ",
    lastName: " ",

    getFullName: function () {
        return this.firstName + " " + this.lastName
    }
}

// thay vì chúng ta sẽ khai báo một class Function thì chúng ta sẽ sử dụng một cái hàm 
// đó là object.create 

// ví dụ có một đối tượng Hoa khởi tạo thông qua cái hàm create và tham số truyền vào là person mà chúng ta đẫ khai báo ở trên 
var hoa = Object.create(person);

// Thông qua cái hàm Object.create này thì chúng ta tạo ra một cái đối tượng mới có kế thừa các thuộc tính và phương thức của cái đối tượng person này 


// ví dụ mình sẽ gán giá trị mới cho cái cô tên là hoa này 

hoa.firstName = "Hà Nội";
hoa.lastName  = " Cầu giấy";

// và tạo ra một biến yến cũng tạo từ cái đối tượng person 

var yen = Object.create(person);

yen.firstName = "Admin";
yen.lastName = "User";


// tiếp đến chúng ta sẽ in thông tin ra giao diện console
// lúc này chúng ta sẽ sử dụng được cái đối tượng hoa và yến .getFullName() thưc hiện kế thừa cái đối tượng person này 
console.log(hoa.getFullName());
console.log(yen.getFullName());


// Kết luận chúng ta đã sử dụng hàm getFullName() được kế thưa từ cái đối tượng person 

// Và như vậy chúng ta có hai cách để tạo ra sự kế thừa các đối tượng ở trong javascript đó là prototype và object.create 
