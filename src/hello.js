module.exports = {
  helloWorld(name) {
    SpreadsheetApp.getActiveSheet().getRange('A1').setValue('Hello '+ name);
  }
}

