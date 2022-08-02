import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent implements OnInit {

  tituloExp : string = '';
  descripcionExp : string = '';

  constructor(private experienciaService : ExperienciaService, private router : Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const exp = new Experiencia(this.tituloExp,this.descripcionExp);
    this.experienciaService.save(exp).subscribe(data =>{
      alert("Experiencia agregada correctamente!")
      this.router.navigate(['']);
    },err=>{
      alert("Falló la operación.")
      this.router.navigate(['']);
    })
  }

}
