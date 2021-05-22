import React, { Component } from "react";
import { readRemoteFile } from "react-papaparse";

// Scripts for getting data from google sheets
const SHEETS_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSuto35cosEJxX9gv0NmohoYAFwMLbySrNWBvd70bPv9PBo1ry0VpXJBP1nMy4dH8378HzDSN7M1BNd/pub?gid=1711477268&single=true&output=csv";

const SHEETS_CSV_AGGREGATE =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTsK4cc63GbrqDcbhfUXjbV01hkCZd8p7pBhICyBQFWM_xFXnxqxn749zMwaG8ZNMDUAEFn9rgu-ZuX/pub?gid=1145410953&single=true&output=csv";
export function getData(callback) {
  readRemoteFile(SHEETS_CSV, {
    complete: callback,
  });
}

export function getAggregateData(callback) {
  readRemoteFile(SHEETS_CSV_AGGREGATE, {
    complete: callback,
    download: true,
  });
}

export function getCounts(sex, cb) {
  getAggregateData((res) => {
    var linesToCheck = arrsCountFor(sex);
    var resp = {};
    var data = res.data;
    for (var line of linesToCheck) {
      var vacc = data[line][1];
      if (!resp[vacc]) resp[vacc] = {};
      for (var i in data[line].slice(2)) {
        var ix = parseInt(i) + 2;
        if (!resp[vacc][data[0][ix]]) {
          resp[vacc][data[0][ix]] = 0;
        }
        resp[vacc][data[0][ix]] += parseInt(data[line][ix]);
      }
    }

    cb(resp);
  });
}

function arrsCountFor(sex) {
  if (sex == "male") {
    return [2, 4, 6, 8];
  } else if (sex == "all") {
    return [2, 4, 6, 8, 12, 14, 16, 18];
  } else return [12, 14, 16, 18];
}

export function getRatingAverage(sex, cb) {
  getAggregateData((res) => {
    var linesToCheck = arrsRatingAverageFor(sex);
    var resp = {};
    var data = res.data;
    console.log(linesToCheck);
    for (var line of linesToCheck) {
      var vacc = data[line][1];
      if (!resp[vacc]) resp[vacc] = {};
      console.log(JSON.stringify(resp["Moderna"]), line);
      for (var i in data[line].slice(2)) {
        var ix = parseInt(i) + 2;
        if (!resp[vacc][data[0][ix]]) {
          resp[vacc][data[0][ix]] = 0;
        }
        resp[vacc][data[0][ix]] += parseFloat(data[line][ix]);
      }
    }

    cb(resp);
  });
}

function arrsRatingAverageFor(sex) {
  if (sex == "male") {
    return [45, 47, 49, 51];
  } else if (sex == "all") {
    return [45, 47, 49, 51, 53, 55, 57, 59];
  } else return [53, 55, 57, 59];
}
export function getPercentage(sex, cb) {
  getAggregateData((res) => {
    var linesToCheck = arrsPercentsFor(sex);
    var resp = {};
    var data = res.data;
    for (var line of linesToCheck) {
      var vacc = data[line][1];
      if (!resp[vacc]) resp[vacc] = {};
      for (var i in data[line].slice(2)) {
        var ix = parseInt(i) + 2;
        if (!resp[vacc][data[0][ix]]) {
          resp[vacc][data[0][ix]] = 0;
        }
        resp[vacc][data[0][ix]] += parseFloat(data[line][ix].replace(",", "."));
      }
    }

    cb(resp);
  });
}

function arrsPercentsFor(sex) {
  if (sex == "male") {
    return [24, 26, 28, 30];
  } else if (sex == "all") {
    return [60, 62, 64, 66];
  } else return [34, 36, 38, 40];
}
