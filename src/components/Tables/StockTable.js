import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function StockTable(props) {
  const navigate = useNavigate();
  const gridRef = useRef();
  const defaultColDef = {
    sortable: true,
  };

  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    navigate(`/Quote/${selectedRows[0].symbol}`, {
      state: { name: `${selectedRows[0].symbol}` },
    });
  }, []);

  return (
    <div
      className="ag-theme-balham stock-table "
      style={{ height: "600px", width: "1000px" }}
    >
      <AgGridReact
        rowHeight={40}
        ref={gridRef}
        columnDefs={props.column}
        rowData={props.row}
        pagination={true}
        paginationPageSize={20}
        rowSelection={"single"}
        animateRows={true}
        defaultColDef={defaultColDef}
        onSelectionChanged={onSelectionChanged}
      />
    </div>
  );
}
