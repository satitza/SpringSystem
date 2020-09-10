package com.anonymous.spring.system.model.enums;

public enum NotifyTypeEnum {

    LOGIN("LOGIN"),
    HTTP_LOG("HTTP_LOG");

    private final String name;

    NotifyTypeEnum(String name) {
        this.name = name;
    }

    public String getValue() {
        return this.name;
    }

}
