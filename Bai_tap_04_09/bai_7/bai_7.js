//Cho người dùng nhập vào tên và tuổi. Hãy viết lại tên và tuổi của người
// đó ra màn hình bằng hàm document.write, trong đó tên có màu đậm,
// tuổi được gạch chân.
function HienThiThongTin(){
    var Ten,Tuoi; // Khai bao 2 bien de luu ten & tuoi
        // var result = prompt([message[, default]]); để hiển thị một hộp thoại yêu cầu(nhac nho) người dùng nhập dữ liệu.
    Ten = prompt("Ban nhap ten cua minh","");
    Tuoi = prompt("Ban nhap so tuoi cua minh","20");

    document.write("chao ban <b>" +Ten+ "</b>")
    document.write("<br>");
    document.write("tuoi cua ban la: <u>" +Tuoi+ "</u>");
}
