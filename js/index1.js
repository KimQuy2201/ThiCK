$(document).ready(function(e){
    // $('#openModal').click(function(){
    //     $('#modal').modal();
    // })
    

    var i = 0;
    var hoten = $('#txthoten');
    var phone = $('#txtphone');
    var date = $('#txtdate');
    

//Kiểm tra họ tên
    function checkHoten() {
        var tbhoten = $('#tbhoten');
        re= /^[A-Z][a-z]|(\s[A-Z][a-z]+)+$/g;

        if (hoten.val() == "") {
            tbhoten.html("Bắt buộc nhập!");
            return false;
        }
        if (!re.test(hoten.val())) {
            tbhoten.html("Nhập sai định dạng!");
            return false;
        }
        tbhoten.html("");
        return true;
    }
    hoten.blur(checkHoten);

//Kiểm tra số điện thoại
    function checkSdt() {
        var tbphone = $('#tbphone');
        re = /^(84|0[3|5|7|8|9])+([0-9]{8})\b$/;

        if (phone.val() == "") {
            tbphone.html("Bắt buộc nhập!");
            return false;
        }
        if (!re.test(phone.val())) {
            tbphone.html("Nhập theo định dạng")
            return false;
        }
        tbphone.html("");
        return true;
    }
    phone.blur(checkSdt);   
    
    
//Kiểm tra ngày nhận tiệc
    function checkDate() {
        var tbdate = $('#tbdate');
        var toDay = new Date();
        var day = new Date(date.val());

        if (date.val() == "") {
            tbdate.html("Bắt buộc nhập!");
            return false;
        }
        if (day < toDay) {
            tbdate.html("Ngay nhan tiec phai sau ngay hien tai");
            return false;
        }
        tbdate.html("");
        return true;
    }
    date.blur(checkDate);

    //Kiểm tra Save
   var i =1;
   $('#btnSave').click(function() {
       if (checkHoten() , checkSdt() , checkDate()) {
           var item = '<tr><td>' + (i++) + '</td><td>' + hoten.val() + '</td><td>' + phone.val() + '</td><td>' + date.val() ;
           $('#table').append(item);
           $('#myModal').modal('hide');
       }
   })
    
})