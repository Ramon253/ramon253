import {Component, ElementRef, QueryList, Renderer2, signal, viewChild, viewChildren} from '@angular/core';
import {NavItem} from '../../interfaces/nav-item';
import {NavBarComponent} from "../nav-bar/nav-bar.component";
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NavBarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  mobileNav = viewChild<ElementRef>('mobileNav');
  navButton = viewChild<ElementRef>('button');
  navBtn = viewChildren<ElementRef>('btnLine');
  isOpened = signal<boolean>(false);

  constructor(
    public renderer : Renderer2
  ) {}


  toggleNav(){
    this.mobileNav()?.nativeElement.classList.toggle('-translate-x-full');
    this.isOpened.set(!this.isOpened());

    if (this.isOpened()){
      this.renderer.setStyle(this.navBtn()?.at(0)?.nativeElement, 'transform', 'rotate(45deg)');
      this.renderer.setStyle(this.navBtn()?.at(2)?.nativeElement, 'transform', 'rotate(-45deg)');
      this.renderer.setStyle(this.navBtn()?.at(1)?.nativeElement, 'transform', 'translateX(200%)');
      return
    }
    this.renderer.setStyle(this.navButton()?.nativeElement, 'transform', 'scaleX(100%)');
    this.renderer.setStyle(this.navBtn()?.at(0)?.nativeElement, 'transform', 'rotate(0deg)');
    this.renderer.setStyle(this.navBtn()?.at(2)?.nativeElement, 'transform', 'rotate(0deg)');
    this.renderer.setStyle(this.navBtn()?.at(1)?.nativeElement, 'transform', 'translateX(0)');
  }
}
