package com.anonymous.spring.system.model.enums;

public enum AuthorityEnum {

    READ_API("READ_API"),
    EDIT_API("EDIT_API"),
    DELETE_API("DELETE_API"),
    ACCESS_PUBLIC_API("ACCESS_PUBLIC_API"),
    ACCESS_PRIVATE_API("ACCESS_PRIVATE_API");

    private final String name;

    AuthorityEnum(String name) {
        this.name = name;
    }

    public String getValue() {
        return this.name;
    }
}
