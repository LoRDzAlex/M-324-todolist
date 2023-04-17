package com.example.demo.repository;

import com.example.demo.model.TaskV2;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskV2Repository extends CrudRepository<TaskV2, Integer> {

        TaskV2 findByTaskdescription(String taskdescription);
        TaskV2 findByCategory(String category);
        TaskV2 findById(int id);
}
