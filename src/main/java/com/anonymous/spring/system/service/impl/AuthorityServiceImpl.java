package com.anonymous.spring.system.service.impl;

import com.anonymous.spring.system.model.entity.Authority;
import com.anonymous.spring.system.repository.AuthorityRepository;
import com.anonymous.spring.system.service.AuthorityService;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class AuthorityServiceImpl implements AuthorityService {

    private final AuthorityRepository authorityRepository;

    public AuthorityServiceImpl(AuthorityRepository authorityRepository) {
        this.authorityRepository = authorityRepository;
    }

    @Override
    public Collection<Authority> getAllAuthority() {
        return this.authorityRepository.findAll();
    }

    @Override
    public Authority save(Authority authority) {
        return this.authorityRepository.save(authority);
    }

    @Override
    public void delete(Long id) {
        this.authorityRepository.deleteById(id);
    }
}
