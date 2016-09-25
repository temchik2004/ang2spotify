import {Component} from "@angular/core";
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../../Artist';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  providers: [SpotifyService]
})
export class SearchComponent {
  search:string;
  searchRes: Artist[];

  constructor(private _spotify:SpotifyService){

  }

  searchMusic() {
    this._spotify.searchMusic(this.search).subscribe(res=>{
      console.log(res);
      this.searchRes = res.artists.items;
    });
  }
}
