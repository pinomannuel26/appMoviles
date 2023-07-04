import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private router: Router) { } // 1 ero importamos la clase router

  ngOnInit() {
    setTimeout(() =>{
      this.router.navigateByUrl('/home')  //Despues de 1 minuto y medio de la animacion (titulo)nos lleve al home
    }, 1500); 
  }

}
