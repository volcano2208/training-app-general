import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CategoryFormComponent } from './category-form/category-form.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagFormComponent } from './tag-form/tag-form.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { StatusComponent } from './status/status.component';
import { DropdownlistCategoryComponent } from './pet-form/dropdownlist-category/dropdownlist-category.component';
import { LoggingInterceptor } from './logging.interceptor';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { ErrorpageRedirectInterceptor } from './errorpage-redirect.interceptor';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DebounceClickDirective } from './debounce-click.directive';
import { AppAlphabetOnlyDirective } from './pet-form/directives/app-alphabet-only.directive';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotifyInterceptor } from './notify.interceptor';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';

@NgModule({
  declarations: [
    AppComponent,
    CategoryFormComponent,
    TagFormComponent,
    PetFormComponent,
    StatusComponent,
    DropdownlistCategoryComponent,
    ErrorPageComponent,
    DebounceClickDirective,
    AppAlphabetOnlyDirective,
    ProfileUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],

  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorpageRedirectInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: NotifyInterceptor, multi: true }, UnsavedChangesGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
