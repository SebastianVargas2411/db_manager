import { Component, OnInit } from '@angular/core';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  public colorPrincipal: string = '#f60';
  public colorText: string = '#f60';
  constructor(private cpService: ColorPickerService) {
  
   }

  ngOnInit(): void {
  }

  public onChangeColor(color: string): Cmyk {
    const hsva = this.cpService.stringToHsva(color);

    const rgba = this.cpService.hsvaToRgba(hsva);


    console.log(color);
     console.log(rgba);

    return this.cpService.rgbaToCmyk(rgba);
  }

}
