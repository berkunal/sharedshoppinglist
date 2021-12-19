package com.maglor.sharedshoppinglist.repository;

import com.maglor.sharedshoppinglist.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    User findByName(String name);
}
