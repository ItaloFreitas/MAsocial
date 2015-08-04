$(function(){

    $("#upload").click(function(){
        

                    $.ajax({
                    type      : 'post',         
                    url       : 'http://localhost/server/insert.php',
                    data      : 'nome='+ $('#nome').val() +'&sobrenome='+ $('#sobrenome').val() +'&titulo='+ $('#titulo').val() +'&post='+ $('#post').val(),
                    dataType  : 'html',
                    success : function(txt){
                            
                             console.log("Dados gravados");


                        }
            });
                        alert('Dados Gravados !');history.go('index.html');
        });

         
 });