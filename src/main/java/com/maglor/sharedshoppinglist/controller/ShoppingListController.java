package com.maglor.sharedshoppinglist.controller;

import com.maglor.sharedshoppinglist.dto.ShoppingListDto;
import com.maglor.sharedshoppinglist.service.ShoppingListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/shopping-lists")
@CrossOrigin(origins = "http://localhost:4200")
public class ShoppingListController {

    @Autowired
    ShoppingListService shoppingListService;

    @GetMapping()
    public List<ShoppingListDto> getShoppingLists() {
        return shoppingListService.getShoppingLists();
    }

    @GetMapping("/{id}")
    public ShoppingListDto getShoppingList(@PathVariable String id) {
        return shoppingListService.getShoppingList(UUID.fromString(id));
    }

    @PostMapping()
    public ShoppingListDto createShoppingList(@RequestBody ShoppingListDto shoppingListDto) {
        return shoppingListService.createShoppingList(shoppingListDto);
    }

    @PutMapping()
    public ShoppingListDto updateShoppingList(@RequestBody ShoppingListDto shoppingListDto) {
        return shoppingListService.updateShoppingList(shoppingListDto);
    }

    @DeleteMapping("/{id}")
    public void deleteShoppingList(@PathVariable String id) {
        shoppingListService.deleteShoppingList(UUID.fromString(id));
    }
}
