import { Component } from '@angular/core';
import { ProjetosComponent } from "../../components/projetos-component/projetos-component";
import { Card } from '../../model/projeto';

@Component({
  selector: 'app-projetos',
  imports: [ProjetosComponent],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css'
})
export class Projetos {
  projetosCard: Card [] = [
    {
      nome: 'Rafael',
      descricao: 'Rafael Maranhao',
      urlFoto:
        'https://tse1.mm.bing.net/th/id/OIP.EF_rH_CGlInjFiT_D71OjAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      nome: 'Diego',
      descricao: 'Diego Ferreira',
      urlFoto:
        'https://tse1.mm.bing.net/th/id/OIP.EF_rH_CGlInjFiT_D71OjAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3'
    }
  ];
}
