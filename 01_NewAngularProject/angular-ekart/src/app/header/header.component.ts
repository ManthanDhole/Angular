import { Component } from "@angular/core";
import { TopMenuComponent } from "./top-menu/top-menu.component";

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
    imports: [ TopMenuComponent ]
})

export class HeaderComponent {

}