package com.portfolio.jell.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Proyectos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idProy;
    private String tituloProyect;
    private String urlProyecto;
    private String descripcionProyect;
    private String imgProyect;
    
    public Proyectos() {
    }

    public Proyectos(String tituloProyect, String urlProyecto, String descripcionProyect, String imgProyect) {
        this.tituloProyect = tituloProyect;
        this.urlProyecto = urlProyecto;
        this.descripcionProyect = descripcionProyect;
        this.imgProyect = imgProyect;
    }

    
}
