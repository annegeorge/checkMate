
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null) {
        return null;
    }
    return decodeURI(results[1]) || 0;
}

function newCheck(tableid) {
    var tid = JSON.stringify(tableid);
    var tableData = [
                { "tableId":tid }
                ]
    $.ajax({
           
           url: "https://check-api.herokuapp.com/checks",
           data: { "tableId":tid },
           type: "POST",
           dataType : "json",
           beforeSend: function (xhr) {
           xhr.setRequestHeader ("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDQ0NTgwNjMsImV4cCI6MTU0NzA1MDA2M30.yMBriUu37pPbVScbqtLtH3V7i0kY61RjVC7uTKjbaUc");
           },
           })
    .done(function( json ) {
            console.log("New Check for Table: "+ tableid);
            if ( json ) {
                var data = JSON.parse(json);
                var nextpage ="checks.html?tableid="+tableid+"&checkid="+data.id;
                location.window.href = nextpage;
                $(records).html( JSON.stringify(json) );
            }
          })
        // Code to run if the request fails; the raw request and
        // status codes are passed to the function
    .fail(function( xhr, status, errorThrown ) {
          alert( "Sorry, there was a problem!" );
          console.log( "Error: " + errorThrown );
          console.log( "Status: " + status );
          console.dir( xhr );
          $( records ).html( "POS system blocked: "+ xhr );
          })
    .always(function( xhr, status ) {
            alert( "The request is complete!" );
            });
}

function processRequest() {
    var theTable = $.urlParam("id");
    
    if ( theTable != null ) {
        newCheck(theTable);
    }
}

console.log( "Create a new check." );
$( document ).ready( processRequest );

