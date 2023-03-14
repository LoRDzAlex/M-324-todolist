package com.example.demo.requests;

public class TodoRequest {

    private String taskdescription;

    private Integer id;

    public void setTaskdescription(String tankdescription){
        this.taskdescription = taskdescription;
    }

    public Integer getId(){
        return id;
    }
    public String getTaskdescription(){
        return taskdescription;
    }
}
