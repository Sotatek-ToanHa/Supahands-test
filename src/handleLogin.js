import moment from "moment";
import { printTable } from "console-table-printer";
import { DATE_FORMAT } from "./constants/index.js";

export function handleNumberOfLogin(mockLoginData) {
  const sortedData = formatAndSortLoginData(mockLoginData);
  const results = calculateConsecutiveLogins(sortedData);
  // Show results on console
  printTable(results);
}

export const formatAndSortLoginData = (data) => {
  let formatData = new Set();
  for (const item of data) {
    //Check is Date and format data
    if (moment(new Date(item)).isValid()) {
      formatData.add(moment(new Date(item)).format(DATE_FORMAT));
    }
  }
  //Convert to Array and Sort in descending order
  return Array.from(formatData).sort().reverse();
};

export const calculateConsecutiveLogins = (loginData) => {
  // 1. start, end: is the beginning date and the end date of consecutive login days
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
    //If it's 2 adjacent days
    if (distance === 1) {
      if (numberOfConsecutiveLogins === 1) {
        start = currentDate;
      }
      end = nextDate;
      numberOfConsecutiveLogins += 1;
    } else {
      results.push({
        start: end || currentDate,
        end: start || currentDate,
        length: numberOfConsecutiveLogins,
      });
      start = nextDate;
      end = nextDate;
      numberOfConsecutiveLogins = 1;
    }
  }
  return results;
};

// handleNumberOfLogin(mockLoginData);
