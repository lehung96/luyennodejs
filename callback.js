// demo và chạy thử một cái chương trình có lời gọi hàm call back
var firstFunction = function (params) {
    console.log("I am first!");
}

// và một hàm 
var secondFunction = function(){
    setTimeout(firstFunction, 5000);
    console.log("Im second!");
};


secondFunction();