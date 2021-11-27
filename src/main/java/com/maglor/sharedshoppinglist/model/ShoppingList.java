package com.maglor.sharedshoppinglist.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
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
}
