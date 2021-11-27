package com.maglor.sharedshoppinglist.service;

import com.maglor.sharedshoppinglist.model.ShoppingList;
import com.maglor.sharedshoppinglist.repository.ShoppingListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ShoppingListService {

    @Autowired
    ShoppingListRepository shoppingListRepository;

    public List<ShoppingList> getShoppingLists() {
        return shoppingListRepository.findAll();
    }

    public ShoppingList getShoppingList(UUID id) {
        return shoppingListRepository.findById(id).orElse(null);
    }

    public ShoppingList createShoppingList(ShoppingList shoppingList) {
        return shoppingListRepository.save(shoppingList);
    }

    public ShoppingList updateShoppingList(ShoppingList shoppingList) {
        return shoppingListRepository.save(shoppingList);
    }

    public void deleteShoppingList(UUID id) {
        shoppingListRepository.deleteById(id);
    }
}
