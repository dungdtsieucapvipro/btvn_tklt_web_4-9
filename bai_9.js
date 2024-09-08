// Hiển thị Giờ và phút trong thanh tiêu đề của cửa sổ khi
// trang Web được tải
function HienThiGioPhut(){
    var D = new Date();
    document.title = "Bay gio la: " +D.getHours() + " gio " +D.getMinutes() + " phut";
}