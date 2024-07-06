import React, { useContext, useEffect } from "react";
import { Dashboard } from "@uppy/react";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

import Uppy from "@uppy/core";
import { App } from "antd";
import { useNotification } from "@refinedev/core";
import { ColorModeContext } from "@src/contexts";
import * as XLSX from "xlsx";

interface UppyUploaderProps {
  createImportModalClose: () => void;
  getFileData: (data: any) => void;
  restrictions?: {
    maxFileSize: number;
    maxNumberOfFiles: number;
    minNumberOfFiles: number;
    allowedFileTypes: string[];
  };
}


const UppyUploader = ({
  createImportModalClose,
  getFileData,
  restrictions = {
    maxFileSize: 1000000,
    maxNumberOfFiles: 1,
    minNumberOfFiles: 1,
    allowedFileTypes: [".json"],
  },
}) => {
  const { notification } = App.useApp();
  const { mode } = useContext(ColorModeContext);

  const uppy = new Uppy({
    debug: true,
    autoProceed: false,
    restrictions,
  })
    .on("complete", (result) => {
      console.log("successful files:", result.successful);
      console.log("failed files:", result.failed);
      // Process the file
      if (result.successful.length > 0) {
        const file = result.successful[0].data;
        const fileType = result.successful[0].extension;

        const reader = new FileReader();

        reader.onload = (event) => {
          try {
            const fileData = event.target?.result;

            if (fileType === "json") {
              const json = JSON.parse(String(fileData));
              console.log("JSON data:", json);

              // Assuming json is an array or can be converted to an array
              const jsonArray = Array.isArray(json) ? json : [json];

              // Call the getFileData callback with the parsed JSON data
              if (getFileData) {
                getFileData(jsonArray);
              }

              // Show notification
              notification.success({
                message: "Success",
                description: "JSON file imported successfully",
              });
            } else if (fileType === "xlsx") {
              const binaryStr = new Uint8Array(fileData as ArrayBuffer).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              );
              const workbook = XLSX.read(binaryStr, { type: "binary" });
              const sheetName = workbook.SheetNames[0];
              const sheet = workbook.Sheets[sheetName];
              const excelData = XLSX.utils.sheet_to_json(sheet);
              console.log("Excel data:", excelData);

              // Call the getFileData callback with the parsed Excel data
              if (getFileData) {
                getFileData(excelData);
              }

              // Show notification
              notification.success({
                message: "Success",
                description: "Excel file imported successfully",
              });
            }

            // Close the modal
            createImportModalClose();
          } catch (error) {
            console.error("Error processing file:", error);
          }
        };

        if (fileType === "json") {
          reader.readAsText(file);
        } else if (fileType === "xlsx") {
          reader.readAsArrayBuffer(file);
        }
      }
    })
    .on("preprocess-complete", (event) => {
      console.log("Event:", event);
    });

  useEffect(() => {
    return () => {
      uppy.close();
    };
  }, [uppy]);

  return (
    <Dashboard
      uppy={uppy}
      height={300}
      width={"100%"}
      title="Upload JSON or Excel File"
      locale={{
        strings: {
          dropHint: "Drop JSON or Excel file here",
        },
      }}
      theme={mode === "dark" ? "dark" : "light"}
      showProgressDetails={true}
      hideUploadButton={false}
      proudlyDisplayPoweredByUppy={false}
      target={"#uppy-dashboard-container"}
      showLinkToFileUploadResult={true}
    />
  );
};

export default UppyUploader;
