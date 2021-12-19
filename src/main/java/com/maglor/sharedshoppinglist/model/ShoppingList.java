package com.maglor.sharedshoppinglist.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "shopping_lists")
public class ShoppingList {
    @Id
    @NonNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @NonNull
    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @NonNull
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<SubShoppingList> subShoppingLists;

    @NonNull
    @ManyToMany
    private List<User> users;

    public ShoppingList(@NonNull String name, String description, @NonNull List<SubShoppingList> subShoppingLists, @NonNull List<User> users) {
        this.name = name;
        this.description = description;
        this.subShoppingLists = subShoppingLists;
        this.users = users;
    }
}
