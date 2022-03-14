package com.examly.springapp.loginrepository;

import com.examly.springapp.login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface loginrepository extends JpaRepository<login,String>{
    
}
