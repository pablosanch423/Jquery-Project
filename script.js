$( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      active: false
    });
  } );

  $( function() {
    $( document ).tooltip();
  } );

  $( function() {
    $( "#datepicker" ).datepicker();
  } );

  $( function() {
    $( "#dialog" ).dialog();
    $( "#dialog" ).dialog({
      height: 780,
      width: 900,
    })
  } );



