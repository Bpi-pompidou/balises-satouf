$(function(){
var resultat = 0;
var Q = 1
var R= 1
var name =''

function txt_tryagain(){ 
            $('#fin').prepend('Essayez encore !');
            $('#resultat').css('color', '#f77');
            $('#fin').append('<br>Il vous reste encore des choses à apprendre, alors rejouez vite !');
        };
function hide(){
    $('.hide').hide();
};
function end(){
        hide()
        $("#outro").show();
        switch(resultat){
            case 0:
            txt_tryagain();
            break;
            case 1:
            txt_tryagain()
            break;
            case 2:
            txt_tryagain()
            break;
            case 3:
            $('#fin').prepend('Pas mal...');
            $('#resultat').css('color', '#ff7');
            $('#fin').append('<br>Il vous reste encore des choses à apprendre, alors rejouez vite !');
            break;
            default : 
            $('#fin').html('Bravo !');
            $('#resultat').css('color', '#7f7');
            }
            $('#resultat').append(resultat+'/5');
};
hide();
/*INTRO*/
$('#intro').show();
    $('#start').click(function(){
        $('#intro').hide();
        $('#Q1').show();

    });

/*Q1*/
$('button').click(function(){
$('#verif').html('');
$('.buzzer').css('background', "rgba(255, 255, 255, 0");
name = $(this).attr('value');
switch(name){
    case 'true':
    $('.buzzer').show();
    $('#verif').append('OUI');
    $('.buzzer').animate({
        opacity : 1,
        backgroundColor: '#0f0'
        }, 100)
        .fadeOut(900);
    resultat++;
    hide();
    $('#R'+R).show();
    R++
    console.log(R);
    console.log(resultat);
    break;
    case 'false':
        $('.buzzer').show();
        $('#verif').append('NON');
        $('.buzzer').animate({
            opacity : 1,
            backgroundColor: '#f00'
            } , 100)
            .fadeOut(900);
        if($(this).parent().hasClass('final')){
            end()
        }else{
            hide();
            R++
            Q++
            clique=1;
            console.log(Q);
            $("#Q"+Q).show();
            }
    break;
    };
})


/*R1*/
$('.next').click(function(){
name = $(this).attr('value');
if(name == "end"){
  end();
}else{
    hide();
    Q++;
    clique=1;
    console.log(Q);
    $("#Q"+Q).show();
    }
})

/*FIN*/
$('#aggain').click(function(){
    hide()
    $('#intro').show();
    clique=1;
    R=1;
    Q=1;
    resultat=0;
    name ='';
    $('#resultat').html('');
    $('#fin').html('');
});

});



