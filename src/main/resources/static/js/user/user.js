$(document).ready(function () {
    $("#but1").click(function () {
        $(".login_css_1").css("display", "block");
        $("#but1").css("background", "#ffffff");
        $(".reg_css_1").css("display", "none");
        $("#but2").css("background", "");
    });
    $("#but2").click(function () {
        $(".login_css_1").css("display", "none");
        $("#but1").css("background", "");

        $(".reg_css_1").css("display", "block");
        $("#but2").css("background", "#ffffff");

    });

});


function userName() {
    var check = false;
    var name = document.getElementById("form-name").value;
    var yanzheng = /^[a-zA-Z][a-zA-Z0-9]{5,19}/;
    var flag = yanzheng.test(name);
    if (flag) {
        check = true;
        $("#form-name")[0].style.border = "1px solid #1ec54f";
    } else {
        document.getElementById("form-name").setAttribute("placeholder", "由字母和数字组成不少于6位");
        $("#form-name")[0].style.border = "1px solid red";
    }
    return check;
}

function userPass() {
    var check = false;
    var pass = document.getElementById("form-pass").value;
    var her = /^[a-zA-Z][a-zA-Z0-9]{5,19}/;
    var flag = her.test(pass);
    if (flag) {
        check = true;
        $("#form-pass")[0].style.border = "1px solid #1ec54f";
    } else {
        document.getElementById("form-pass").setAttribute("placeholder", "由字母和数字组成不少于6位");
        $("#form-pass")[0].style.border = "1px solid red";
    }
    return check;

}

function userNames() {
    var check = false;
    var username = document.getElementById("username_1").value;
    var her = /^[a-zA-Z][a-zA-Z0-9]{5,19}/;
    var flag = her.test(username);
    if (flag) {
        $.post("login/sel", {username: username}, function (data) {
            if (data == false) {
                $("#username_1").val("");
                document.getElementById("username_1").setAttribute("placeholder", "用户名已经存在！");
                $("#username_1")[0].style.border = "1px solid red";
            } else {
                check = true;
                $("#username_1")[0].style.border = "1px solid #1ec54f";
            }
        });

    } else {
        document.getElementById("username_1").setAttribute("placeholder", "由字母和数字组成不少于6位");
        $("#username_1")[0].style.border = "1px solid red";
    }
    return check;
}

function userPasss() {
    var check = false;
    var username = document.getElementById("password_1").value;
    var her = /^[a-zA-Z][a-zA-Z0-9]{5,19}/;
    var flag = her.test(username);
    if (flag) {
        check = true;
        $("#password_1")[0].style.border = "1px solid #1ec54f";
    } else {
        document.getElementById("password_1").setAttribute("placeholder", "由字母和数字组成不少于6位");
        $("#password_1")[0].style.border = "1px solid red";
    }
    return check;
}

function userAge() {
    var check = false;
    var username = document.getElementById("age_1").value;
    var her = /^(?:[1-9]?\d|100)$/;
    var flag = her.test(username);
    if (flag) {
        check = true;
        $("#age_1")[0].style.border = "1px solid #1ec54f";
    } else {
        document.getElementById("age_1").setAttribute("placeholder", "年龄1-100");
        $("#age_1")[0].style.border = "1px solid red";
    }
    return check;
}

function userEmail() {
    var check = false;
    var username = document.getElementById("email_1").value;
    var her = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
    var flag = her.test(username);
    if (flag) {
        check = true;
        $("#email_1")[0].style.border = "1px solid #1ec54f";
    } else {
        document.getElementById("email_1").setAttribute("placeholder", "格式为：XXX@qq.com、XXX@163.com");
        $("#email_1")[0].style.border = "1px solid red";
    }
    return check;
}

function userPhone() {
    var check = false;
    var username = document.getElementById("phone_1").value;
    var her = /0?(13|14|15|18|17)[0-9]{9}/;
    var flag = her.test(username);
    if (flag) {
        check = true;
        $("#phone_1")[0].style.border = "1px solid #1ec54f";
    } else {
        document.getElementById("phone_1").setAttribute("placeholder", "格式为：138XXXXXXXX");
        $("#phone_1")[0].style.border = "1px solid red";
    }
    return check;
}


window.onload = function () {
    document.getElementById("from").onsubmit = function () {
        return userName() && userPass();
    }
    document.getElementById("froms").onsubmit = function () {
        return userNames() && userPasss() && userAge() && userEmail() && userPhone();
    }
}
