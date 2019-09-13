import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Type } from '../interfaces/Type';
import { EntryService } from '../services/entry.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent{

  types: Type[] = [
    {value:true, display:'Expense'},
    {value:false, display:'Income'},
  ]

  constructor(private service:EntryService, private authService:AuthService) { }

  entryForm = new FormGroup({
    description: new FormControl('', Validators.required),
    isExpense: new FormControl('', Validators.required),
    value: new FormControl('', [Validators.required, Validators.pattern('\\d+\\.?\\d*')]),
    userId: new FormControl(this.authService.getUserId, Validators.required)
  })

  onSubmit(){
    console.log(this.entryForm.value);
    this.service.createEntry(this.entryForm.value,localStorage.getItem('userId')).subscribe((data) => {
      console.log('Data - ',data);
    })
  }

}
