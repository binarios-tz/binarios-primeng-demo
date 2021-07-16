import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { PasswordModule } from 'primeng/password';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';

import { InputMaskModule } from 'primeng/inputmask';
import { MessageModule } from 'primeng/message';
import { KeyFilterModule } from 'primeng/keyfilter';

import { SelectButtonModule } from 'primeng/selectbutton';
import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    PasswordModule,
    InputSwitchModule,
    DividerModule,
    DropdownModule,
    AutoCompleteModule,
    HttpClientModule,
    RadioButtonModule,
    CheckboxModule,
    TableModule,
    ReactiveFormsModule,
    ToggleButtonModule,
    InputMaskModule,
    MessageModule,
    KeyFilterModule,
    SelectButtonModule,
    MultiSelectModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
