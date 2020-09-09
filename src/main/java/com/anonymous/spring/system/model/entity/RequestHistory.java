package com.anonymous.spring.system.model.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "REQUEST_HISTORY")
public class RequestHistory implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "request_path")
    private String requestPath;

    @Column(name = "request_method")
    private String requestMethod;

    @Column(name = "request_date_time")
    private LocalDateTime requestDateTime;

    @Lob
    @Column(name = "request_body")
    private String requestBody;

    @JoinColumn(name = "login_id")
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private LoginHistory loginHistory;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRequestPath() {
        return requestPath;
    }

    public void setRequestPath(String requestPath) {
        this.requestPath = requestPath;
    }

    public String getRequestMethod() {
        return requestMethod;
    }

    public void setRequestMethod(String requestMethod) {
        this.requestMethod = requestMethod;
    }

    public LocalDateTime getRequestDateTime() {
        return requestDateTime;
    }

    public void setRequestDateTime(LocalDateTime requestDateTime) {
        this.requestDateTime = requestDateTime;
    }

    public String getRequestBody() {
        return requestBody;
    }

    public void setRequestBody(String requestBody) {
        this.requestBody = requestBody;
    }

    public LoginHistory getLoginHistory() {
        return loginHistory;
    }

    public void setLoginHistory(LoginHistory loginHistory) {
        this.loginHistory = loginHistory;
    }
}
