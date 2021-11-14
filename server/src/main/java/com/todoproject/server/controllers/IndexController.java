package com.todoproject.server.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

import com.todoproject.server.entities.Item;
import com.todoproject.server.repositories.ItemRepository;

@RestController
@CrossOrigin
public class IndexController {
    
    @Autowired
    private ItemRepository repository;

    @GetMapping("/items")
    List<Item> all() {
      return repository.findAll();
    }

    @PostMapping(value = "/post-item", consumes = MediaType.APPLICATION_JSON_VALUE)
    Item newItem(@RequestBody Item newItem) {
        return repository.save(newItem);
    }

    @PutMapping("/items/put/completed/{id}")
    Item replaceCompleted(@RequestBody Item item, @PathVariable Long id) {
      return repository.findById(id)
      .map(oldItem -> {
        oldItem.setCompleted(item.getCompleted());
        return repository.save(oldItem);
      })
      .orElseGet(() -> {
        item.setId(id);
        return repository.save(item);
      });
    }

    @PutMapping("/items/put/name/{id}")
    Item replaceName(@RequestBody Item item, @PathVariable Long id) {
      return repository.findById(id)
      .map(oldItem -> {
        oldItem.setName(item.getName());
        return repository.save(oldItem);
      })
      .orElseGet(() -> {
        item.setId(id);
        return repository.save(item);
      });
    }

    @DeleteMapping("/items/delete/{id}")
    void deleteItem(@PathVariable Long id) {
      repository.deleteById(id);
  }
}