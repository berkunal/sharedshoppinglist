package com.maglor.sharedshoppinglist.service;

import com.maglor.sharedshoppinglist.dto.Mapper;
import com.maglor.sharedshoppinglist.dto.UserDto;
import com.maglor.sharedshoppinglist.model.LoginForm;
import com.maglor.sharedshoppinglist.model.User;
import com.maglor.sharedshoppinglist.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    Mapper mapper;

    public List<UserDto> getUsers() {
        return userRepository.findAll().stream().map(user -> mapper.toDto(user)).collect(Collectors.toList());
    }

    public UserDto getUserById(UUID id) {
        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return null;
        }
        return mapper.toDto(user);
    }

    public UserDto getUserByName(String username) {
        User user = userRepository.findByName(username);
        if (user == null) {
            return null;
        }
        return mapper.toDto(user);
    }

    public UserDto createUser(UserDto userDto) {
        return mapper.toDto(userRepository.save(mapper.toNewUser(userDto)));
    }

    public UserDto updateUser(UserDto userDto) {
        return mapper.toDto(userRepository.save(userRepository.getById(userDto.getId())));
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
