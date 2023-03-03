import moment from "moment";
import { readFileSync } from "fs";
import { printTable } from "console-table-printer";

const fileUrl = new URL("./mockLoginData.json", import.meta.url);
const mockLoginData = JSON.parse(readFileSync(fileUrl).toString());

export function handleNumberOfLogin(mockLoginData) {
  const sortedData = formatAndSortData(mockLoginData);
  const results = calculateConsecutiveLogins(sortedData);
  printTable(results);
}

export const formatAndSortData = (data) => {
  let formatData = new Set();
  for (const item of data) {
    //Check is Date and format data
    if (moment(new Date(item)).isValid()) {
      formatData.add(moment(new Date(item)).format("YYYY-MM-DD"));
    }
  }
  //Convert to Array and Sort in descending order
  return Array.from(formatData).sort().reverse();
};

export const calculateConsecutiveLogins = (loginData) => {
  // 1. start, end: is the beginning date and is the end date
  // 2. distance: To check for 2 consecutive days
  // 3. results: is the final result of the test
  let start, end, distance;
  let results = [];
  let numberOfConsecutiveLogins = 1;
  for (let i = 0; i < loginData.length; i++) {
    const currentDate = loginData[i];
    const nextDate = loginData[i + 1];
    distance = moment(new Date(currentDate)).diff(
      moment(new Date(nextDate)),
      "days"
    );
    if (distance === 1) {
      //If it's 2 adjacent days
      if (numberOfConsecutiveLogins === 1) {
        start = currentDate;
      }
      numberOfConsecutiveLogins += 1;
      end = nextDate;
    } else {
      results.push({
        start: end || currentDate,
        end: start || currentDate,
        length: numberOfConsecutiveLogins,
      });
      numberOfConsecutiveLogins = 1;
      start = nextDate;
      end = nextDate;
    }
  }
  return results;
};

// handleNumberOfLogin(mockLoginData);
