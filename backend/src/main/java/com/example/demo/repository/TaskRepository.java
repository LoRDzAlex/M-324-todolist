package com.example.demo.repository;

import com.example.demo.model.Task;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TaskRepository extends CrudRepository<Task, Integer> {

    void deleteByTaskdescription(String taskdescription);

    Optional<Task> findByTaskdescription(String Taskdescription);
    @Override
    Optional<Task> findById(Integer integer);
}
