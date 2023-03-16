package com.example.demo.service;

import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * Loading TestData into Database
 */
@Component
public class DataBaseLoader implements CommandLineRunner {
    private final TaskRepository taskRepository;

    public DataBaseLoader(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        this.taskRepository.save(new Task("Fertig Coden"));
        this.taskRepository.save(new Task("Wäsche machen"));
        this.taskRepository.save(new Task("Bewerbung schreiben"));
        this.taskRepository.save(new Task("Laptop erneuern"));
        this.taskRepository.save(new Task("Grafikkarte austauschen"));
        this.taskRepository.save(new Task("Buch Lesen"));
        this.taskRepository.save(new Task("Firma Anrufen"));
        this.taskRepository.save(new Task("Python Lernen"));
    }
}
