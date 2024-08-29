import { Component } from '@angular/core';
import {NavItem} from '../../interfaces/nav-item';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  navItems : Array<NavItem> = [
    {
      name : 'Proyectos',
      link: 'Projects'
    },
    {
      name : 'Sobre mi',
      link : 'about',
    },
    {
      name: 'Contacto',
      link: 'contac',
    }
  ]
}
