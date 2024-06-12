import { Component } from "@angular/core";
import { RouterOutlet, provideRouter } from "@angular/router";

import FooterComponent from "@app/components/footer/footer.component";
import HeaderComponent from "@app/components/header/header.component";


@Component({
    standalone: true,
    templateUrl: 'index.layout.html',
    styleUrls: ['index.layout.scss'],
    selector: 'app-layout-page',
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
})

export class IndexLayout {
    constructor(){
        console.log("hi")
    }

}