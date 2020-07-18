<%@ page language="java" import="java.util.*" pageEncoding="utf-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <meta name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no"/>
    <base href="<%=basePath%>">

    <title>My JSP 'MyJsp.jsp' starting page</title>

    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
    <meta http-equiv="description" content="This is my page">
    <script type="text/javascript" src="../../../../resources/static/js/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="js/user/user.js"></script>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/user/user.css">


</head>

<body>
<div id="index_css">
    <div class="head"></div>

    <div id="from_div">
        <div id="from_qie">
            <button id="but1" style="background: #ffffff" class="but">登录</button>
            <button id="but2" class="but">注册</button>
        </div>
        <div class="login_css_1">
        <form action="login/log" method="post" id="from">
            <div class="from_dic1">
                <div><h4 class="h4_css_1">账号登录</h4></div>
                <div class="username"><label class="user_name">账号：</label><input onblur="userName()" class="user_input"  placeholder="请输入登录账号"  id="form-name" type="text" name="username"></div>
                <div class="password"><label class="user_pass">密码：</label><input onblur="userPass()" class="user_input"  placeholder="请输入登录密码" id="form-pass"  type="password" name="password"></div>
                <div id="mes"><a style="color: red;">${mes}</a></div>
                <div id="from_sub"><input id="submit_btn" class="btn btn-primary" type="submit" value="点击登录"></div>
            </div>
            <div class="checkbox_css"><input class="checkbox" type="checkbox" name=""><label id="jizhumima">记住密码</label></div>
            <div class="checkbox_css_1"><a href="#" class="wangji">忘记密码</a></div>
    </form>
        </div>
        <div class="reg_css_1">
            <form action="" method="post" id="froms">
                <div class="from_dic1">
                    <div><h4 class="h4_css_1">账号注册</h4></div>
                    <div class="username_1"><label>账号：</label><input  class="user_input" onblur="userNames()" id="username_1" type="text" name="username"></div>
                    <div class="password_1"><label>密码：</label><input  class="user_input" onblur="userPasss()" id="password_1" type="password" name="password"></div>
                    <div class="sex_1"><label>性别：</label><select  class="user_input name="sex">
                        <option value="0">男</option>
                        <option value="1">女</option>
                    </select></div>
                    <div class="age_1"><label>年龄：</label><input onblur="userAge()" id="age_1" class="user_input" type="text" name="age"></div>
                    <div class="email_1"><label>邮箱：</label><input onblur="userEmail()" id="email_1"  class="user_input" type="text" name="email"></div>
                    <div class="phone_1"><label>手机：</label><input onblur="userPhone()" id="phone_1" class="user_input" type="text" name="phone"></div>
                    <div id="from_sub"><input id="submit_btn" class="btn btn-primary" type="submit" value="提交"></div>
                </div>
            </form>
        </div>

</div>




</div>
</body>
</html>
