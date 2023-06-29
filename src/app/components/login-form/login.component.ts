import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../services/user.service.service';
import { RequestStatus } from 'src/app/models/request.status.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login1',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginFormComponent {
  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  status: RequestStatus = 'init';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private route : ActivatedRoute
  ) {
    this.route.queryParamMap.subscribe(params => {
    const email = params.get('email');
    if (email){
      this.form.controls.email.setValue(email)
    }
  })
  }

  doLogin() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email, password } = this.form.getRawValue();
      this.userService.login(email, password).subscribe({
        next: () => {
          this.status = 'success'
          this.router.navigate(['/app'])
        },
        error: () => {
          this.status = 'failed'
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
