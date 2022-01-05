package com.maglor.sharedshoppinglist.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
public class UserDto {
    private UUID id;
    private String name;
    private String email;
    private String password;
    private List<ShoppingListInfo> shoppingLists;
}
