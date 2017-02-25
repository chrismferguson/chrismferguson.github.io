function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  
 $('.projects').hide(); {
     $(this).next().slideToggle(400);

 };
 $('.projects-button').on('click', function() {
 		//$(this).next().toggle();
   $(this).next().slideToggle(400);
    $(this).text('Projects Viewed');
   
 }
);
}

$(document).ready(main);
