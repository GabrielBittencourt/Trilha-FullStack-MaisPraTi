package com.example.api_user.repository;

import com.example.api_user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    // Métodos adicionais, se necessário
    User findByUsername(String username);
}
