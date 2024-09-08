// Viết đoạn Script cho người dùng nhập vào một số nguyên. Nếu người
// dùng nhập số 1 thì mở trang http://www.facebook, nếu nhập số 2 thì
// mở trang http://www.hust.edu.vn, còn nếu nhập một số khác với 1, 2
// thì mở trang http://www.google.com
function NhapSoNguyen(){
    var LuaChon;
    LuaChon = prompt("Ban hay nhap vao 1 so de mo trang web:", 1);
    switch(LuaChon){
        case "1" : window.open("http://www.facebook");break;
        case "2" : window.open("http://www.hust.edu.vn"); break;
        default : window.open("http://www.google.com");
    }
}