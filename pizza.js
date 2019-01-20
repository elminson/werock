var fs = require('fs');
const args = process.argv.slice(2);
var filename = args[0];
var totalSlice = 0;
var slices = 0;
if (fs.existsSync(filename)) {
    var firstLine = true;
    var pizza = [];
    //read the file
    fs.readFile(filename, function (err, data) {
            if (err) throw err;
            var array = data.toString().split("\n");
            console.log("firstLine Set variables");
            var config = array[0].split(/\s+/);
            var row = config[0];
            var column = config[1];
            var minIngredientPerSlice = config[2];
            var maxCellsPerSlice = config[3];
            firstLine = false;
            array = array.slice(1);
            console.log(config);
            console.log("=====================");
            //set array 0
            var pizza = new Array(column)
            for (i = 0; i < row; i++)
                pizza[i] = new Array(column)

            console.log(pizza);
            // set Binary matrix: Tomatoes = 1, Mushrooms = 0
            for (i in array) {
                var elements = array[i].split('');
                if (elements !== '') {
                    for (x in elements) {
                        if (elements[x] === "T") {
                            pizza[i][x] = 1;
                        } else {
                            pizza[i][x] = 0;
                        }
                    }
                }
            }

            console.log(pizza);

        }
    );

}

// L (1 ≤ L ≤ 1000) is the minimum number of each ingredient cells in a slice,
// H (1 ≤ H ≤ 1000) is the maximum total number of cells of a slice

function checkSize() {
    
}

function checkL() {
    
}
function checkH() {
    
}


