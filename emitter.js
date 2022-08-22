// emitter.js có nhiệm vụ kích hoạt và xử lý các sự kiện 

// Bước 1: trong module này sễ định nghĩa ra một funtion nhưng sẽ không có tham số truyền vào 

function Emitter () {
    // trong fn sẽ định nghĩa một cái thuộc tính evnts để lưu dữ các cái sự kiện mà chúng ta thêm mới vào, bổ sung vào, 
    // lưu ý chúng ta khai báo một obj {} nên là có thể lưu giữ được bất cứ một cái sự kiện nào đó 
    this.events = {}
}

// Bước 2: đi khai báo một cái fn trên cái Prototype của cái đối tượng emitter này 
//         chúng ta sẽ bổ sung một cái fn ở trên cái emitter bằng cách là truy cập đến Prototype thêm vào một cái hàm đặt tên là on

// on này nó rất giống với tên của các cái module = một cái fn và tham số truyền vào là type (tên sự kiện gì ) và cái hàm listener để chúng ta có thể gọi lại khi cái sự kiện type này 
// được kích hoạt 

Emitter.prototype.on = function (type, listener ) {
    // trong hàm này sẽ đẩy cái event , bổ sung nó vào cái event này một cái hàm listener  và sẽ phải kiểm tra xem là nó đã có tồn tại hay chưa nếu mà chưa có thì trả về đối tượng rỗng  
    this.events[type] = this.events[type] || []; // tức là đối với sự kiện này mình có thể lưu trữ được rất nhiều một mảng cái listner một cái hàm xử lý sau khi sự kiện xảy ra 
    this.events[type].push(listener); // đẩy trong mảng sự kiện có kiểu là type 

}

// ở Bước 2: mình đã mở rộng ra một cái hàm on trên cái Emitter thông qua prototype 


// Bước 3 cần phải định nghĩa thêm một hàm kích hoạt emit (có nghĩa là phát ra)

Emitter.prototype.emit = function (type) {
    // kiểm tra if nếu mà có sự kiện ở trong cái emitter này thì chúng ta sẽ thực hiện phát cái sự kiện đó ra 
    if(this.events[type]){
        // ở bài học trước chúng ta đã sử dụng cái hàm foreach để chúng ta gọi đến  duyệt các phần tử trong cái mảng event này với kiểu là type 

        // và chúng ta sẽ thực hiện kích hoạt cái sự kiện này bằng cách là gọi lại cái hàm listner
        this.events[type].forEach(function (listener) {
            listener();// duyệt mảng & gọi hàm 
        })
    }
}

// Bước 4: kết thúc cái modole này chúng ta phải chìa ra cái function này để cho các cái ứng dụng khác các cái module 
// khác sử dụng :

module.exports = Emitter;

// Tiếp đến chúng ta phải quay lai chương trình chính là file app9.js  để  viết logic cho cái ứng dụng này 
