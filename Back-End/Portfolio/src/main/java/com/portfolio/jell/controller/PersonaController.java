/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.jell.controller;

import com.portfolio.jell.model.Persona;
import com.portfolio.jell.service.PersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Llamasares
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PersonaController {
    @Autowired
    PersonaService personaServ;
    
    @GetMapping("/personas/traer")
    public List<Persona> getPersona(){
        return personaServ.getPersona();
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/persona/crear")
    public String createPersona(@RequestBody Persona persona){
        personaServ.savePersona(persona);
        return "Persona creada correctamente.";
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/persona/editar/{id}")
    public Persona editPersona(@PathVariable Long id,
                               @RequestParam ("nombre") String newNombre,
                               @RequestParam ("apellido") String newApellido,
                               @RequestParam ("profesion") String newProfesion,
                               @RequestParam ("img") String newImg){
        Persona persona = personaServ.findPersona(id); 
        
        persona.setNombre(newNombre);
        persona.setApellido(newApellido);
        persona.setProfesion(newProfesion);
        persona.setImg(newImg);
        
        personaServ.savePersona(persona);
        
        return persona;
        
    }
    
    @GetMapping("/personas/traer/{id}")
    public Persona findPersona(@PathVariable Long id){
        return personaServ.findPersona(id);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/persona/borrar/{id}")
    public String deletePersona(@PathVariable Long id){
        personaServ.deletePersona(id);
        return "Persona borrada correctamente";
    }
}
