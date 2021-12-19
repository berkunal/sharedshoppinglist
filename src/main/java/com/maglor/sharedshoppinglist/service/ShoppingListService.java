package com.maglor.sharedshoppinglist.service;

import com.maglor.sharedshoppinglist.dto.Mapper;
import com.maglor.sharedshoppinglist.dto.ShoppingListDto;
import com.maglor.sharedshoppinglist.model.ShoppingList;
import com.maglor.sharedshoppinglist.repository.ShoppingListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class ShoppingListService {

    @Autowired
    ShoppingListRepository shoppingListRepository;

    @Autowired
    Mapper mapper;

    public List<ShoppingListDto> getShoppingLists() {
        return shoppingListRepository.findAll()
                .stream()
                .map(shoppingList -> mapper.toDto(shoppingList))
                .collect(Collectors.toList());
    }

    public ShoppingListDto getShoppingList(UUID id) {
        ShoppingList shoppingList = shoppingListRepository.findById(id).orElse(null);
        if (shoppingList == null) {
            return null;
        }
        return mapper.toDto(shoppingList);
    }

    public ShoppingListDto createShoppingList(ShoppingListDto shoppingListDto) {
        return mapper.toDto(shoppingListRepository.save(mapper.toNewShoppingList(shoppingListDto)));
    }

    public ShoppingListDto updateShoppingList(ShoppingListDto shoppingListDto) {
        return mapper.toDto(shoppingListRepository.save(shoppingListRepository.getById(shoppingListDto.getId())));
    }

    public void deleteShoppingList(UUID id) {
        shoppingListRepository.deleteById(id);
    }
}
