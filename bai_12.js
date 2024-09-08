// Kiểm tra tính hợp lệ của thông tin nhập vào. Xây dựng
// một trang Web cho người dùng nhập vào tên và tuổi,
// kiểm tra thông tin nhập vào không được để trống và
// phần tuổi chỉ chấp nhận giá trị số.
//validate :xac thuc
//digits: chu so
//temp: bien tam thoi(temporary variable)
// Kiểm tra tính hợp lệ của thông tin nhập vào.
//substring: sử dụng để trích xuất một phần của chuỗi
function validate() {
    var digits = "0123456789";
    var temp;

    // Kiểm tra trường "Ten" không được để trống
    if (document.testform.Ten.value == "") {
        alert("Khong co ten!");
        return false;
    }

    // Kiểm tra trường "Tuoi" không được để trống
    if (document.testform.Tuoi.value == "") {
        alert("Tuoi khong hop le!");
        return false;
    }

    // Kiểm tra xem giá trị của trường "Tuoi" có phải là số không
    for (var i = 0; i < document.testform.Tuoi.value.length; i++) { // Lặp qua từng ký tự trong giá trị của trường "Tuoi".
        temp = document.testform.Tuoi.value.substring(i, i + 1); // Lấy ký tự tại vị trí i của giá trị tuổi.
        if (digits.indexOf(temp) == -1) { // Kiểm tra xem ký tự temp có phải là số hay không.
            alert("Tuoi khong hop le");
            return false;
        }
    }

    return true;
}
