import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'my-cardview',
    template: `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">{{title1}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>

        <p class="card-text">{{summary}} e and make up the bulk of the card's content.</p>
        
<my-badge caption = "votes"></my-badge> <br>
<my-badge caption = "Inbox"></my-badge> <br>
  </div>
</div>`
})
export class CardComponent implements OnInit {

    @Input ('title1') title1: string = 'Default 1'

    @Input ('summary') summary: string = 'Default'
    constructor() { }

    ngOnInit() { 

    }

}