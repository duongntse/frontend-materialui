import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";

export default function BasisPaginationGrid() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 1000,
    maxColumns: 6
  });

  return (
    <div style={{ height: 600, width: "80vw" }}>
      <DataGrid pagination {...data} checkboxSelection />
    </div>
  );
}
