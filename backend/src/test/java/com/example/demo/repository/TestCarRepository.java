package com.example.demo.repository;

import com.example.demo.model.Car;
import com.example.demo.model.Task;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertNotNull;


@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class TestCarRepository {
    @Autowired
    private TestEntityManager entityManager;
    @Autowired
    private CarRepository carRepository;

    @Test
    public void testSetup() {
        assertNotNull(entityManager);
    }


    @Test
    @Order(1)
    @Rollback(value = false)
    public void addNewCar() {
        Car car = new Car("Zentorno", 500, Date.valueOf("1982-2-3"), "Super car");
        carRepository.save(car);


        Assertions.assertThat(car.getId()).isEqualTo(1);
    }

    @Test
    @Order(2)
    @Rollback(value = false)
    public void getAllCars() {
        List<Car> car = (List<Car>) carRepository.findAll();

        Assertions.assertThat(car.size()).isGreaterThan(0);
    }

    @Test
    @Order(3)
    @Rollback(value = false)
    public void deleteCarById() {

        String carName = "Zentorno";
        Car car = carRepository.findByCarName(carName);
        Assertions.assertThat(car).isNotNull();

        carRepository.delete(car);

        Optional<Car> optionalCar = Optional.ofNullable(carRepository.findByCarName(carName));
        Assertions.assertThat(optionalCar).isEmpty();
    }
}
