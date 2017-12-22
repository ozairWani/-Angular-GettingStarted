import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core/src/change_detection/pipe_transform";


@Pipe({
    name:'ConvertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform{
    transform(value: string,Character:string):string {
      return value.replace(Character,' ');
    }

}
