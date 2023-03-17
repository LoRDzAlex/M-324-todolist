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

    private String CarName;
    private Integer MaxSpeed;
    private Date ReleaseDate;
    private String CarType;

    public Car() {

    }

    public Car(String carName, Integer maxSpeed, Date releaseDate, String carType) {
        CarName = carName;
        MaxSpeed = maxSpeed;
        ReleaseDate = releaseDate;
        CarType = carType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCarName() {
        return CarName;
    }

    public void setCarName(String carName) {
        CarName = carName;
    }

    public Integer getMaxSpeed() {
        return MaxSpeed;
    }

    public void setMaxSpeed(Integer maxSpeed) {
        MaxSpeed = maxSpeed;
    }

    public Date getReleaseDate() {
        return ReleaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        ReleaseDate = releaseDate;
    }

    public String getCarType() {
        return CarType;
    }

    public void setCarType(String carType) {
        CarType = carType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Car car = (Car) o;
        return Objects.equals(id, car.id) && Objects.equals(CarName, car.CarName) && Objects.equals(MaxSpeed, car.MaxSpeed) && Objects.equals(ReleaseDate, car.ReleaseDate) && Objects.equals(CarType, car.CarType);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, CarName, MaxSpeed, ReleaseDate, CarType);
    }
}
