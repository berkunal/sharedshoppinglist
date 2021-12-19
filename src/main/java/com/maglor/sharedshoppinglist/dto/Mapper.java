package com.maglor.sharedshoppinglist.dto;

import com.maglor.sharedshoppinglist.model.ShoppingList;
import com.maglor.sharedshoppinglist.model.User;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class Mapper {
    public UserInfo toInfo(User user) {
        return new UserInfo(
                user.getId(),
                user.getName(),
                user.getPassword());
    }

    public ShoppingListInfo toInfo(ShoppingList shoppingList) {
        return new ShoppingListInfo(
                shoppingList.getId(),
                shoppingList.getName(),
                shoppingList.getDescription(),
                shoppingList.getSubShoppingLists());
    }

    public UserDto toDto(User user) {
        List<ShoppingListInfo> shoppingListInfoList = user.getShoppingLists()
                .stream()
                .map(this::toInfo)
                .collect(Collectors.toList());

        return new UserDto(
                user.getId(),
                user.getName(),
                user.getPassword(),
                shoppingListInfoList
        );
    }

    public ShoppingListDto toDto(ShoppingList shoppingList) {
        List<UserInfo> userInfoList = shoppingList.getUsers()
                .stream()
                .map(this::toInfo)
                .collect(Collectors.toList());

        return new ShoppingListDto(
                shoppingList.getId(),
                shoppingList.getName(),
                shoppingList.getDescription(),
                shoppingList.getSubShoppingLists(),
                userInfoList
        );
    }

    public User toNewUser(UserDto userDto) {
        return new User(
                userDto.getName(),
                userDto.getPassword(),
                new ArrayList<>()
        );
    }

    public ShoppingList toNewShoppingList(ShoppingListDto shoppingListDto) {
        return new ShoppingList(
                shoppingListDto.getName(),
                shoppingListDto.getDescription(),
                shoppingListDto.getSubShoppingLists(),
                new ArrayList<>()
        );
    }
}
