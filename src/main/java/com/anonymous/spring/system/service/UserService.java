package com.anonymous.spring.system.service;

import com.anonymous.spring.system.model.entity.User;

import java.util.Collection;

public interface UserService {

    Collection<User> getAllUsers();

    User saveUser(User user);

    void deleteUser(Long id);

}
