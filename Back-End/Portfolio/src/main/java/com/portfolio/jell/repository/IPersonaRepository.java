/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.jell.repository;

import com.portfolio.jell.model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Llamasares
 */
public interface IPersonaRepository extends JpaRepository<Persona, Long>{
    
}
