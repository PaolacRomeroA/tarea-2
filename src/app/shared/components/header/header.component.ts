import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../service/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input({required: true}) title: string = "";

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  singOut() {
    this.authService.logout().then(()=>{
      this.router.navigateByUrl('login');
    })
  }
}
