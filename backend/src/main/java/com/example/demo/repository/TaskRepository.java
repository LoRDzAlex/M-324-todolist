package com.example.demo.repository;

import com.example.demo.model.Task;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends CrudRepository<Task, Integer> {

    void deleteByTaskdescription(String taskdescription);

    Task findByTaskdescription(String Taskdescription);

    Task findById(int id);
}