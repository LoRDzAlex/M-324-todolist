package com.example.demo.service;

import com.example.demo.model.Car;
import com.example.demo.model.Task;
import com.example.demo.repository.CarRepository;
import com.example.demo.repository.TaskRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.sql.Date;

/**
 * Loading TestData into Database
 */
@Component
public class DataBaseLoader implements CommandLineRunner {
    private final TaskRepository taskRepository;

    private final CarRepository carRepository;

    public DataBaseLoader(TaskRepository taskRepository, CarRepository carRepository) {
        this.taskRepository = taskRepository;
        this.carRepository = carRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        this.carRepository.save(new Car("NISSAN SKYLINE R34 GT-T", 250, Date.valueOf("1999-01-01"), "Sport Car"));
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
