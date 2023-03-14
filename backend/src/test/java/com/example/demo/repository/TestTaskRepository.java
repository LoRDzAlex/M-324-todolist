package com.example.demo.repository;

import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
public class TestTaskRepository {
    @Autowired
    private TestEntityManager entityManager;
    @Autowired
    private TaskRepository taskRepository;
    @Test
    public void testSetup(){
        assertNotNull(entityManager);
    }

    @Test
    public void TestAddFind(){
        final String task = "test";
        Task t = new Task();
        t.setTaskdescription(task);
        Optional<Task> result = taskRepository.findByTaskdescription(task);

        assertTrue(result.isPresent());
        assertEquals(task, result.get().getTaskdescription());

    }
}
