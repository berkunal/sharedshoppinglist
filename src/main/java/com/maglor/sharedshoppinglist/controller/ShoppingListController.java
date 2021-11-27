package com.maglor.sharedshoppinglist.controller;

import com.maglor.sharedshoppinglist.model.ShoppingList;
import com.maglor.sharedshoppinglist.service.ShoppingListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/shopping-lists")
public class ShoppingListController {

    @Autowired
    ShoppingListService shoppingListService;

    @GetMapping()
    public List<ShoppingList> getShoppingList() {
        return shoppingListService.getShoppingLists();
    }

    @GetMapping("/{id}")
    public ShoppingList getShoppingList(@PathVariable String id) {
        return shoppingListService.getShoppingList(UUID.fromString(id));
    }

    @PostMapping()
    public ShoppingList createShoppingList(@RequestBody ShoppingList shoppingList) {
        return shoppingListService.createShoppingList(shoppingList);
    }

    @PutMapping()
    public ShoppingList updateShoppingList(@RequestBody ShoppingList shoppingList) {
        return shoppingListService.updateShoppingList(shoppingList);
    }

    @DeleteMapping("/{id}")
    public void deleteShoppingList(@PathVariable String id) {
        shoppingListService.deleteShoppingList(UUID.fromString(id));
    }
}
