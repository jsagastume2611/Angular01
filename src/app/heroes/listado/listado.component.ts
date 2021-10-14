import { Component, OnInit } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Hugo', 'Paco', 'Luis'];
  heroeBorrado: string = '';
  heroeEstado:boolean=false;

    borrarHeroe(){
     this.heroeBorrado= this.heroes.shift() || '';
     this.heroeEstado=true; 
    }
    	

}
