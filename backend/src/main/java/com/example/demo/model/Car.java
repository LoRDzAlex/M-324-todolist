package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.sql.Date;
import java.util.Objects;

@Entity
public class Car {
    @Id
    @GeneratedValue
    private Integer id;

    private String carName;
    private Integer maxSpeed;
    private Date releaseDate;
    private String carType;

    public Car() {

    }

    public Car(String carName, Integer maxSpeed, Date releaseDate, String carType) {
        this.carName = carName;
        this.maxSpeed = maxSpeed;
        this.releaseDate = releaseDate;
        this.carType = carType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        carName = carName;
    }

    public Integer getMaxSpeed() {
        return maxSpeed;
    }

    public void setMaxSpeed(Integer maxSpeed) {
        maxSpeed = maxSpeed;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        releaseDate = releaseDate;
    }

    public String getCarType() {
        return carType;
    }

    public void setCarType(String carType) {
        carType = carType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Car car = (Car) o;
        return Objects.equals(id, car.id) && Objects.equals(carName, car.carName) && Objects.equals(maxSpeed, car.maxSpeed) && Objects.equals(releaseDate, car.releaseDate) && Objects.equals(carType, car.carType);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, carName, maxSpeed, releaseDate, carType);
    }
}
