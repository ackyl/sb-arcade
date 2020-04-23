// Functions
const handleGoButtonClick = () => {
  $(".go-btn").on( "click", function() {
    $(".section-1").addClass('section-move-out');
    $(".section-2").addClass('section-show');
    setTimeout(function(){ 
      $(".section-1").addClass('section-hide');
      $(".section-2").addClass('section-move-in');
    }, 1500);
  });
}

// Initial Execution
handleGoButtonClick();
