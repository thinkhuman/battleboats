
// The View object
var view = {

// this method takes a string message and displays it 
// in the message display area
displayMessage: function(msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
    },

// Displays the "hit" message in the grid
displayHit: function(location) {
	var cell = document.getElementById(location);
	cell.setAttribute("class", "hit");
    },

// Displays the "miss" message in the grid
displayMiss: function(location) {
	var cell = document.getElementById(location);
	cell.setAttribute("class", "miss");
    }

};


view.displayMessage("Tap tap, is this thing on?");

// The Model

var model = {
    
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    ShipsSunk: 0,

    ships: [ { locations: ["10", "20", "30"], hits: ["", "", ""] },
             { locations: ["32", "33", "34"], hits: ["", "", ""] },
             { locations: ["63", "64", "65"], hits: ["", "", "hit"] }
            ],
    fire: function(guess) {
		for (var i = 0; i < this.numShips; i++) { var ship = this.ships[i];
        var index = ship.locations.indexOf(guess);
        if (index >= 0) {
            ship.hits[index] = "hit";
            ￼if (this.isSunk(ship)) {
            	view.displayMessage("You sank my battleship!");
            	 this.shipsSunk++;
            }
            return true;
        }
       }

       view.displayMiss(guess); 
       view.displayMessage("You missed."); 
       return false;
    },
       isSunk: function(ship) {
            for (var i = 0; i < this.shipLength; i++) { 
            	if (ship.hits[i] !== "hit") {
                return false;
            }
         }
         return true; 
     }

};

model.fire("53");
model.fire("06"); 
model.fire("16"); 
model.fire("26");
model.fire("34"); 
model.fire("24"); 
model.fire("44");
model.fire("12"); 
model.fire("11"); 
model.fire("10");

