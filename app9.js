// var Emitter = require("./emitter"); // cách 1 gọi đến emitter
var Emitter = require("events"); // có thể dụng Evets có sẫn trong nodejs
var eventConfig = require("./config")
// Bước 1 giờ tôi muốn bắt một cái sự kiện cần khởi tạo một cái đối tượng để quản lý cái việc bắt này 
// chúng ta sẽ khai báo một cái biến Emitter = new chúng ta khởi tạo mới một cái đối tượng quản lý và phát sự kiện emitter 

var emitter = new Emitter();

// khi mà cúng ta muốn bắt một cái sự kiện thì chúng ta sẽ thực hiện một cái hàm on 
// ví dụ: đề ra một cái sự kiện "bad" tức là điểm kém  và 1 cái fn lắng nghe để xử lý cái sự kiện này Thông báo một môn nào bị điểm kém 
emitter.on(eventConfig.events.BAD_SCORE, function () {
   console.log(" Một môn nào đó bị điểm kém!!!");
    
});

// và một hàm khi cái sự kiện bad này phát ra chúng ta sẽ nghe hai lần 

emitter.on(eventConfig.events.BAD_SCORE, function() {
    console.log("Đã có điểm kém, cần phát thông báo tới phụ huynh  ");
});

// ví dụ q học sinh có một cái bảng điểm 

var scores = [10, 4];

// for chúng ta sẽ sử dụng for trong Es6 đó là for.of
// cơ chế lặp của for of là một cái điểm là điểm s trong of của cái scores

for (var s of  scores){
  // và if nếu mà cái điểm s này nhỏ hơn 5
  if(s <5){
    // nghi một cái thông báo là điểm thấp quá
    console.log("Điểm thấp quá ", s);
    // ở đây chúng ta sẽ phát ra một cái sự kiện điểm thấp 
    emitter.emit(eventConfig.events.BAD_SCORE)
  }

  // và làm một cái việc khác đấy là insert vào DB tùy vào cái nghiệp vụ ứng dụng của bạn 
}

// ==> và khi chúng ta duyệt cái bảng điểm của học sinh nếu mà điểm nhỏ hơn > 5 thì chúng ta ra một cái thông báo là điểm thấp quá 


// thông qua ví dụ trên chúng ta vừa xây dựng xong một cái ứng dụng có thể kiểm soát và thông báo sự kiện về cơ bản thì nó rất giống với events emitter của nodejs 
// hãy thực hành cái ví dụ này lại một lần nữa::: bằng cách là thay đổi cái tên sự kiện đi hoặc là tự nghĩ ra một cái tình huống để cài đặt cái trương trình này 


// ======>> Có một vấn đề mà chúng ta đang gặp phải là chúng ta đang phải gõ rất nhiều lần cái tên sự kiện "bad" này Như vậy trong nhiều trường hợp cái tên Event này
//          Qúa dài làm cho chúng ta gõ nhầm hoặc là khó kiểm soát 

//   *****       =>>   Và một cái phương án tốt nhất là chúng ta đưa vào cái cấu hình và chúng ta chỉ cần tham chiếu đến một cái biến string mà thôi 

// để làm như vậy chúng ta tạo ra một cái file config.js 