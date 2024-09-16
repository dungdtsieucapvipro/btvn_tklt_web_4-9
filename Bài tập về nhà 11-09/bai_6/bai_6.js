var NumberOfRow = 1;
function Button1_onclick(){
    NumberOfRow ++;
    var mainDiv = document.getElementById('MainDiv');
    // lấy tham chiếu đến main Div
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id','innerDiv' + NumberOfRow);
    //tạo span để chứa đoạn text//tạo span để chứa đoạn text
    var newSpan = document.createElement('span');
    newSpan.innerHTML ="Enter Yours Email Address";
    // tạo một textbox mới
    var newTextBox = document.createElement('input');
    newTextBox.type = 'text';
    newTextBox.setAttribute('id','txtAddr'+ NumberOfRow);
    // tạo một nút button Remove mới
    var newButton = document.createElement('input');
    newButton.type = 'button';
    newButton.value = 'Remove';
    newButton.id = 'btn'+ NumberOfRow;
    // gắn sự kiện click cho button mới
    newButton.onclick = function RemoveEntry(){
        mainDiv = document.getElementById('MainDiv');
        mainDiv.removeChild(this.parentNode);
    }
    // append span, textbox và the button vào div
    newDiv.appendChild(newSpan);
    newDiv.appendChild(newTextBox);
    newDiv.appendChild(newButton);
    // cuối cùng gắn div mới vào main div
    mainDiv.appendChild(newDiv);
}