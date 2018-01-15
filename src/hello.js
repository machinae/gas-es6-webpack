module.exports = {
  helloWorld () {
    SpreadsheetApp.getActiveSheet().getRange('A1').setValue('Hello world!');
  }
}
