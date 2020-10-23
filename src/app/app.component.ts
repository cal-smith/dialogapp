import { Component } from "@angular/core";
import { Field } from "../dialog/my-types";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Carbon Components Angular";
  defaultOffset = { x: -139, y: 0 };
  defaultPlacement = "bottom";
  filterFields: Field[] = [
    {
      label: "Company",
      identifier: "Company",
      expanded: false,
      options: [
        {
          label: "Option1",
          identifier: "Option1",
          selected: false
        },
        {
          label: "Option2",
          identifier: "Option2",
          selected: false
        },
        {
          label: "Option3",
          identifier: "Option3",
          selected: false
        },
        {
          label: "Option4",
          identifier: "Option4",
          selected: false
        },
        {
          label: "Option1a",
          identifier: "Option1",
          selected: false
        },
        {
          label: "Option2a",
          identifier: "Option2",
          selected: false
        },
        {
          label: "Option3a",
          identifier: "Option3",
          selected: false
        },
        {
          label: "Option4a",
          identifier: "Option4",
          selected: false
        },
        {
          label: "Option1b",
          identifier: "Option1",
          selected: false
        },
        {
          label: "Option2b",
          identifier: "Option2",
          selected: false
        },
        {
          label: "Option3b",
          identifier: "Option3",
          selected: false
        },
        {
          label: "Option4b",
          identifier: "Option4",
          selected: false
        },
        {
          label: "Option1c",
          identifier: "Option1",
          selected: false
        },
        {
          label: "Option2c",
          identifier: "Option2",
          selected: false
        },
        {
          label: "Option3c",
          identifier: "Option3",
          selected: false
        },
        {
          label: "Option4c",
          identifier: "Option4",
          selected: false
        },
        {
          label: "Option1d",
          identifier: "Option1",
          selected: false
        },
        {
          label: "Option2d",
          identifier: "Option2",
          selected: false
        },
        {
          label: "Option3d",
          identifier: "Option3",
          selected: false
        },
        {
          label: "Option4d",
          identifier: "Option4",
          selected: false
        },
        {
          label: "Option1e",
          identifier: "Option1",
          selected: false
        },
        {
          label: "Option2e",
          identifier: "Option2",
          selected: false
        },
        {
          label: "Option3e",
          identifier: "Option3",
          selected: false
        },
        {
          label: "Option4e",
          identifier: "Option4",
          selected: false
        }
      ]
    },
    {
      label: "Country",
      identifier: "Country",
      expanded: false,
      options: [
        {
          label: "Option1",
          identifier: "Option1",
          selected: false
        },
        {
          label: "Option2",
          identifier: "Option2",
          selected: false
        },
        {
          label: "Option3",
          identifier: "Option3",
          selected: false
        },
        {
          label: "Option4",
          identifier: "Option4",
          selected: false
        },
        {
          label: "Option1a",
          identifier: "Option1",
          selected: false
        },
        {
          label: "Option2a",
          identifier: "Option2",
          selected: false
        },
        {
          label: "Option3a",
          identifier: "Option3",
          selected: false
        },
        {
          label: "Option4a",
          identifier: "Option4",
          selected: false
        },
        {
          label: "Option1b",
          identifier: "Option1",
          selected: false
        },
        {
          label: "Option2b",
          identifier: "Option2",
          selected: false
        },
        {
          label: "Option3b",
          identifier: "Option3",
          selected: false
        },
        {
          label: "Option4b",
          identifier: "Option4",
          selected: false
        },
        {
          label: "Option1c",
          identifier: "Option1",
          selected: false
        },
        {
          label: "Option2c",
          identifier: "Option2",
          selected: false
        },
        {
          label: "Option3c",
          identifier: "Option3",
          selected: false
        },
        {
          label: "Option4c",
          identifier: "Option4",
          selected: false
        },
        {
          label: "Option1d",
          identifier: "Option1",
          selected: false
        },
        {
          label: "Option2d",
          identifier: "Option2",
          selected: false
        },
        {
          label: "Option3d",
          identifier: "Option3",
          selected: false
        },
        {
          label: "Option4d",
          identifier: "Option4",
          selected: false
        },
        {
          label: "Option1e",
          identifier: "Option1",
          selected: false
        },
        {
          label: "Option2e",
          identifier: "Option2",
          selected: false
        },
        {
          label: "Option3e",
          identifier: "Option3",
          selected: false
        },
        {
          label: "Option4e",
          identifier: "Option4",
          selected: false
        }
      ]
    },
    {
      label: "City",
      identifier: "City",
      expanded: false,
      options: [
        {
          label: "Option1",
          identifier: "Option1",
          selected: false
        },
        {
          label: "Option2",
          identifier: "Option2",
          selected: false
        },
        {
          label: "Option3",
          identifier: "Option3",
          selected: false
        },
        {
          label: "Option4",
          identifier: "Option4",
          selected: false
        },
        {
          label: "Option1a",
          identifier: "Option1",
          selected: false
        },
        {
          label: "Option2a",
          identifier: "Option2",
          selected: false
        },
        {
          label: "Option3a",
          identifier: "Option3",
          selected: false
        },
        {
          label: "Option4a",
          identifier: "Option4",
          selected: false
        },
        {
          label: "Option1b",
          identifier: "Option1",
          selected: false
        },
        {
          label: "Option2b",
          identifier: "Option2",
          selected: false
        },
        {
          label: "Option3b",
          identifier: "Option3",
          selected: false
        },
        {
          label: "Option4b",
          identifier: "Option4",
          selected: false
        },
        {
          label: "Option1c",
          identifier: "Option1",
          selected: false
        },
        {
          label: "Option2c",
          identifier: "Option2",
          selected: false
        },
        {
          label: "Option3c",
          identifier: "Option3",
          selected: false
        },
        {
          label: "Option4c",
          identifier: "Option4",
          selected: false
        },
        {
          label: "Option1d",
          identifier: "Option1",
          selected: false
        },
        {
          label: "Option2d",
          identifier: "Option2",
          selected: false
        },
        {
          label: "Option3d",
          identifier: "Option3",
          selected: false
        },
        {
          label: "Option4d",
          identifier: "Option4",
          selected: false
        },
        {
          label: "Option1e",
          identifier: "Option1",
          selected: false
        },
        {
          label: "Option2e",
          identifier: "Option2",
          selected: false
        },
        {
          label: "Option3e",
          identifier: "Option3",
          selected: false
        },
        {
          label: "Option4e",
          identifier: "Option4",
          selected: false
        }
      ]
    }
  ];
}
