package com.maglor.sharedshoppinglist.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class UserInfo {
    private UUID id;
    private String name;
    private String email;
    private String password;
}
