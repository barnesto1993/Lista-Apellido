import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {
  valor: string | null = null
  list: string[] = ['Aguilar', 'Barrios', 'Cruz', 'Zarate'];
 


}

