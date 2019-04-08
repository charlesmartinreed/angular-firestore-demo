import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../services/Item.service";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
  // inject itemService
  constructor(private itemService: ItemService) {}

  ngOnInit() {}
}
