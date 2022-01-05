package com.maglor.sharedshoppinglist.controller;

import com.maglor.sharedshoppinglist.dto.UserDto;
import com.maglor.sharedshoppinglist.model.LoginForm;
import com.maglor.sharedshoppinglist.model.User;
import com.maglor.sharedshoppinglist.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping()
    public List<UserDto> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/{id}")
    public UserDto getUserById(@PathVariable String id) {
        return userService.getUserById(UUID.fromString(id));
    }

    @GetMapping("/by-name/{username}")
    public UserDto getUserByName(@PathVariable String username) {
        return userService.getUserByName(username);
    }

    @PostMapping()
    public UserDto createUser(@RequestBody UserDto userDto) {
        return userService.createUser(userDto);
    }

    @PutMapping()
    public UserDto updateUser(@RequestBody UserDto userDto) {
        return userService.updateUser(userDto);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.deleteUser(UUID.fromString(id));
    }

    @PostMapping("/authenticate")
    public User authenticate(@RequestBody LoginForm form ) {
        return userService.authenticate(form);
    }
}
