/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.jell.model;

import com.sun.istack.NotNull;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Llamasares
 */
@Entity
@Getter @Setter
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @NotNull
    @Size(min = 1,max = 50,message = "No cumple los requisitos")
    private String nombre;
    
    @NotNull
    @Size(min = 1,max = 50,message = "No cumple los requisitos")
    private String apellido;
    
    @NotNull
    @Size(min = 1,max = 50,message = "No cumple los requisitos")
    private String profesion;
    
    @Size(min = 1,max = 50,message = "No cumple los requisitos")
    private String img;
}
