import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";


@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage]
})

export default class HeaderComponent {
    
}