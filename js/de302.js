$(document).ready(function(e){
    
    var name = $('#txtName');
    var tbname = $('#tbName');

    var CMND = $('#txtCMND');
    var tbCMND = $('#tbCMND');

    var quequan = $('#txtquequan');
    var tbquequan = $('#tbquequan');

    var email = $('#txtemail');
    var tbemail = $('#tbemail');

    var phone = $('#txtphone');
    var tbphone = $('#tbphone');

    // Kiểm tra tên
    function CheckName() {
        var re = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;

        if (name.val() == "") {
           tbname.html("Bắt buộc nhập!");
            return false;
        }
        if (!re.test(name.val())) {
            tbname.html("Kí tự đầu phải viết hoa! Ví dụ: Tran Thanh Hung");
            return false;
        }
        tbname.html("");
        return true;
    }
    name.blur(CheckName);


    // Kiểm tra SCMND cũ
    function CheckCMND() {
        re = /^[0-9]\d{8}$/;

        if (CMND.val() == "") {
            tbCMND.html("Bắt buộc nhập!");
            return false;
        }
        if (!re.test(CMND.val())) {
            tbCMND.html("CMND gồm 9 chữ số!");
            return false;
        }
        tbCMND.html("");
        return true;
    }
    CMND.blur(CheckCMND);

    // Kiểm tra quê quán
    function CheckQue() {
        re = /^[A-Z][A-Z]+(\s[A-Z][A-Z]+)*$/g;

        if (quequan.val() == "") {
            tbquequan.html("Bắt buộc nhập!");
            return false;
        }
        if (!re.test(quequan.val())) {
            tbquequan.html("Viết in hoa!");
            return false;
        }
        tbquequan.html("");
        return true;
    }
    quequan.blur(CheckQue);

    // Kiểm tra email
    function CheckEmail() {
        re = /^[a-zA-Z0-9.\_\-]+@iuh.edu.vn$/;

        if (email.val() == "") {
            tbemail.html("Bắt buộc nhập!");
            return false;
        }
        if (!re.test(email.val())) {
            tbemail.html("Nhập theo định dạng: xxxxxx@iuh.edu.vn");
            return false;
        }
        tbemail.html("");
        return true;
    }
    email.blur(CheckEmail);


    //Kiểm tra số điện thoại
    function CheckPhone() {
        re = /^0\d{2}-\d{3}-\d{4}$/;

        if (phone.val() == "") {
            tbphone.html("Bắt buộc nhập!");
            return false;
        }
        if (!re.test(phone.val())) {
            tbphone.html("Nhập theo định dạng: 0xx-xxx-xxx");
            return false;
        }
        tbphone.html("");
        return true;
    }
    phone.blur(CheckPhone);
    
    var pic = $('#pic');
    var tbpic = $('#tbpic');

    function CheckPic() {
        if (pic.val() == "") {
            tbpic.html("Không được bỏ trống!");
            return false;
        }
        tbpic.html("");
        return true;
    }
    pic.blur(CheckPic);

    var i=1;
    $('#btnSave').click(function() {
        if (CheckName()  && CheckCMND()  && CheckQue()  && CheckEmail()  && CheckPhone() && CheckPic()) {
            var item  = '<tr><td>' +(i++) + '</td><td>' + name.val() + '</td><td>' + CMND.val() + '</td><td>' 
            + quequan.val() + '</td><td>' + email.val() + '</td><td>' + phone.val() + '</td><td>' + pic.val() + '</td></tr>';

            $('#table').append(item);
            $('#myModal').modal('hide');
            
        } 
        else {
            alert('Viết vô đi má!')
        }  
    })
})