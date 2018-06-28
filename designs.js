// Select color input
var color;

// Select size input
var height, width;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
  event.preventDefault();  //prevent  default such as submitting of forms
  
  height = $('#inputHeight').val(); //select the height value
  width = $('#inputWeight').val(); //select the width value
  
  //call mekeGrid()
  makeGrid();
});

function makeGrid() {
// Your code goes here!
//Draw grid table
  for (var i = 1; i <= height; i++) {
    $('#pixelCanvas').append('<tr id=tableRow' + i + '></tr>'); //assigned unique id with the var i

    for (var j = 0; j < width; j++) {
      $('#tableRow' + i).append('<td></td>'); 
    }
  }
  //Pick A Color
  $('td').click(function pickAColor() {
    color = $('#colorPicker').val();

    if($(this).attr('style'))  {
      $(this).removeAttr('style');
    } else {
      $(this).attr('style', 'background-color:'+color);
    }
  });
}
