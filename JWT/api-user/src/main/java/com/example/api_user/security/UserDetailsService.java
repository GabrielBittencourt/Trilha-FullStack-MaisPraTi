package com.example.api_user.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface UserDetailsService {
    // ... existing methods ...
    UserDetails loadUserById(int userId);
} 