package com.anonymous.spring.system.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "LOGIN_HISTORY")
public class LoginHistory implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // login date time
    @Column(name = "login_date")
    private LocalDateTime loginDateTime;

    // logout date time
    @Column(name = "logout_date")
    private LocalDateTime logoutDateTime;

    // login from ip
    @Column(name = "ip_adress")
    private String ipAddress;

    // login user
    @JoinColumn(name = "user_id")
    @ManyToOne(optional = false)
    private User loginUser;

    @JsonBackReference
    @OneToMany(fetch = FetchType.EAGER, orphanRemoval = true, cascade = CascadeType.ALL, mappedBy = "loginHistory")
    private List<RequestHistory> requestHistories;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getLoginDateTime() {
        return loginDateTime;
    }

    public void setLoginDateTime(LocalDateTime loginDateTime) {
        this.loginDateTime = loginDateTime;
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }

    public LocalDateTime getLogoutDateTime() {
        return logoutDateTime;
    }

    public void setLogoutDateTime(LocalDateTime logoutDateTime) {
        this.logoutDateTime = logoutDateTime;
    }

    public User getLoginUser() {
        return loginUser;
    }

    public void setLoginUser(User loginUser) {
        this.loginUser = loginUser;
    }

    public List<RequestHistory> getRequestHistories() {
        return requestHistories;
    }

    public void setRequestHistories(List<RequestHistory> requestHistories) {
        this.requestHistories = requestHistories;
    }

    public void add(RequestHistory requestHistory) {
        if (requestHistories == null) {
            requestHistories = new ArrayList<>();
        }

        requestHistories.add(requestHistory);
        requestHistory.setLoginHistory(this);
    }
}
