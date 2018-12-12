function addTable(id, number) {
    var newbutton = '<a href="newcheck.html?id=' + id + '&table=' + number + '" class="btn btn-primary">New</a>';
    var allbutton = '<a href="checks.html?table="' + number + '" class="btn">All Checks</a>';
    var html = '<div class="card" style="width: 18rem;"><img class="card-img-top" src=".../100px180/" alt="Card image cap"><div class="card-body">'+
        '<h5 class="card-title">Table</h5><p class="card-text">' +
        number +'</p>' + newbutton + allbutton +
        '</div></div>';

console.log("Add card: "+html);
    return html;
}

function getTables() {
    $.ajax({

            url: "https://check-api.herokuapp.com/tables",
            data: {

            },
            type: "GET",
            dataType : "json",
            beforeSend: function (xhr) {
               xhr.setRequestHeader ("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYWRlNzAxLTE1MGYtNGNhOS1hNmJkLTY1MTc5NWNlNTZiZSIsIm5hbWUiOiJFbGlqYWggTWNQaGVyc29uIn0.GdBk_KlhAi51ILML7YCL9fsIOnpnRUZHKVnVf-poxVU");
            },
        })
          // Code to run if the request succeeds (is done);
          // The response is passed to the function
          .done(function( json ) {
                $.each( json, function( key, value ) {
                    console.log("Table: "+ value.number);

                    $(tablelist).append(addTable(value.id, value.number));
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

console.log( "Showing tables page." );
$( document ).ready( getTables );
