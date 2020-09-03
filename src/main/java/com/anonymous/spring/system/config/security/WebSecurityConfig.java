package com.anonymous.spring.system.config.security;

import com.anonymous.spring.system.model.entity.Role;
import com.anonymous.spring.system.model.enums.AuthorityEnum;
import com.anonymous.spring.system.model.enums.RoleEnum;
import com.anonymous.spring.system.service.LoginHistoryService;
import com.anonymous.spring.system.service.impl.LoginHistoryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.ldap.authentication.ad.ActiveDirectoryLdapAuthenticationProvider;
import org.springframework.security.web.authentication.logout.HttpStatusReturningLogoutSuccessHandler;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final BCryptPasswordEncoder passwordEncoder;

    private final UserDetailsServiceImpl userDetailsService;

    private final ActiveDirectoryLdapAuthenticationProvider activeDirectoryLdapAuthenticationProvider;

    private final LoginHistoryServiceImpl loginHistoryService;

    public WebSecurityConfig(BCryptPasswordEncoder passwordEncoder, UserDetailsServiceImpl userDetailsService, ActiveDirectoryLdapAuthenticationProvider activeDirectoryLdapAuthenticationProvider, LoginHistoryServiceImpl loginHistoryService) {
        this.passwordEncoder = passwordEncoder;
        this.userDetailsService = userDetailsService;
        this.activeDirectoryLdapAuthenticationProvider = activeDirectoryLdapAuthenticationProvider;
        this.loginHistoryService = loginHistoryService;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {

        /*User.UserBuilder user = User.withDefaultPasswordEncoder();
        auth.inMemoryAuthentication()
                .withUser(user.username("anonymous").password("dr823c1HEE").roles("ADMIN").authorities("READ_API"));*/

        auth.authenticationProvider(authenticationProvider());
        // auth.authenticationProvider(activeDirectoryLdapAuthenticationProvider);
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider auth = new DaoAuthenticationProvider();
        auth.setUserDetailsService(this.userDetailsService);
        auth.setPasswordEncoder(this.passwordEncoder);
        return auth;
    }

    /*----------------------------------------------------------------------------------------------------------------------*/

    @Override
    public void configure(WebSecurity web) {
        web.ignoring()
                .antMatchers(HttpMethod.OPTIONS, "/**")
                .antMatchers("/**/*.{js,html,ico,css,jpg,png}");

    }

    @Bean
    public AuthSuccessHandler authSuccessHandler() {
        return new AuthSuccessHandler(this.loginHistoryService);
    }

    @Bean
    public AuthFailureHandler authFailureHandler() {
        return new AuthFailureHandler();
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.csrf()/*.disable()*/.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
                .and()
                .authorizeRequests()
                .antMatchers("/public/**").permitAll()
                .and()
                .authorizeRequests()
                /*.antMatchers("/api/**").authenticated()*/
                .antMatchers("/api/user/current").hasAuthority(AuthorityEnum.ACCESS_PUBLIC_API.getValue())
                .antMatchers("/api/user/delete/**").hasAuthority(AuthorityEnum.DELETE_API.getValue())
                .antMatchers("/api/home/read").hasAuthority(AuthorityEnum.READ_API.getValue())
                .antMatchers("/api/home/edit").hasAuthority(AuthorityEnum.DELETE_API.getValue())
                .antMatchers("/api/admin/**").hasRole(RoleEnum.ADMIN.getValue())
                .antMatchers("/api/admin/read").hasAuthority(AuthorityEnum.READ_API.getValue())
                .antMatchers("/api/admin/edit").hasAuthority(AuthorityEnum.EDIT_API.getValue())
                .antMatchers("/api/log/**").hasRole(RoleEnum.ADMIN.getValue())
                .and()
                .exceptionHandling()
                .authenticationEntryPoint((request, response, e) -> {
                    response.setStatus(HttpStatus.UNAUTHORIZED.value());
                    response.getWriter().write("{ \"error\": \"You are not authenticated.\" }");
                    if (e instanceof DisabledException) {
                        response.setStatus(HttpStatus.FORBIDDEN.value());
                        response.getWriter().write("{ \"error\": \"You have been forbidden.\" }");
                    }
                    response.setContentType("application/json");
                })
                .and()
                .formLogin()
                .loginProcessingUrl("/authentication").permitAll()
                .successHandler(authSuccessHandler())
                .failureHandler(authFailureHandler())
                .and()
                .logout()
                .logoutUrl("/logout")
                .invalidateHttpSession(true)
                .logoutSuccessHandler((new HttpStatusReturningLogoutSuccessHandler(HttpStatus.OK)));
    }
}

