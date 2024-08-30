import {Component} from '@angular/core';
import {NavItem} from "../../interfaces/nav-item";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  navItems: Array<NavItem> = [
    {
      name: 'Proyectos',
      link: 'Projects'
    },
    {
      name: 'Sobre mi',
      link: 'about',
    },
    {
      name: 'Contacto',
      link: 'contac',
    }
  ]
}
