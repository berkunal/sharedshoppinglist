package com.maglor.sharedshoppinglist.dto;

import com.maglor.sharedshoppinglist.model.SubShoppingList;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
public class ShoppingListInfo {
    private UUID id;
    private String name;
    private String description;
    private List<SubShoppingList> subShoppingLists;
}
