package com.anonymous.spring.system.service;

import com.anonymous.spring.system.model.entity.Authority;

import java.util.Collection;

public interface AuthorityService {

    Collection<Authority> getAllAuthority();

    Authority save(Authority authority);

    void delete(Long id);
}
