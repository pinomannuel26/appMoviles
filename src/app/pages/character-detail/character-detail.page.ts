import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LosSimpsonService } from 'src/app/services/los-simpson.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
})
export class CharacterDetailPage implements OnInit {

  characterId : string = "";
  character = null as any;

  constructor(
    private actRoute: ActivatedRoute,
    private simpsonSvc : LosSimpsonService
  ) { 
    this.characterId = this.actRoute.snapshot.paramMap.get('id') as string
    console.log(this.characterId);
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log("entro")
    this.getCharacters()
  }
  getCharacters () {
    
    this.simpsonSvc.getCharactersByID(this.characterId).subscribe({
      next: (res: any) => {
        console.log(res.result);
        this.character = res.result[0];
        console.log(this.character)
      },
      error: (error : any ) => {
        console.log(error);
      }
    })
  }

}
