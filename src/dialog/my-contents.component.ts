/*
 *
 * Licensed Materials - Property of IBM
 *
 * Supply Chain - UI Hub
 * (C) Copyright IBM Corp. 2019, 2020 All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 *
 */
import { Component, Input } from "@angular/core";
import { Field, Option } from "./my-types";
import { Dialog } from "carbon-components-angular";

@Component({
  selector: "my-contents",
  templateUrl: "./my-contents.component.html",
  styleUrls: ["./my-contents.component.scss"]
})
export class MyContentsComponent {
  /**
   * Selectable fields to be displayed in the filter dialog.
   */
  @Input()
  filterFields = [];

  /**
   * The dialog that hosts this component's contents.
   */
  @Input()
  dialog: Dialog;

  clearButtonLabel = "Clear all";
  applyButtonLabel = "Apply filters";

  constructor() {}

  /**
   * Selects/deselects an option from among a filterable field's options. If the total
   * number of options selected for that field meets the limit, all other options not
   * currently selected for that field will be disabled.
   * @param field - The filterable field whose option to select/deselect.
   * @param option - The option to be selected/deselected.
   * @param change - A boolean representing the selection/deselection of the option.
   */
  selectionChanged(option: Option, change: boolean): void {
    option.selected = change;
  }

  /**
   * Called when the apply button is clicked to emit an event corresponding
   * to the filterable fields and their currently selected options.
   */
  onApplyFilters(): void {
    if (this.dialog) {
      this.dialog.doClose();
    }
  }

  /**
   * Called when the clear button is clicked to clear the selected
   * options of all filterable fields and emit an event accordingly.
   */
  onClearAll(): void {
    this.filterFields.forEach((field) => {
      field.options.forEach((option) => (option.selected = false));
    });
  }

  /**
   * Collapses all other fields when one is expanded to restrict accordions
   * to only one expanded at a time.
   * @param event - An object representing the id of the accordion that was selected and
   * whether it was expanded or collapsed.
   * @param selectedField - The field that was selected whose expanded state should be updated.
   */
  toggleExpanded(
    event: { id: string; expanded: boolean },
    selectedField: Field
  ): void {
    const { expanded } = event;
    const previousSelection = this.filterFields.find(
      (field) => field.expanded && field.identifier !== selectedField.identifier
    );

    if (expanded && previousSelection) {
      previousSelection.expanded = false;
    }
    selectedField.expanded = expanded;
  }
}
