package com.example.api_user.dto;

import lombok.Data;

@Data
public class UserDTO {
    private int id;
    private String username;
    private String email;
    private String role;
    private String password; // Pode ser omitido se não for necessário expor a senha
}