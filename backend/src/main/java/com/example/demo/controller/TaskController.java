package com.example.demo.controller;



import com.example.demo.model.Task;
import com.example.demo.model.TaskV2;
import com.example.demo.repository.TaskRepository;
import com.example.demo.repository.TaskV2Repository;
import com.example.demo.requests.TodoRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/")
@CrossOrigin(origins = "*")
public class TaskController {
    private TaskRepository taskRepository;
    @Autowired
    public void setTaskRepository(TaskRepository taskRepository){
        this.taskRepository = taskRepository;
    }

    private TaskV2Repository taskv2Repository;
    @Autowired
    public void setTaskV2Repository(TaskV2Repository taskv2Repository){
        this.taskv2Repository = taskv2Repository;
    }
    @GetMapping("/api/v1/tasks")
    public ResponseEntity<Iterable<Task>>getTasksV1() {

        return ResponseEntity.ok(taskRepository.findAll());
    }

    @GetMapping("/api/v2/tasks")
    public ResponseEntity<Iterable<TaskV2>>getTasksV2() {

        return ResponseEntity.ok(taskv2Repository.findAll());
    }

    @GetMapping(value = "/tasks/header", headers = "X-API-VERSION=1")
    public ResponseEntity<Iterable<Task>> getTasksHeaderV1() {
        return ResponseEntity.ok(taskRepository.findAll());
    }

    @GetMapping(value = "/tasks/header", headers = "X-API-VERSION=2")
    public ResponseEntity<Iterable<TaskV2>> getTasksHeaderV2() {
        return ResponseEntity.ok(taskv2Repository.findAll());
    }

    @GetMapping(value = "/tasks/param", params = "version=1")
    public ResponseEntity<Iterable<Task>> getTasksParamV1() {
        return ResponseEntity.ok(taskRepository.findAll());
    }

    @GetMapping(value = "/tasks/param", params = "version=2")
    public ResponseEntity<Iterable<TaskV2>> getTasksParamV2() {
        return ResponseEntity.ok(taskv2Repository.findAll());
    }

    @GetMapping(value = "/tasks/produces", produces = "application/demo.task.app-v1+json")
    public ResponseEntity<Iterable<Task>> getTasksProducesV1() {
        return ResponseEntity.ok(taskRepository.findAll());
    }

    @GetMapping(value = "/tasks/produces", produces = "application/demo.task.app-v2+json")
    public ResponseEntity<Iterable<TaskV2>> getTasksProducesV2() {
        return ResponseEntity.ok(taskv2Repository.findAll());
    }

    @PostMapping("/api/v1/task")
    public ResponseEntity<String> addTask(@RequestParam String taskdescription) {
        taskRepository.save(new Task(taskdescription));
        return ResponseEntity.ok("TaskV1 saved");
    }

    @PostMapping("/api/v2/task")
    public ResponseEntity<String> addTaskV2(@RequestParam String taskdescription, @RequestParam String category) {
        taskv2Repository.save(new TaskV2(taskdescription, category));
        return ResponseEntity.ok("TaskV2 saved");
    }

    @PostMapping (path = "")
    public ResponseEntity<String> createTask(@RequestParam String taskdescription){
        Task task = new Task(taskdescription);
        try {
            taskRepository.save(task);
        }catch (Exception ex){
            System.out.println("Fehler beim Erstellen einer Task");
        }

        return ResponseEntity.ok("Saved Task with description: "+taskdescription);
    }

    @DeleteMapping(path = "")
    public ResponseEntity<String> deleteTask(@RequestParam int id){
        try{
            taskRepository.deleteById(id);
        }catch (Exception ex){
            System.out.println("Fehler beim Löschen");
        }
        return ResponseEntity.ok("Deleted Task "+ id);
    }
}

