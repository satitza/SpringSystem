package com.anonymous.spring.system.config.security;

import com.anonymous.spring.system.repository.UserRepository;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.ldap.AuthenticationException;
import org.springframework.ldap.core.DirContextAdapter;
import org.springframework.ldap.core.DirContextOperations;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.ldap.authentication.ad.ActiveDirectoryLdapAuthenticationProvider;
import org.springframework.security.ldap.userdetails.UserDetailsContextMapper;

import java.util.Collection;

@Configuration
@ConfigurationProperties("spring.ldap")
public class ActiveDirectoryConfig {

    private String urls;
    private String domain;

    public void setUrls(String urls) {
        this.urls = urls;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    private final UserRepository userRepository;

    public ActiveDirectoryConfig(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Bean
    public ActiveDirectoryLdapAuthenticationProvider activeDirectoryLdapAuthenticationProvider() {
        ActiveDirectoryLdapAuthenticationProvider activeDirectoryLdapAuthenticationProvider = new
                ActiveDirectoryLdapAuthenticationProvider(domain, urls);
        activeDirectoryLdapAuthenticationProvider.setUserDetailsContextMapper(new UserDetailsContextMapper() {
            @Override
            public UserDetails mapUserFromContext(DirContextOperations ctx, String username, Collection<? extends GrantedAuthority> authorities) {
                return userRepository.findByUsername(username)
                        .map(e -> {
                            e.getAuthorities();
                            return e;
                        })
                        .orElseThrow(AuthenticationException::new);
            }

            @Override
            public void mapUserToContext(UserDetails userDetails, DirContextAdapter dirContextAdapter) {

            }
        });

        return activeDirectoryLdapAuthenticationProvider;
    }
}
