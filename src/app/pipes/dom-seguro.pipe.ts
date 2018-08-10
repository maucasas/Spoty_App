import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
// este pipe limpia la url para que sea segura la navegacion por url externas.
export class DomSeguroPipe implements PipeTransform {
constructor(private domSanitzer: DomSanitizer) {
}
  transform(value: any, args?: any): any {
    const url = 'https://open.spotify.com/embed?uri=';
    return this.domSanitzer.bypassSecurityTrustResourceUrl(url + value);
  }

}
