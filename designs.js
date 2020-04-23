//PixelArtMaker, where the user selects size and color
//User is able to draw pictures inside a grid by clicking on a specific square

// function that should make a grid when users submit heigt and width
function makeGrid() {
  //variables for height, width and canvas element
  //variable for height, where user submits a number min 0, max 50 for height
  var height = document.getElementById('inputHeight').value;
  //variable for width, where user submits a number min 0, max 50 for width
  var width = document.getElementById('inputWidth').value;
  //after user submits height and width a grib should appear
  var table = document.getElementById('pixelCanvas');

// Creating table grid, when user types in height and weigth
//By clicking the submit button again, the grid resets to blank state
  table.innerHTML = '';
  //should appear a grid with specific height the user selected
  var tbody = document.createElement('tbody');
  for (var i = 0; i < height; i++) {
    //should appear a grid with specific width the user selected
    var tr = document.createElement('tr');
    for (var j = 0; j < width; j++) {
      //user should get a blank state grid by clicking submit button again
      var td = document.createElement('td');
      td.appendChild(document.createTextNode(''));
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
}

//variable that the user can change the color for painting
//user should be able to change the color for every single square
$('body').on('click', 'td', function() {
  //user can choose a color from the color selector
    var color = document.getElementById('colorPicker').value;
  $(this).css('background-color', color);
});
