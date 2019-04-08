import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../services/item.service";
import { Item } from "../../models/Item";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
  // get the items into properties, as an array
  items: Item[];

  // inject itemService
  constructor(private itemService: ItemService) {}

  ngOnInit() {
    //fetch by using our get items
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }
}
