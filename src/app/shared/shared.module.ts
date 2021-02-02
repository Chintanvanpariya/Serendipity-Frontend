import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker/';
import { TabsModule} from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    NgxGalleryModule,
    FileUploadModule,
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    })
  ],
  exports:[
    BsDropdownModule,
    TabsModule,
    ToastrModule,
    NgxGalleryModule,
    FileUploadModule,
    BsDatepickerModule,
  ]
})
export class SharedModule { }
