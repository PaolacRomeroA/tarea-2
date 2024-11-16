import { Injectable } from '@angular/core';
import { Vacation } from '../../model/type';


@Injectable({
  providedIn: 'root'
})
export class VacationService {

  constructor() { }
getVacations(): Vacation[]{
  const vacations = localStorage.getItem('vacations');

  return vacations ? JSON.parse(vacations) as Vacation[] : []
}

private saveVacations( vacations: Vacation[]){
  localStorage.setItem('vacations', JSON.stringify(vacations))
}
addVacation (newVacation: Vacation): boolean{
  const vacations = this.getVacations();
  vacations.push (newVacation)

  this.saveVacations (vacations)
  return true
}
deleteVacation(index: number): Vacation[]{
  let delVacations =this.getVacations();
  delVacations.splice(index, 1);
  this.saveVacations(delVacations);
  return this.getVacations();
  
 }
getVacationByIndex (index:number): Vacation {
  const vacationList = this.getVacations()

  return vacationList[index]
}
}
