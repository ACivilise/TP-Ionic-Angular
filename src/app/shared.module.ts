import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
// Components
import { TimerComponent } from '../components/timer/timer.component';

// Services
import { ShoppingService } from '../services/shopping.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule],
  declarations: [TimerComponent],
  providers: [
    ShoppingService],
  exports: [
    TimerComponent,
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule
  ]
})
export class SharedModule { }
