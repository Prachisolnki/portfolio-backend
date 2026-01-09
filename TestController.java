package com.prachi.portfoliobackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class TestController {

    // Home endpoint
    @GetMapping("/")
    public String home() {
        return "Portfolio Backend is running!";
    }

    // Simple hello endpoint
    @GetMapping("/api/hello")
    public String hello() {
        return "Hello from Portfolio Backend!";
    }

    // Sample projects endpoint
    @GetMapping("/api/projects")
    public List<Map<String, String>> getProjects() {
        List<Map<String, String>> projects = new ArrayList<>();
        projects.add(Map.of("id", "1", "name", "Bank Management System", "tech", "Java, OOP, File Handling"));
        projects.add(Map.of("id", "2", "name", "Portfolio Website", "tech", "HTML, CSS, JS, Spring Boot"));
        return projects;
    }

    // Contact form simulation endpoint
    @PostMapping("/api/contact")
    public String contact(@RequestBody Map<String, String> contactForm) {
        String name = contactForm.getOrDefault("name", "Unknown");
        String email = contactForm.getOrDefault("email", "Unknown");
        String message = contactForm.getOrDefault("message", "No message");

        // Here you could add mail sending logic
        return "Thanks " + name + "! Your message has been received.";
    }
}
