import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';


import { HttpClient } from '@angular/common/http';

import { DataService } from './data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'testBelatrix';


}
