package com.todoproject.server.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Item {
    
    private @Id @GeneratedValue Long id;
    private String name;
    private Boolean completed;

    Item() {}

    Item(String name, Boolean completed) {
        this.name = name;
        this.completed = completed;
    }

    public Long GetId() {
        return this.id;
    }

    public String GetName() {
        return this.name;
    }

    public Boolean GetCompleted() {
        return this.completed;
    }

    public void SetId(Long id) {
        this.id = id;
    }

    public void SetName(String name) {
        this.name = name;
    }

    public void SetCompleted(Boolean completed) {
        this.completed = completed;
    }
}
