
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null) {
        return null;
    }
    return decodeURI(results[1]) || 0;
}

function addCheck(table, number) {
    var html = '<div class="card" style="width: 18rem;"><img class="card-img-top img50" src="images/check.png" alt="Card image cap"><div class="card-body">'+
    '<h5 class="card-title">Check Number</h5><p class="card-text">' +
    number +'</p><a href="checks.html?table=' + table + '&check=' + number + '" class="btn btn-primary">Details</a></div></div>';
    
    console.log("Add card: "+html);
    return html;
}

function getChecks(table) {
    
        $.ajax({
               
               url: "https://check-api.herokuapp.com/checks",
               data: {
               
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
            console.log("Check for Table: "+ table);
            $.each( json, function( key, value ) {
                   $(checklist).append(addCheck(table, value.id));
                });
            $(records).html( JSON.stringify(json) );
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

function showCheck(theTable, aCheck) {
    $.ajax({
           
           url: "https://check-api.herokuapp.com/checks/"+aCheck,
           data: {
           id: 123
           },
           type: "POST",
           dataType : "json",
           beforeSend: function (xhr) {
           xhr.setRequestHeader ("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYWRlNzAxLTE1MGYtNGNhOS1hNmJkLTY1MTc5NWNlNTZiZSIsIm5hbWUiOiJFbGlqYWggTWNQaGVyc29uIn0.GdBk_KlhAi51ILML7YCL9fsIOnpnRUZHKVnVf-poxVU");
           },
           })
        // Code to run if the request succeeds (is done);
        // The response is passed to the function
    .done(function( json ) {
              console.log("Check details for: "+ aCheck);
              $(records).html( JSON.stringify(json) );
          })
        // Code to run if the request fails; the raw request and
        // status codes are passed to the function
    .fail(function( xhr, status, errorThrown ) {
          alert( "Sorry, there was a problem!" );
          console.log( "Error: " + errorThrown );
          console.log( "Status: " + status );
          console.dir( xhr );
          console.log("Check details for: "+ aCheck);
            $(records).html( "POS system blocked: "+ errorThrown );
          })
        // Code to run regardless of success or failure;
    .always(function( xhr, status ) {
            alert( "The request is complete!" );
            });
}

function amendCheck(checkid, itemid, isvoid, isopen) {
    $.ajax({
           
           url: "https://check-api.herokuapp.com/addItem",
           data: {
           id: 123
           },
           type: "PUT",
           dataType : "json",
           beforeSend: function (xhr) {
           xhr.setRequestHeader ("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYWRlNzAxLTE1MGYtNGNhOS1hNmJkLTY1MTc5NWNlNTZiZSIsIm5hbWUiOiJFbGlqYWggTWNQaGVyc29uIn0.GdBk_KlhAi51ILML7YCL9fsIOnpnRUZHKVnVf-poxVU");
           },
           })
        // Code to run if the request succeeds (is done);
        // The response is passed to the function
    .done(function( json ) {
          $(tablelist).html( JSON.stringify(json) );
          
          $.each( json, function( key, value ) {
                 console.log("Table: "+ value.number);
                 
                 $(tablelist).append(addTable(value.number));
                 });
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

function voidItem(tableid, itemid) {
    $.ajax({
           
           url: "https://check-api.herokuapp.com/addItem",
           data: {
           id: 123
           },
           type: "POST",
           dataType : "json",
           beforeSend: function (xhr) {
           xhr.setRequestHeader ("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYWRlNzAxLTE1MGYtNGNhOS1hNmJkLTY1MTc5NWNlNTZiZSIsIm5hbWUiOiJFbGlqYWggTWNQaGVyc29uIn0.GdBk_KlhAi51ILML7YCL9fsIOnpnRUZHKVnVf-poxVU");
           },
           })
        // Code to run if the request succeeds (is done);
        // The response is passed to the function
    .done(function( json ) {
          
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

function processRequest() {
    var theTable = $.urlParam("table");
    var aCheck = $.urlParam("check");
    
    if ( aCheck != null ) {
        showCheck(theTable, aCheck);
    } else if ( theTable != null ) {
        getChecks(theTable);
    }
}

console.log( "Showing all checks." );
$( document ).ready( processRequest );

