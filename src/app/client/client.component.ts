import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[] =[];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {

    this.clientService.getAll().subscribe(
      data => { this.clients = data;
        console.log('client', this.clients[0]);
      })
    // this.clientService.get(1).subscribe(
    //   data => {
    //     console.log(data["name"]);
    //   }
    // )
  }
}
