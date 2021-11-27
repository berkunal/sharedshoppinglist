package com.maglor.sharedshoppinglist.repository;

import com.maglor.sharedshoppinglist.model.SubShoppingList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SubShoppingListRepository extends JpaRepository<SubShoppingList, UUID> {
}
