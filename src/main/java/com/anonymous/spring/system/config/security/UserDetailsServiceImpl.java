package com.anonymous.spring.system.config.security;

import com.anonymous.spring.system.model.entity.Role;
import com.anonymous.spring.system.model.entity.User;
import com.anonymous.spring.system.repository.UserRepository;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        if (username == null) {
            throw new BadCredentialsException("กรุณาระบุบัญชีผู้ใช้งานและรหัสผ่าน");
        }

        org.springframework.security.core.userdetails.User user;
        try {
            Optional<User> findUser = this.userRepository.findByUsername(username);
            if (findUser.isPresent() && findUser.get().isEnabled()) {
                /*Collection<GrantedAuthority> authorities = new ArrayList<>();
                authorities.addAll(findUser.get().getAuthorities());
                authorities.addAll(mapRolesToAuthorities(findUser.get().getRoles()));*/
                user = new org.springframework.security.core.userdetails.User(findUser.get().getUsername(), findUser.get().getPassword(), findUser.get().getAuthorities());
            } else {
                throw new BadCredentialsException("ไม่พบบัญชีผู้ใช้งาน");
            }
        } catch (UsernameNotFoundException ex) {
            throw new BadCredentialsException("ไม่พบบัญชีผู้ใช้งาน");
        }
        return user;
    }

    private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<Role> roles) {
        return roles.stream().map(role -> new
                SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }
}
