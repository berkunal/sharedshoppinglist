package com.maglor.sharedshoppinglist.controller;

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
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable String id) {
        return userService.getUserById(UUID.fromString(id));
    }

    @PostMapping()
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @PutMapping()
    public User updateUser(@RequestBody User user) {
        return userService.updateUser(user);
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
