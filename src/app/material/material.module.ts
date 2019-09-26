import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule} from '@angular/material';
import {MatRadioModule, MatSidenavModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material';



const MaterialComponents = [MatToolbarModule, MatIconModule, MatSidenavModule,
  MatRadioModule, MatButtonToggleModule,  MatListModule, MatCardModule, MatButtonModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MaterialComponents,
  ],
  exports: [MaterialComponents],
})
export class MaterialModule { }
