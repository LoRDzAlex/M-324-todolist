package com.example.demo.controller;


import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;
import com.example.demo.requests.TodoRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/task")
public class TaskController {
    @Autowired
    TaskRepository taskRepository;

    @CrossOrigin
    @GetMapping("/")
    public ResponseEntity<Iterable<Task>>getTasks() {

        return ResponseEntity.ok(taskRepository.findAll());
    }

    @CrossOrigin
    @PostMapping("/tasks")
    public ResponseEntity<String> addTask(@RequestBody TodoRequest taskRequest) {
        System.out.println("API Ep ' /tasks':"+taskRequest.getTaskdescription()+"'");

        taskRepository.save(new Task(taskRequest.getTaskdescription()));
        return ResponseEntity.ok("redirect:/");
    }

    @CrossOrigin
    @PostMapping("/delete")
    public ResponseEntity<String> delTask(@RequestBody TodoRequest taskRequest) {

        taskRepository.deleteByTaskdescription(taskRequest.getTaskdescription());

        return ResponseEntity.ok("rediect:/");
    }

}

