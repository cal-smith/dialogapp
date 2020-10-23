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
export interface Field {
  label: string;
  identifier: string;
  options: Option[];
  expanded: boolean;
}

export interface Option {
  label: string;
  selected: boolean;
  identifier: string;
}
