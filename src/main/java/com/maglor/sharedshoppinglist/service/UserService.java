package com.maglor.sharedshoppinglist.service;

import com.maglor.sharedshoppinglist.model.LoginForm;
import com.maglor.sharedshoppinglist.model.User;
import com.maglor.sharedshoppinglist.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User getUserById(UUID id) {
        return userRepository.findById(id).orElse(null);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(UUID id) {
        userRepository.deleteById(id);
    }

    public User authenticate(LoginForm form) {
        User user = userRepository.findByName(form.getName());

        if (user != null && form.getPassword().equals(user.getPassword())) {
            return user;
        }

        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Authentication failed!");
    }
}
