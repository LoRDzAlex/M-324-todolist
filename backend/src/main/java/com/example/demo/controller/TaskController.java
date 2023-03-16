package com.example.demo.controller;



import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;
import com.example.demo.requests.TodoRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/task")
@CrossOrigin(origins = "*")
public class TaskController {
    private TaskRepository taskRepository;
    @Autowired
    public void setTaskRepository(TaskRepository taskRepository){
        this.taskRepository = taskRepository;
    }

    @GetMapping("/")
    public ResponseEntity<Iterable<Task>>getTasks() {

        return ResponseEntity.ok(taskRepository.findAll());
    }


    @PostMapping("/tasks")
    public ResponseEntity<String> addTask(@RequestBody TodoRequest taskRequest) {
        System.out.println("API Ep ' /tasks':"+taskRequest.getTaskdescription()+"'");

        taskRepository.save(new Task(taskRequest.getTaskdescription()));
        return ResponseEntity.ok("redirect:/");
    }


    @PostMapping("/delete")
    public ResponseEntity<String> delTask(@RequestBody TodoRequest taskRequest) {

        taskRepository.deleteByTaskdescription(taskRequest.getTaskdescription());

        return ResponseEntity.ok("rediect:/");
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

