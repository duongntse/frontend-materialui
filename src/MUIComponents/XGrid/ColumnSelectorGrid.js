import * as React from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";

export default function ColumnSelectorGrid() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 50,
    maxColumns: 10
  });

  return (
    <div style={{ height: 600, width: "80vw" }}>
      <DataGrid
        {...data}
        components={{
          Toolbar: GridToolbar
        }}
        checkboxSelection
      />
    </div>
  );
}
