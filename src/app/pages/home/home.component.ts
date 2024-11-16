import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Vacation } from '../../model/type';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VacationService } from '../../service/vacation/vacation.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   title= 'home';
   vacations: Vacation[] = []
   newVacationForm!: FormGroup;

   constructor(private router: Router, private vacationService: VacationService){} 

   createForm() {
    this.newVacationForm = new FormGroup({
        name: new FormControl ('',[Validators.required]),
        description: new FormControl ('',[Validators.required]),
        price: new FormControl (0,[Validators.required]),
        country: new FormControl ('',[Validators.required]),
        active: new FormControl (false,[Validators.required]),
      });

    }
  
    ngOnInit(): void{
      this.createForm();
     this.vacations= this.vacationService.getVacations()
    }

   goToAboutUs(){
    this.router.navigate(['about-us'])
   }

   saveVacation () {
    if (this.newVacationForm.valid){
      const newVacation: Vacation = {
        name: this.newVacationForm.get('name') !. value,
        price: this.newVacationForm.get('price') !. value,
        country: this.newVacationForm.get('country') !. value,
        description: this.newVacationForm.get('description') !. value,
        active: true
      }
      this.vacationService.addVacation(newVacation);
      this.vacations=this.vacationService.getVacations();
      }else{
        alert('Formulario Inválido');
      }
     
   }
   
   deleteVacation(index: number){
    this.vacations = this.vacationService.deleteVacation(index)
   }
   editVacation(index: number){
    const vacation: Vacation = this.vacationService.getVacationByIndex(index)
    console.log(vacation)
   }


}
