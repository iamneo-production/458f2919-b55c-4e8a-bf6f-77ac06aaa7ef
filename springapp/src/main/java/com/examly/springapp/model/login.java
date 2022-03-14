package com.examly.springapp.login;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class login{
    @Id
    private String Username;
    private String Password;

    public login(){

    }

    public String getUsername(){
        return Username;
    }

    public String getPassword(){
        return Password;
    }

    public String setUsername(String Username){
        this.Username = Username;
    }

    public String setPassword(Stirng Password){
        this.Password = Password;
    }
}