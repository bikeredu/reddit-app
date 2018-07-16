import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'video'
})
export class VideoPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) {}

  transform(value: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
