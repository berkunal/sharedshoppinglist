package com.maglor.sharedshoppinglist.repository;

import com.maglor.sharedshoppinglist.model.Item;
import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ItemRepository extends JpaRepository<Item, UUID> {
    @NonNull List<Item> findAll();

    @Override
    void deleteById(@NonNull UUID uuid);

    @Override
    @NonNull
    Optional<Item> findById(@NonNull UUID uuid);

}
