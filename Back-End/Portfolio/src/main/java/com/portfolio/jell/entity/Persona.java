/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.jell.entity;

import java.io.Serializable;

import javax.persistence.Column;
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
public class Persona implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @Size(min = 2,max = 30)
    @Column(length = 500)
    private String nombre;
    @Size(min = 2,max = 30)
    @Column(length = 50)
    private String apellido;
    @Size(min = 2,max = 50)
    @Column(length = 50)
    private String profesion;
    @Size(min = 2,max = 500)
    @Column(length = 500)
    private String descripcion;
    @Size(min = 2,max = 500)
    @Column(name = "imagen",length = 500)
    private String img;

    
}
