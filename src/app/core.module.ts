import { NgModule } from '@angular/core';

import { UserService } from './_services/user.service'
import { AuthGuard } from './_auth/auth.guard';
import { AuthenticationService } from './_auth/authentication.service';
import { SecurityService } from './_auth/services/security.service';
import { HTTP_INTERCEPTORS } from '../../node_modules/@angular/common/http';
import { AuthInterceptor } from './_auth/auth.interceptor';

@NgModule({
  imports: [],
  providers: [
    UserService,
    AuthGuard,
    AuthenticationService,
    SecurityService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  exports: []
})
export class CoreModule {
}
