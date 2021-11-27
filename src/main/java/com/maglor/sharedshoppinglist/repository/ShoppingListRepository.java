package com.maglor.sharedshoppinglist.repository;

import com.maglor.sharedshoppinglist.model.ShoppingList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ShoppingListRepository extends JpaRepository<ShoppingList, UUID> {
}
