import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {

  experiencia : Experiencia = null;

  constructor(private experienciaService : ExperienciaService, private actRouter : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    const id = this.actRouter.snapshot.params['id'];
    this.experienciaService.getExp(id).subscribe(data=>{
      this.experiencia = data;
    },
    err=>{
      alert('Error al editar experiencia');
        this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.actRouter.snapshot.params['id'];

    this.experienciaService.update(id, this.experiencia).subscribe(
      data=>{
        alert('Experiencia editada correctamente')
        this.router.navigate(['']);
        },
      err=>{
        alert('Error al editar experiencia');
        this.router.navigate(['']);
      }
    )
  }

}
