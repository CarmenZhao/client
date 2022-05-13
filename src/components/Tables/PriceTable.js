import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { useRef } from "react";

export default function PriceTable(props) {
  const gridRef = useRef();
  const defaultColDef = {
    sortable: true,
  };

  return (
    <div className="ag-theme-balham price-table">
      <AgGridReact
        ref={gridRef}
        columnDefs={props.column}
        rowData={props.row}
        pagination={true}
        paginationPageSize={20}
        animateRows={true}
        defaultColDef={defaultColDef}
      />
    </div>
  );
}
