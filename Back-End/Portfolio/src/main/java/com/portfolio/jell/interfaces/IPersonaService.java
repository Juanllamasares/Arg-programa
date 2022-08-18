/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.jell.interfaces;

import com.portfolio.jell.entity.Persona;
import java.util.List;

/**
 *
 * @author Llamasares
 */
public interface IPersonaService {
    
    public Persona savePersona(Persona persona);
    
    public Persona getPersona(int id);
    
}
