import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WorkitemComponent } from './workitem/workitem.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkitemService } from './workitem.service';
import { HttpModule } from '@angular/http';
import { MatTableModule} from '@angular/material/table';
import { CdkTableModule} from '@angular/cdk/table';
import { CreateComponent } from './workitem/create/create.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { AppMaterialModule } from './app-material/app-material.module';
import { NgModel, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScopeComponent } from './scope/scope.component';
import { RelationComponent } from './relation/relation.component';
@NgModule({
  declarations: [
    AppComponent,
    WorkitemComponent,
    CreateComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    DashboardComponent,
    ScopeComponent,
    RelationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MatTableModule,
    CdkTableModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [WorkitemService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
