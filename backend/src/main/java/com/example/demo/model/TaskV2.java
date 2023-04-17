package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class TaskV2 {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    String category;
    String taskdescription;

    public TaskV2(String category, String taskdescription) {
        this.category = category;
        this.taskdescription = taskdescription;
    }

    public TaskV2() {

    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getTaskdescription() {
        return taskdescription;
    }

    public void setTaskdescription(String taskdescription) {
        this.taskdescription = taskdescription;
    }
}
