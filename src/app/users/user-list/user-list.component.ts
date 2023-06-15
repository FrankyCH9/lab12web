import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [
    { id: 1, name: 'Aldo', edad: 23, sexo: 'Masculino', image: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'},
    { id: 2, name: 'Franky', edad: 20, sexo: 'Masculino', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6HqYN_G8r1Ysuvcn2iq2XTCo1FkDcE-Tn7NyJcqa3Mj7wp3BMfAO8j0Ci1zSkPoM_PWI&usqp=CAU'},
    { id: 3, name: 'Tatiana', edad: 18, sexo: 'Femenino', image: 'https://cdn-icons-png.flaticon.com/512/4831/4831294.png'}
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  viewUserDetails(user: any) {
    this.router.navigate(['/user-details/'+user.id], { state: { name: user.name, edad:user.edad, sexo: user.sexo } });
  }
}