/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.jell.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Llamasares
 */
@Entity
@Getter  @Setter
public class Habilidades {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idSkill;
    private String tituloSkill;
    private int porcentaje;
    private String imgSkill;

    public Habilidades() {
    }

    public Habilidades(String tituloSkill, int porcentaje, String imgSkill) {
        this.tituloSkill = tituloSkill;
        this.porcentaje = porcentaje;
        this.imgSkill = imgSkill;
    }
    
    
    
}
