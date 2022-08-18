package com.portfolio.jell.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class DtoProyectos {
    
    private String tituloProyect;
    private String descripcionProyect;
    private String imgProyect;
    
    public DtoProyectos() {
    }

    public DtoProyectos(String tituloProyect, String descripcionProyect, String imgProyect) {
        this.tituloProyect = tituloProyect;
        this.descripcionProyect = descripcionProyect;
        this.imgProyect = imgProyect;
    }

}
