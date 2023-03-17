package com.example.demo.repository;

import com.example.demo.model.Car;
import org.springframework.data.repository.CrudRepository;

public interface CarRepository extends CrudRepository<Car, Integer> {
}
