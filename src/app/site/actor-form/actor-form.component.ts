import { Component } from '@angular/core';
import { Actor } from '../../Models/actor';
import { ActorService } from '../../services/actor/actor.service';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.css']
})
export class ActorFormComponent {

  actor: Actor;

  constructor(private actorService: ActorService) {
    this.actor = new Actor();
  }

  onSubmit() {
    this.actorService.save(this.actor).subscribe(result => this.actorService.gotoActorList());
  }
}
