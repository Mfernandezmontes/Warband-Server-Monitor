//$(function(){
//    // server status
//    var statusContener = $('#status');
//
//    $.ajax({
//        url: '/server.json',
//        datType: 'json',
//        success: function(json){
//            var template = '';
//            $.each(json, function(i, v){
//                template += '<li style="background-image:url('+TEMPLATE_URL+'/map/'+json[i]["map"].replace(/[^\w]/g, '-')+'.jpg )"><p>';
//                template += 'Server name: <strong>'+json[i]["server"]+'</strong><br />';
//                template += 'Map: <strong>'+json[i]["map"]+'</strong><br />';
//                template += 'GameMode: <strong>'+json[i]["gamemode"]+'</strong><br />';
//                template += '<span>Players: <strong>'+json[i]["players"]+'/'+json[i]["maxplayers"]+'</strong><br />Update: <strong>'+json[i]["updateTime"]+'</strong><br /></span>';
//                template += '</p><img src="'+TEMPLATE_URL+'/gfx/ico.png" alt=""></li>';
//            });
//            statusContener.html('<ul>'+template+'</ul>');
//        }
//    })
//
//})

$(document).ready(function(){

});




function getInfo(){
    
    var statusContainer = $('#status');

    $.ajax({
        url: 'getinfoserver.php',
        datType: 'json',
        data: {ip : $("#ip").val(),
               port : $("#port").val()},
        success: function(data){

            json = JSON.parse(data);

            var mostar = '';
            mostar += 'Nombre server: ' + json["Name"] + '<br>';
            mostar += 'Modulo: ' + json["ModuleName"] + '<br>';
            mostar += 'Numero de jugadores: ' + json["NumberOfActivePlayers"] + '<br>';
            mostar += 'Mapa: ' + json["MapName"] + '<br>';

            statusContainer.html('<ul>'+mostar+'</ul>')

        }
    })
}







