// Cho người dùng nhập vào năm sinh của họ, sau đó hiển thị tuổi tương ứng.
function HienThiTuoi(){
    var D =new Date();
    var NamSinh, NamHienTai;
    NamHienTai = D.getFullYear();
    NamSinh = prompt("Ban sinh nam bao nhieu?: ","");
    alert("Tuoi cua ban la :" +(NamHienTai - NamSinh));
}