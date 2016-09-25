import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {Artist} from '../../../Artist';
import {Album} from '../../../Album';
import {ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html',
  providers: [SpotifyService]
})
export class ArtistComponent implements OnInit{
  id: string;
  artist: Artist[];
  albums: Album[];

  constructor(private _spotify:SpotifyService,
              private _route:ActivatedRoute){}

  ngOnInit(){
    this._route.params.map(params => params['id'])
      .subscribe((id)=>{
        this._spotify.getArtist(id)
          .subscribe(artist=>{
            this.artist = artist;
            console.log(this.artist);
          })
      })
  }
}
