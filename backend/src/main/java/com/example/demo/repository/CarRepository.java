package com.example.demo.repository;

import com.example.demo.model.Car;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends CrudRepository<Car, Integer> {

    Car findById(int id);

    @Query("SELECT c FROM Car c WHERE c.CarName = :carName")
    Car findByCarName(@Param("carName") String carName);

}
