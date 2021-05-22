import React, { Component } from "react";
import { readRemoteFile } from "react-papaparse";

// Scripts for getting data from google sheets
const SHEETS_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSuto35cosEJxX9gv0NmohoYAFwMLbySrNWBvd70bPv9PBo1ry0VpXJBP1nMy4dH8378HzDSN7M1BNd/pub?gid=1711477268&single=true&output=csv";

const SHEETS_CSV_AGGREGATE =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTsK4cc63GbrqDcbhfUXjbV01hkCZd8p7pBhICyBQFWM_xFXnxqxn749zMwaG8ZNMDUAEFn9rgu-ZuX/pubhtml?gid=1145410953&single=true"
export function getData(callback) {
  readRemoteFile(SHEETS_CSV, {
    complete: callback,
  });
}

export function getAggregateData(callback) {
  readRemoteFile(SHEETS_CSV_AGGREGATE, {
    complete: callback,
  });
}
