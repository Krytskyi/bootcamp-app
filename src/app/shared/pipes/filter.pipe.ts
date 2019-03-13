import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string, key: string): any[] {
        if (!items)
            return [];

        if (!searchText)
            return items;

        searchText = searchText.toLocaleLowerCase();
        return items.filter(el => {
            return el[key].toLocaleLowerCase().includes(searchText);
        });
    }
}