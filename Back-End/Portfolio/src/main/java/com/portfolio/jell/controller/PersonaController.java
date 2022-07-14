/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.jell.controller;

import com.portfolio.jell.interfaz.IPersonaService;
import com.portfolio.jell.model.Persona;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author Llamasares
 */
public class PersonaController {
    @Autowired
    IPersonaService iPersonaServ;
    
    @GetMapping("/personas/traer")
    public List<Persona> getPersona(){
        return iPersonaServ.getPersona();
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/persona/crear")
    public String createPersona(@RequestBody Persona persona){
        iPersonaServ.savePersona(persona);
        return "Persona creada correctamente.";
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/persona/editar/{id}")
    public Persona editPersona(@PathVariable Long id,
                               @RequestParam ("nombre") String newNombre,
                               @RequestParam ("apellido") String newApellido,
                               @RequestParam ("img") String newImg){
        Persona persona = iPersonaServ.findPersona(id); 
        
        persona.setNombre(newNombre);
        persona.setApellido(newApellido);
        persona.setImg(newImg);
        
        iPersonaServ.savePersona(persona);
        
        return persona;
        
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/persona/borrar/{id}")
    public String deletePersona(@PathVariable Long id){
        iPersonaServ.deletePersona(id);
        return "Persona borrada correctamente";
    }
}
