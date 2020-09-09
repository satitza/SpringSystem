package com.anonymous.spring.system.repository;

import com.anonymous.spring.system.model.entity.RequestHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestHistoryRepository extends JpaRepository<RequestHistory, Long> {

}
