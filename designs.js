// Select color input
let color;

// Select size input
let height, width;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
  event.preventDefault();  // TODO: prevent  default such as submitting of forms
  
  height = $('#inputHeight').val(); // TODO: select the height value
  width = $('#inputWeight').val(); // TODO: select the width value
  
  // TODO: call mekeGrid()
  makeGrid();
});

function makeGrid() {
// TODO: Draw grid table
  
  for (let i = 1; i <= height; i++) {
    $('#pixelCanvas').append('<tr id=tableRow' + i + '></tr>'); // TODO: create table row and assigned unique id with the var i

    let j = 0; // TODO: initiliase j for the loop counter
    while (j < width) {
      $('#tableRow' + i).append('<td></td>'); // TODO: create table cell
      j++;
    }
  }
  
  // TODO: Pick A Color
  $('td').click(function pickAColor() {
    color = $('#colorPicker').val(); // TODO: pick a color 

    if($(this).attr('style'))  {
      $(this).removeAttr('style');
    } else {
      $(this).attr('style', 'background-color:'+color);
    }
  });
}
