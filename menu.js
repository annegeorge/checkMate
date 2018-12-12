function getMenu() {
    $.ajax({
           
           url: "https://check-api.herokuapp.com/items",
           data: {
           id: 123
           },
           type: "GET",
           dataType : "json",
           beforeSend: function (xhr) {
           xhr.setRequestHeader ("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDQ0NTgwNjMsImV4cCI6MTU0NzA1MDA2M30.yMBriUu37pPbVScbqtLtH3V7i0kY61RjVC7uTKjbaUc");
           },
           })
        // Code to run if the request succeeds (is done);
        // The response is passed to the function
    .done(function( json ) {
          $( "menulist" ).html( JSON.stringify(json) );
          })
        // Code to run if the request fails; the raw request and
        // status codes are passed to the function
    .fail(function( xhr, status, errorThrown ) {
          alert( "Sorry, there was a problem!" );
          console.log( "Error: " + errorThrown );
          console.log( "Status: " + status );
          console.dir( xhr );
          $( tablelist ).html( "POS system blocked: "+ errorThrown );
          })
        // Code to run regardless of success or failure;
    .always(function( xhr, status ) {
            alert( "The request is complete!" );
            });
}

console.log( "Showing tables page." );
$( document ).ready( getMenu );

