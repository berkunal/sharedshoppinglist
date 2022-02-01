package com.maglor.sharedshoppinglist.service;

import com.maglor.sharedshoppinglist.EmailConfiguration;
import com.maglor.sharedshoppinglist.dto.Mapper;
import com.maglor.sharedshoppinglist.dto.ShoppingListDto;
import com.maglor.sharedshoppinglist.dto.UserInfo;
import com.maglor.sharedshoppinglist.model.ShoppingList;
import com.maglor.sharedshoppinglist.repository.ShoppingListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ShoppingListService {

    @Autowired
    ShoppingListRepository shoppingListRepository;

    @Autowired
    Mapper mapper;

    @Autowired
    private EmailConfiguration emailConfiguration;

    public List<ShoppingListDto> getShoppingLists() {
        return shoppingListRepository.findAll()
                .stream()
                .map(shoppingList -> mapper.toDto(shoppingList))
                .collect(Collectors.toList());
    }

    public ShoppingListDto getShoppingList(UUID id) {
        ShoppingList shoppingList = shoppingListRepository.findById(id).orElse(null);
        return shoppingList == null ? null : mapper.toDto(shoppingList);
    }

    public ShoppingListDto createShoppingList(ShoppingListDto shoppingListDto) {
        ShoppingList shoppingList = mapper.toNewShoppingList(shoppingListDto);
        return mapper.toDto(shoppingListRepository.save(shoppingList));
    }

    public ShoppingListDto updateShoppingList(ShoppingListDto shoppingListDto) {
        ShoppingListDto historicalDto = mapper.toDto(Objects.requireNonNull(shoppingListRepository.findById(shoppingListDto.getId()).orElse(null)));
        ShoppingListDto updatedDto = mapper.toDto(shoppingListRepository.save(mapper.toShoppingList(shoppingListDto)));

        UserInfo userInfo = shoppingListDto.getUsers()
                .stream()
                .filter(user -> !historicalDto.getUsers().contains(user))
                .findFirst()
                .orElse(null);

        JavaMailSenderImpl mailSender = getJavaMailSender();
        if (userInfo != null) {
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setFrom("noreply@sharedshoppinglist.com");
            mailMessage.setTo(userInfo.getEmail());
            mailMessage.setSubject("You have been added to a shopping list!");
            mailMessage.setText("Hello from Shared Shopping List App");

            mailSender.send(mailMessage);
        } else {
            shoppingListDto.getUsers().forEach(user -> {
                SimpleMailMessage mailMessage = new SimpleMailMessage();
                mailMessage.setFrom("noreply@sharedshoppinglist.com");
                mailMessage.setTo(user.getEmail());
                mailMessage.setSubject(updatedDto.getName() + " has been updated!");
                mailMessage.setText("The " + updatedDto.getName() + " list that you are a member of, has been updated!");

                mailSender.send(mailMessage);
            });
        }

        return updatedDto;
    }

    private JavaMailSenderImpl getJavaMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost(this.emailConfiguration.getHost());
        mailSender.setPort(this.emailConfiguration.getPort());
        mailSender.setUsername(this.emailConfiguration.getUsername());
        mailSender.setPassword(this.emailConfiguration.getPassword());
        return mailSender;
    }

    public void deleteShoppingList(UUID id) {
        shoppingListRepository.deleteById(id);
    }
}
