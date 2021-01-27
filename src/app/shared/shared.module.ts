import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { TabsModule} from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    NgxGalleryModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    })
  ],
  exports:[
    BsDropdownModule,
    TabsModule,
    ToastrModule,
    NgxGalleryModule,
    NgxSpinnerModule
  ]
})
export class SharedModule { }
