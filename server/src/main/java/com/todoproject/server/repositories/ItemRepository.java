package com.todoproject.server.repositories;

import com.todoproject.server.entities.Item;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long>{
    
}
