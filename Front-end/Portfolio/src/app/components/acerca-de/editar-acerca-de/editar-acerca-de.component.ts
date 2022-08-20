import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit {

  persona : Persona = null;
  cargando = false;

  constructor(
    private personaService: PersonaService,
    private router: Router,
    private storageService: StorageService,
    private actRoute : ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.personaService.getPersona().subscribe(data => {this.persona = data},err=>{alert("error")});
  }

  onUpdate(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.personaService.updatePersona(id,this.persona).subscribe(
      data=>{
        alert('Perfil editado correctamente')
        this.router.navigate(['']);
        },
      err=>{
        alert('Error al editar Perfil');
        this.router.navigate(['']);
      }
    )
  }

  cargarImagen(event: any) {
    //console.log(event.target.files);

    let imgFile = event.target.files;
    let reader = new FileReader();
    let nombreImg = 'img';
    this.cargando = true;

    reader.readAsDataURL(imgFile[0]);
    reader.onloadend = () => {
      //console.log(reader.result);
      this.storageService
        .subirImagen(nombreImg + '_' + Date.now(), reader.result)
        .then((urlImagen) => {
          console.log(urlImagen);
          this.persona.img = urlImagen;
          this.cargando = false;
        });
    };
  }

}
