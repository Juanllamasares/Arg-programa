/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.jell.service;

import com.portfolio.jell.interfaces.IPersonaService;
import com.portfolio.jell.entity.Persona;
import com.portfolio.jell.repository.IPersonaRepository;
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
    private IPersonaRepository iPersonaRepo;

    @Override
    public Persona savePersona(Persona persona) {
        return iPersonaRepo.save(persona);
    }

    @Override
    public Persona getPersona(int id) {
        Persona persona = iPersonaRepo.findById(id).orElse(null);
        return persona;
    }

    
}
