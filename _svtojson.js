/*
*  Converts __ separated value data to JSON 
*  for example, CSV (comma separated values) or TSV (tab separated values) => JSON
*  @param {String} data (should be in CSV/TSV/etc format)
*  @param {String} delimiter (TSV: '\t', CSV: ',') (defaults to CSV)
*  @returns {Object} json
*
*  @author: gist.github.com/krrishd
*/

let _sv2json = (() => {
    function convert(data, delimiter) {
        let json = [];
        let d = data.split('\n');
        let keys = d[0].split(delimiter || ',');
        d = d.splice(1);
        d.forEach(data => {
            let keyVal = data.split(delimiter || ',');
            let obj = {};
            keys.forEach((keyData, n) => {
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

module.exports = _sv2json;
