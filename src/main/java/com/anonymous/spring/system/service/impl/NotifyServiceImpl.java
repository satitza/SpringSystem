package com.anonymous.spring.system.service.impl;

import com.anonymous.spring.system.model.enums.NotifyTypeEnum;
import com.anonymous.spring.system.repository.LoginHistoryRepository;
import com.anonymous.spring.system.service.NotifyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class NotifyServiceImpl implements NotifyService {

    private final Map<NotifyTypeEnum, Integer> mapNotify;

    private final LoginHistoryRepository loginHistoryRepository;

    private final SimpMessagingTemplate messagingTemplate;

    private static final Logger logger = LoggerFactory.getLogger(NotifyServiceImpl.class);

    public NotifyServiceImpl(LoginHistoryRepository loginHistoryRepository, SimpMessagingTemplate simpMessagingTemplate) {
        this.loginHistoryRepository = loginHistoryRepository;
        this.messagingTemplate = simpMessagingTemplate;

        this.mapNotify = new HashMap<>();
        this.mapNotify.put(NotifyTypeEnum.LOGIN, fetchByType(NotifyTypeEnum.LOGIN));
        this.mapNotify.put(NotifyTypeEnum.HTTP_LOG, fetchByType(NotifyTypeEnum.HTTP_LOG));
    }

    @Override
    public void updateNotifyInformation(NotifyTypeEnum type) {

        switch (type) {

            case LOGIN:
                this.mapNotify.put(type, this.fetchByType(type));
                this.messagingTemplate.convertAndSend("/topic/sum-login", this.mapNotify.get(type));
                break;
            case HTTP_LOG:
                this.mapNotify.put(type, this.fetchByType(type));
                this.messagingTemplate.convertAndSend("/topic/sum-http-log", this.mapNotify.get(type));
                break;
            default:

        }
    }

    public Integer fetchByType(NotifyTypeEnum type) {

        Integer temp;
        Integer result = 0;

        // เก็บค่าตัวเลขเดิมใว้ใน temp แล้วค่อย คิวรี่ หาก error ก็ return ค่าเดิมออกไป 555+
        temp = this.mapNotify.get(type);
        try {
            if (type == NotifyTypeEnum.LOGIN) {
                result = this.loginHistoryRepository.sumLoginHistory();
            } else if (type == NotifyTypeEnum.HTTP_LOG) {
                result = 0;
            }
        } catch (Exception ex) {
            logger.error(String.format("Notify service query error. returned old integer of notify type. %s", ex.getMessage()));
            result = temp;
        }
        return result;
    }
}
