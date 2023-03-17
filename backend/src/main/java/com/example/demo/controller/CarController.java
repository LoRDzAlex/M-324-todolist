package com.example.demo.controller;

import com.example.demo.model.Car;
import com.example.demo.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;

@Controller
@RequestMapping(path = "/car")
@CrossOrigin("*")
public class CarController {
    private CarRepository carRepository;

    @Autowired
    public void setCarRepository(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @GetMapping(path = "")
    public ResponseEntity<Iterable<Car>> getAllCars() {
        Iterable<Car> cars = null;

        try {
            cars = carRepository.findAll();
        } catch (Exception ex) {
            System.out.println("Fehler beim Abrufen der Autos");
        }

        return ResponseEntity.ok(cars);
    }

    @PostMapping(path = "")
    public ResponseEntity<String> createCar(
            @RequestParam String CarName,
            @RequestParam int MaxSpeed,
            @RequestParam String ReleaseDate,
            @RequestParam String CarType
    ) {
        try {
            Car car = new Car(CarName, MaxSpeed, Date.valueOf(ReleaseDate), CarType);
            carRepository.save(car);
        } catch (Exception exception) {
            System.out.println("Fehler beim Erstellen des Autos");
        }
        return ResponseEntity.ok("Saved " + CarName);
    }

    @DeleteMapping(path = "")
    public ResponseEntity<String> deleteCar(@RequestParam int id) {
        try {
            carRepository.deleteById(id);
        } catch (Exception exception) {
            System.out.println("Fehler beim Löschen der Autos");
        }
        return ResponseEntity.ok("Deleted");
    }

}
