package com.shop.framework.user.controller;

import com.shop.framework.user.entity.Users;
import com.shop.framework.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping(value="/login")
public class UserController {
    @Autowired(required = false)
    UserService userService;

    @PostMapping(value = "/admin")
    public String UserByAdd(Users user, HttpServletRequest request, HttpServletResponse response){

        if(user.getUsername()!=null){
            HttpSession session=request.getSession();
            session.setAttribute("username",user.getUsername());
            Cookie cookie=new Cookie("username",user.getUsername());
            cookie.setMaxAge(1800);
            response.addCookie(cookie);
        }

        return null;
    }
}
