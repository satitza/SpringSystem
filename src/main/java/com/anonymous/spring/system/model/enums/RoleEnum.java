package com.anonymous.spring.system.model.enums;

public enum RoleEnum {

    ADMIN("ADMIN"),
    MANAGER("MANAGER"),
    IT("IT"),
    USER("USER");

    private final String name;

    RoleEnum(String name) {
        this.name = name;
    }

    public String getValue() {
        return this.name;
    }
}
