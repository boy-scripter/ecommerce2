import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "app-layout-user",
    templateUrl: "./user.layout.html",
    styleUrls: ["user.layout.scss"],
    standalone: true,
    imports: [RouterOutlet]
})

export class UserLayout {
    constructor() {
        console.log("hi" +"hfds")
    }
}