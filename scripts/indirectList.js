var sheetUi = SpreadsheetApp.getUi();
var activeSheet = SpreadsheetApp.getActiveSpreadsheet();

/**
 * Method that is called at the launch to set the ui.
 */
function onOpen() {
    sheetUi.createMenu('MaqSheet')
        .addItem('Get values from column', 'getVals')
        .addToUi();
}

/**
 * Method to get the values from the target.
 */
function getVals() {
    var sheet = activeSheet.getActiveSheet();
    var getColumnLetter = sheetUi.prompt('Select column..', 'Enter the letter of the target column..', sheetUi.ButtonSet.OK_CANCEL);
    if (getColumnLetter.getSelectedButton() == sheetUi.Button.CANCEL) {
        return
    } else {
        getColumnLetter = getColumnLetter.getResponseText().toUpperCase();
        Logger.log("Column Letter:" + getColumnLetter);
    }

    var columnNo = getColumnLetter.charCodeAt(0) - 64;
    Logger.log("Column Number:" + columnNo);

    try {
        var data = sheet.getRange(1, columnNo, sheet.getMaxRows()).getValues().filter(String);
        Logger.log("Data:"+data);
    } catch (e) { 
        sheetUi.alert('Invalid input please try again.', sheetUi.ButtonSet.OK); 
        return; 
    }
}