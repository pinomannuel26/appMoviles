import { CommonModule } from '@angular/common';
import { Component, isStandalone, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LosSimpsonService } from 'src/app/services/los-simpson.service';
import { SharedModule } from 'src/app/shared/shared.module';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  
})
export class HomePage implements OnInit {

  characters: any[]=[];
  params= {} as any;
  constructor(
    private los_simpsonSvc: LosSimpsonService
    ) { }

  ngOnInit() {
    this.params.page=0;
    this.getCharacters()
  }
  /*OBTENER PERSONAJES */
  getCharacters(event?: any)
  {
    this.params.page +=1;
    this.los_simpsonSvc.getCharacters(this.params).subscribe({
      next: (res:any)=> {
        this.characters.push(...res.docs)
        console.log(this.characters);
      },
      error: (error: any)=>{

      }
    })

  }
}
