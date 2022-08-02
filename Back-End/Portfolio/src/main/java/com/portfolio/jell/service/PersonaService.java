/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.jell.service;

import com.portfolio.jell.interfaz.IPersonaService;
import com.portfolio.jell.model.Persona;
import com.portfolio.jell.repository.IPersonaRepository;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Llamasares
 */
@Service
@Transactional
public class PersonaService implements IPersonaService{
    @Autowired
    IPersonaRepository iPersonaRepo;
    
     @Override
    public List<Persona> getPersona() {
        List<Persona> personas = iPersonaRepo.findAll();
        return personas;
    }

    @Override
    public void savePersona(Persona persona) {
        iPersonaRepo.save(persona);
    }

    @Override
    public void deletePersona(Long id) {
        iPersonaRepo.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
        Persona persona = iPersonaRepo.findById(id).orElse(null);
        return persona;
    }
}
