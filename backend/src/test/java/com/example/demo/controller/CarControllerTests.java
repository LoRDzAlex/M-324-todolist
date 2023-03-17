 /* package com.example.demo.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.sql.Date;
import java.util.Optional;

import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.demo.model.Car;
import com.example.demo.repository.CarRepository;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class CarControllerTests {

    @Autowired
    private CarRepository carRepository;

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private CarController carController;

    @Test
    @Order(1)
    @Rollback(value = false)
    public void testCreateCar() {
        ResponseEntity<String> response = carController.createCar("Test Car", 200, "2022-01-01", "SUV");
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).isEqualTo("Saved Test Car");

        Car car = carRepository.findById(1);
        assertThat(car.getId()).isEqualTo(1);
        assertThat(car.getCarName()).isEqualTo("Test Car");
        assertThat(car.getMaxSpeed()).isEqualTo(200);
        assertThat(car.getReleaseDate()).isEqualTo(Date.valueOf("2022-01-01"));
        assertThat(car.getCarType()).isEqualTo("SUV");
    }

    @Test
    @Order(2)
    public void testGetAllCars() {
        entityManager.persist(new Car("Car 1", 100, Date.valueOf("2021-01-01"), "Sedan"));
        entityManager.persist(new Car("Car 2", 150, Date.valueOf("2021-02-01"), "Coupe"));

        ResponseEntity<Iterable<Car>> response = carController.getAllCars();
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);

        Iterable<Car> cars = response.getBody();
        assertThat(cars).isNotNull();
        assertThat(cars).hasSize(2);
    }

    @Test
    @Order(3)
    public void testDeleteCar() {
        entityManager.persist(new Car("Test Car", 200, Date.valueOf("2022-01-01"), "SUV"));

        ResponseEntity<String> response = carController.deleteCar(1);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).isEqualTo("Deleted");

        Optional<Car> carOptional = Optional.ofNullable(carRepository.findById(1));
        assertThat(carOptional.isPresent()).isFalse();
    }

} */