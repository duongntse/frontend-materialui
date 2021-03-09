import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";

export default function ControlledSelectionGrid() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 10,
    maxColumns: 6
  });

  const [selectionModel, setSelectionModel] = React.useState([]);

  const onSelectionModelChangeHandler = (newSelection) => {
    console.log(newSelection.selectionModel);
    setSelectionModel(newSelection.selectionModel);
  };

  return (
    <div style={{ height: 400, width: "80vw" }}>
      <DataGrid
        {...data}
        checkboxSelection
        selectionModel={selectionModel}
        onSelectionModelChange={onSelectionModelChangeHandler}
      />
    </div>
  );
}
