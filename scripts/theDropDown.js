/**
 * Method sets a new dataValidation rule across the sheet.
 * 
 * @param {*} range 
 * @param {*} sourceRange 
 */
function depDrop_(range, sourceRange) {
    var rule = SpreadsheetApp.newDataValidation().requireValueInRange(sourceRange, true).build();
    range.setDataValidation(rule);
}
    var activeCell = SpreadsheetApp.getActiveSheet().getActiveCell();
Logger.log("Active Cell:"+activeCell);
    var activeColumnNumber = activeCell.getColumn();
Logger.log("Active Column Number:"+activeColumnNumber);

/**
 * Method to set the dataValidation rule for a range according to the sourceRange
 */
function setRangeRule() {
    var range = SpreadsheetApp.getActiveSheet().getRange(activeCell.getRow(), activeColumnNumber + 1);
    var sourceRange = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(activeCell.getValue());
    depDrop_(range, sourceRange);
}

/**
 * Method is called to set the data validation if the column byRangeName exists.
 */
function onEdit() {
    // Column 1 is mostly the main category
    if (activeColumnNumber == 1 && SpreadsheetApp.getActiveSheet()) {
        setRangeRule();
    }
    // Column 2 is sub-category 
    else if (activeColumnNumber == 2 && SpreadsheetApp.getActiveSheet()) {
        setRangeRule();
    }
    // Column 3 is sub-sub-category
    else if (activeColumnNumber == 3 && SpreadsheetApp.getActiveSheet()) {
        setRangeRule();
    } else {
      Logger.log("No more Columns found");
    }
}