import React from "react";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import {Button} from "../Utils/MaterialUIComponents";


export default function Excelexport({ fileName, Data }) {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(Data);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        style={{ backgroundColor: "#4B8745" }}
        onClick={() => exportToExcel()}
      >
        Excel
      </Button>
    </div>
  );
}
