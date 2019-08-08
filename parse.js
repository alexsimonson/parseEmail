const fs = require('fs');

fs.readFile('./Email.eml', 'utf8', function (err, file) {
    if (err) {
        console.log('Error', err);
    } else {
        //grabbing some basic data
        var from = extractData(file, 'From: ', '\n');
        var fromName = extractData(from, '', ' <');
        var fromEmail = extractData(from, '<', '>');
        var to = extractData(file, 'To: ', '\r\n');
        var date = extractData(file, 'Date: ', '\r\n');
        //setup object holding basic relevant fields
        var relevantFields = { 'toEmail': to, 'fromName': fromName, 'fromEmail': fromEmail, 'date': date };
        console.log(relevantFields);
    }
});

//this function extracts all text between a set of characters that will be considered the start and endpoint
function extractData(data, startStr, endStr) {
    subStrStart = data.indexOf(startStr) + startStr.length;
    return data.substring(subStrStart, subStrStart + data.substring(subStrStart).indexOf(endStr));
}