import { Component } from '@angular/core';
import { Actor } from '../../Models/actor';
import { ActorService } from '../../services/actor/actor.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-actor-update',
  templateUrl: './actor-update.component.html',
  styleUrls: ['./actor-update.component.css']
})
export class ActorUpdateComponent {
  id : number;
  actor: Actor;

  constructor(private actorService: ActorService, private route: ActivatedRoute) {
    this.actor = new Actor();
  }

  update(actor : Actor) {
    this.actorService.get(actor.id).subscribe(data => {
      this.actorService.update(actor).subscribe(result => window.location.reload());
    });
  }

  onSubmit() {
    this.actorService.update(this.actor).subscribe(result => this.actorService.gotoActorList());
  }

  onCancel() {
    this.actorService.gotoActorList();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.actorService.get(this.id).subscribe(data =>{
        this.actor = data;
      });
    });
  }
}
