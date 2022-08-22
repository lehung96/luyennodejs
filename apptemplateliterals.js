// Bước1 chúng ta sẽ khai bào một Template Literals cơ bản cái đối tượng person 


var person = {
    name: "Hà Nội",
    age: 20
}


// Bước 2 và bây giờ thay vì sử dụng dấu + mình có thể nối các cái chuỗi với nhau trực tiếp ở trong cái cú pháp Template Literals

// ghi ra giao diện conso

console.log("Tôi là " + person.name + ", và tôi " + person.age + "tuổi !");
console.log(`Tôi la ${person.name}, và tôi ${person.age} tuổi !
 
    xuống dòng rất nhiều !!!
    chơi được cả dấu  "nháy kép" nữa
`);
