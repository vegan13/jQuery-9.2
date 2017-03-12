$(document).ready(function(){
    
    // wyszukanie spanów i zmiana ich koloru
    
	$('span').each(function(index, element) {
        if(index % 2 == 0) {
            $(element).css('color', 'red');
        };
    });
    
    // dodanie przycisku
    
    $('p').each(function(index, element) {
        $(element).append('<button class="btn" data-tmp="' + index + '">Click me</button>');
    });
    
    // dodanie eventu
    
    $('button').click(function(){
       alert($(this).attr('data-tmp')); 
    });
    
});