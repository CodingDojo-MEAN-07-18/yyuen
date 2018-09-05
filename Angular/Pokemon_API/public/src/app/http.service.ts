import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
   }

   getPokemon(){
     let celebi = this._http.get('https://pokeapi.co/api/v2/pokemon/251/');
     let item = '';
     let ability = '';

     celebi.subscribe(<Pokemon>(data) => {
       console.log("Got the pokemon!", data);
       console.log("The ability of your pokemon: " + data.abilities[0].ability.name);
       item = data.held_items[0].item.name
       console.log("Your pokemon carries this item: " + item);
       ability = data.abilities[0].ability.url
       const otherPoke = this._http.get(ability);
       otherPoke.subscribe(<ability>(result)=>{
          console.log((result.pokemon.length-1) + " other Pokemons has " +  data.abilities[0].ability.name);
       });
     });
   }
}

interface Pokemon{
  ability: Object[];
}
interface ability{
  pokemon: Object[];
}