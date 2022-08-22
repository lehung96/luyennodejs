var util = require("util")

var name = "Hoa";

var message = util.format("hello, %s", name);

console.log(message);
util.log(message);

console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));

//lưu ý: sau này có thể sử dụng cái util này thực hiện kiểm tra một cái đối tượng có phải là mảng hay không'