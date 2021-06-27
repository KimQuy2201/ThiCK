$(document).ready(() => {
    var dongia = $('#dongia');
    var kyhan= $('#kyhan');
    var thongtin = $('#thongtin');
    var sdt = $('#sdt');
    var diachi = $('#diachi');
    var thanhtoan = $('#thanhtoan')
    var stt=1;

    var pay = $("input[name = 'thanhtoan']");
    var pay1 = $("input:radio[value = 'Chuyen khoan']");
    var pay2 = $("input:radio[value = 'Tien mat']");
    var strPay = "";

    var check = $("input[type = 'checkbox']");
    var strCheck;
    var countCheck = 0;


    //check so o check
    check.change(function() {
        checkChange = $("input[type = 'checkbox']: checked");
        strCheck = "";
        for (val of checkChange){
            strCheck += val.value + "; ";
            countCheck++;
        }
        console.log(strCheck);
    })



    //change đơn giá khi chọn kỳ hạn
    kyhan.change(() => {
        let list = ["", "300000", "500000", "800000"];
        dongia.val(list[kyhan.val()]);
    });

    
    $('#btndatbao').click(() => {
        checkName();
        checkPhone();
        checkAdd();
    })

    //check thong tin lien lac
    function checkName() {
        var regex = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
        let tbttll = $('#tbttll');

        if (thongtin.val() == "") {
            tbttll.html("Bắt buộc nhập!");
            return false;
        }
        if (!regex.test(thongtin.val())) {
            tbttll.html("Nhập lại thông tin!");
            return false;
        }
        tbttll.html("");
        return true;
    }
    thongtin.blur(checkName);

    //check so dien thoai
    function checkPhone() {
        var regex = /((09|07|08)+([0-9]{8})\b)/g;
        let tbsdt = $('#tbsdt');
        
        if (!sdt.val().match(regex)) {
            tbsdt.html('Số điện thoại sai định dạng');
        }
        else {
            tbsdt.html('');
        }
    }

    //check dic chi
    function checkAdd() {
        let tbdiachi = $('#tbdiachi');

        if (diachi.val() == ""){
            tbdiachi.html('Nhập địa chỉ!');
            return false;
        }
        tbdiachi.html('');
        return true;
    }
    diachi.blur(checkAdd);

    //change hinh thuc thanh toan
    pay.change(function() {  
        if ($(this).val() == 'Chuyen khoan'){
            strPay = "Chuyen khoan";
            pay2.prop('checked', false);
        }
        else{
            strPay = "Tien mat";
            pay1.prop('checked', false);
        }
        console.log(strPay);
    })

    //Tổng tiền
    function TongThanhTien(){
        return parseInt(dongia.val()) * parseInt(countCheck);
    }

    
});