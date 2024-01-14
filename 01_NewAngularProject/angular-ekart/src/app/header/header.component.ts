import { Component } from "@angular/core";
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { SearchComponent } from "./product-list/search/search.component";
import { FormsModule } from "@angular/forms";
@Component({
    selector: 'app-header',
    // template: '<h3>Ekart Application Header</h3>',
    templateUrl: './header.component.html',
    // styles: [ 
        // 'h3{ margin: 0 20px; color: red; }', 
        // 'button{ margin: 5px 20px; padding: 10px; color: blue; }',
        // '.headerClass{ color: green; }',
        // '#idName{ color: blue; }'
    // ],
    styleUrls: [ './header.component.css' ],
    standalone: true,
    imports: [ TopMenuComponent, ProductListComponent, SearchComponent, FormsModule ]
})

export class HeaderComponent {

}