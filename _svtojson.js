/*
*  Converts __ separated value data to JSON 
*  for example, CSV (comma separated values) or TSV (tab separated values) => JSON
*  @param {String} data (should be in CSV/TSV/etc format)
*  @param {String} delimiter (TSV: '\t', CSV: ',') (defaults to CSV)
*  @returns {Object} json
*/

var nsv2json = (function() {
    function convert(data, delimiter) {
        var json = [];
        var d = data.split('\n');
        var keys = d[0].split(delimiter || ',');
        d = d.splice(1);
        d.forEach(function(data) {
            var keyVal = data.split(delimiter || ',');
            var obj = {};
            keys.forEach(function(keyData, n) {
                obj[keyData] = keyVal[n];
            });
            json.push(obj);
        });
        return json;
    } 
    return function(data, delimiter) {
        return convert(data, delimiter);
    }
})();