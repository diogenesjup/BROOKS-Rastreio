if(atendimento=="" || atendimento==null || atendimento=="0"){

    aviso("URL inválida, ou atendimento finalizado.","Verifique a URL acessada, ou se esse atendimento ainda é válido.");

}else{
   
    aviso("O colaborador BROOKS está à caminho","Em alguns minutos nosso colaborador chegará até você, através desse link você pode acompanhar o deslocamento dele.");

}


/**
*  ------------------------------------------------------------------------------------------------
*
*
*   AVISO
*
*
*  ------------------------------------------------------------------------------------------------
*/
function aviso(titulo, mensagem, tipo) {
    console.log(
      "%c COMEÇANDO FUNÇÃO PARA EXIBIR AVISO",
      "background:#ff0000;color:#fff;"
    );
    $(".modal-avisos").fadeIn(100);
  
    $(".modal-avisos .aviso").css("bottom", "30px");
  
    // ALIMENTAR O HTML
    $(".modal-avisos .aviso h3").html(titulo);
  
    if(tipo!="html"){
      $(".modal-avisos .aviso p").html(
        mensagem +
          `<p style="padding-top:12px;padding-left:0px;text-align:center;">
             <button type="button" onclick="fecharAviso();" class="btn btn-default btn-default-2 btn-lg" style="border:1px solid #ccc;">Ok</button>
          </p>`
      );
    }else{
      $(".modal-avisos .aviso").append(mensagem);
    }
  
  
    //setTimeout("fecharAviso()",12000);
  }
  
  function fecharAviso() {
    $(".modal-avisos .aviso").css("bottom", "-300%");
    $(".modal-avisos").fadeOut(500);
  }



/**
*  ------------------------------------------------------------------------------------------------
*
*
*   API
*
*
*  ------------------------------------------------------------------------------------------------
*/


/**
*  ------------------------------------------------------------------------------------------------
*
*
*   MAPA
*
*
*  ------------------------------------------------------------------------------------------------
*/
setTimeout("initMapa();", 3000);


// VARIAVEIS GLOBAIS
var verificacaoAtendimento;

// VARIAVEIS GLOBAIS DO MAPA
var input;
var map;
var directionsDisplay; // Instanciaremos ele mais tarde, que será o nosso google.maps.DirectionsRenderer


// SETAR AS COORDANADAS PADRÃO CASO NÃO AS TENHAMOS
var pscLat = "-23.5667005";
var pscLon = "-46.6531514";


// INICIALIZAR GEOLOCATION
function initGeolocation(){

      if( navigator.geolocation )
       {
          // Call getCurrentPosition with success and failure callbacks
          navigator.geolocation.getCurrentPosition( success, fail );
       }
       else
       {
          aviso("Sem GPS","Não conseguimos acessar o seu GPS. Mas não se preocupe, você poderá utilizar o aplicativo mesmo assim.");
       }
       function success(position)
            {
                var cordenadas = "";
                cordenadas = position.coords.longitude;
                cordenadas = cordenadas+", ";
                cordenadas = cordenadas + position.coords.latitude;
                // SETAR AS NOVAS COORDENADAS
                pscLat = position.coords.latitude;
                pscLon = position.coords.longitude;

                console.log("LAT NEW: "+pscLat);
                console.log("LON NEW: "+pscLon);

                // SALVAR NA MEMORIA A POSIÇÃO ATUAL DO USUARIO
                if(pscLat!="" && pscLon!=""){
                  localStorage.setItem("latitude",pscLat);
                  localStorage.setItem("longitude",pscLon);
                }

                // SE TIVERMOS A LOCALIZAÇÃO ATUAL, A GENTE COMEÇA A EXIBIR O MAPA A PARTIR DESSE PONTO
                if(pscLat!="" && pscLon!=""){

                    console.log("Coordenadas foram obtidas sem maiores problemas.");
                    
                    setInterval(function(){

                        carregarMapa();
       
                     }, 20.0*1000); 

                }else{

                   aviso("Problemas com o GPS","Conseguimos obter os dados do seu GPS, mas os mesmos não estão no formato esperado. Mas não se preocupe, você poderá utilizar o aplicativo mesmo assim.");
                   
                   setInterval(function(){

                       carregarMapa();
   
                    }, 20.0*1000); 
                }


            }
          function fail()
            {
               aviso("Sem GPS","Não conseguimos acessar o seu GPS, por causa de um problema de permissões no disposítivo. Você pode reiniciar o aplicativo para tentar novamente.");
               
               setInterval(function(){

                    carregarMapa();

                }, 20.0*1000); 

            }


}



function initMapa(){

   console.log("INICIANDO FUNÇÃO PARA GERAR O MAPA GOOGLEMAPS");
   console.log("%c NESSA FUNÇÃO VAMOS INICIAR O AUTOCOMPLETE","background:#ff0000;color:#fff;");
   
   // AUTO COMPLETO DO ENDEREÇO
   //input = document.getElementById('destino');
   //var autoComplete = new google.maps.places.Autocomplete(input);

   //var directionsService = new google.maps.DirectionsService();
   //google.maps.event.addDomListener(window, 'load', autoComplete);

  localStorage.setItem("latitude",pscLat);
  localStorage.setItem("longitude",pscLon);

  initGeolocation();


}

function carregarMapa(){

         directionsDisplay = new google.maps.DirectionsRenderer(); // Instanciando...

          pscLat = localStorage.getItem("latitude");
          pscLon = localStorage.getItem("longitude");

           var latlng = new google.maps.LatLng(pscLat, pscLon);

           var options = {
              zoom: 15,
              center: latlng,
              scrollwheel: true,
              disableDefaultUI: true,
              draggable: true,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              styles: [
              {
                "featureType": "administrative.neighborhood",
                "elementType": "labels",
                "stylers": [{
                  "visibility": "off"
                }]
              }, {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [{
                  "visibility": "off"
                }]
              }, {
                "featureType": "administrative.locality",
                "elementType": "labels",
                "stylers": [{
                  "visibility": "off"
                }]
              },
                  {
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#f5f5f5"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#f5f5f5"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#bdbdbd"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#ffffff"
                      }
                    ]
                  },
                  {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#dadada"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#c9c9c9"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  }
                ]
           };


           map = new google.maps.Map(document.getElementById("mapa"), options);
           directionsDisplay.setMap(map); // Relacionamos o directionsDisplay com o mapa desejado
               
           // BUSCAR DETALHES DO AGENDAMENTO
           if(atendimento!="" && atendimento!=null && atendimento!="0"){
              
                    var image = {
                        url: 'https://servidorseguro.cloud/brooks/cdn/assets/images/icone-brooks.png',
                        //size: new google.maps.Size(40, 60),
                        //origin: new google.maps.Point(0,0),
                        //anchor: new google.maps.Point(40, 24)
                    };

                    var meulocal = {
                        url: 'https://servidorseguro.cloud/brooks/cdn/assets/images/local.png',
                        //size: new google.maps.Size(40, 60),
                        //origin: new google.maps.Point(0,0),
                        //anchor: new google.maps.Point(40, 24)
                    };
  
                    var imageAtendimentoACaminho = {
                      url: 'https://servidorseguro.cloud/brooks/cdn/assets/images/atendimento.png',
                      //size: new google.maps.Size(40, 60),
                      //origin: new google.maps.Point(0,0),
                      //anchor: new google.maps.Point(40, 24)
                    };
  
                    var imageAtendimentoPendente = {
                      url: 'https://servidorseguro.cloud/brooks/cdn/assets/images/atendimento-pendente.png',
                      //size: new google.maps.Size(40, 60),
                      //origin: new google.maps.Point(0,0),
                      //anchor: new google.maps.Point(40, 24)
                    };
  
                    var imageAtendimentoAndamento = {
                      url: 'https://servidorseguro.cloud/brooks/cdn/assets/images/atendimento-andamento.png',
                      //size: new google.maps.Size(40, 60),
                      //origin: new google.maps.Point(0,0),
                      //anchor: new google.maps.Point(40, 24)
                    };
  
                  console.log("VAMOS BUSCAR TODOS OS COLABORADORES PARA O TEMPO REAL: "+atendimento);
  
                  // CONFIGURAÇÕES AJAX VANILLA
                  let xhr = new XMLHttpRequest();
                  
                  xhr.open('POST', urlApi+'rastreio/?rastreio='+atendimento,true);
                  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  
                  var params = "{rastreio:'"+atendimento+"'}";
                  
                  // INICIO AJAX VANILLA
                  xhr.onreadystatechange = () => {
  
                  if(xhr.readyState == 4) {
  
                      if(xhr.status == 200) {
  
                          console.log("%c RETORNO DOS DADOS SOBRE O RASTREIO: ", "background: #222; color: #bada55");
                          console.log(xhr.responseText);
                          var rastreio = JSON.parse(xhr.responseText);
                          console.log(rastreio);
  
                          for(let i = 0; i < rastreio.dados.length; i++) {

                                          // PREENCHER HTML
                                          $("#nomeClienteAtendimento").html(rastreio.dados[i].cliente_nome);
                                          
  
                                          // CICLO
                                          var latlng2 = new google.maps.LatLng(rastreio.dados[i].lat, rastreio.dados[i].lon);
                                          var marker2 = new google.maps.Marker({
                                              icon: meulocal,
                                              position: latlng2,
                                              map: map,
                                          });

                                          // CENTRALIZAR O MAPA NO LOCAL DO ATENDIMENTO
                                          map.panTo(marker2.getPosition());

  
                                          google.maps.event.addListener(marker2,'click',function(){
                                              
                                              // CENTRALIZAR O MAPA NO LOCAL DO ATENDIMENTO
                                              map.panTo(marker2.getPosition());
                                              aviso("Esse é o local de atendimento","Nosso colaborador está indo para esse endereço realizar o atendimento.");
                                              
                                          });

                                          if(rastreio.dados[i].colaborador.length>0){

                                               $("#nomeColaboradorAtendimento").html(rastreio.dados[i].colaborador[0].nome);
                                               $("#carroPlacaColaboradorAtendimento").html(`${rastreio.dados[i].colaborador[0].modelo_carro} ${rastreio.dados[i].colaborador[0].placa}`);

                                               // CICLO
                                                var latlng3 = new google.maps.LatLng(rastreio.dados[i].colaborador[0].end_latitude, rastreio.dados[i].colaborador[0].end_longitude);
                                                var marker3 = new google.maps.Marker({
                                                    icon: image,
                                                    position: latlng3,
                                                    map: map,
                                                });

                                                google.maps.event.addListener(marker3,'click',function(){
                                                    
                                                    // CENTRALIZAR O MAPA NO LOCAL DO ATENDIMENTO
                                                    map.panTo(marker3.getPosition());
                                                    aviso("Esse é o colaborador BROOKS à caminho","Você está acompanhando em tempo real, o deslocamento do colaborador BROOKS.");
                                                    
                                                });

                                          }
  
                          }// FINAL DO FOR COLABORADORES
                          
                      }else{
                      
                          aviso("Erro ao buscar dados do atendiemnto","Tente novamente em alguns minutos");

                      }
  
                  }
              }; // FINAL AJAX VANILLA
  
              /* EXECUTA */
              xhr.send(params);

        } // FINAL IF ATENDIMENTO (SE PREENCHIDO)

}




        // APÓS O CLICK EM UM LOCAL, VAMOS APAGAR O MAPA, E FAZER APARECER A SELEÇÃO DO TIPO DE TREINO
        $("#destino").change(function(){

               // FAZER APARECER NA TELA A DIV PARA SALVAR O DESTINO
               console.log("DESTINO ESCOLHIDO");

               //var destinoEscolhido = $("#destino").val();

               //$("#mapa").fadeOut("250");
               //console.log("DESTINO ESCOLHIDO: "+destinoEscolhido);
               //localStorage.setItem("destinoViagemPrimario",destinoEscolhido);

               // ALIMENTAR SELEÇÃO
               //$("#enderecoDaSelecao").html('<li><a href="javascript:void(0)" title="Sugestão de endereço"><img src="images/sugestao.svg" alt="Sugestão de endereço"> '+destinoEscolhido+'</a></li>');


        });


        $("body .pac-container").click(function(){
          
          console.log("CLICOU NO PAC");

        });

        // CORREÇÃO PARA SELEÇÃO DO DESTINO ONMOBILE
        $(document).on({
            'DOMNodeInserted': function() {

                $('.pac-item, .pac-item span', this).addClass('no-fastclick');
                //$(".tepping-flex").fadeOut("250");
                //$(".caixa-sugestoes-treinos").fadeOut();
                console.log("PAC GOOGLE: ");

                $( ".pac-item, .pac-item" ).each(function( index ) {
                  if($(this).html()!=""){
                     $("#enderecoDaSelecao").append('<li><a href="javascript:void(0)" title="Sugestão de endereço" onclick="salvarEnderecoFinalmente(this)"><img src="assets/images/sugestao.svg" alt="Sugestão de endereço">'+$(this).html()+'</a></li>');
                  }
                });
                
                //var text = $('.pac-item, .pac-item').html();
                
                
                // TESTES FUNÇÕES DE ALIMENTAÇÃO DO PAC AUTO COMPLET DO GOOGLE
                //var destinoEscolhido = $("#destino").val();
                //console.log("DESTINO ESCOLHIDO: "+destinoEscolhido);
                //localStorage.setItem("destinoViagemPrimario",destinoEscolhido);

                // ALIMENTAR SELEÇÃO
                //$("#enderecoDaSelecao").html('<li><a href="javascript:void(0)" title="Sugestão de endereço"><img src="images/sugestao.svg" alt="Sugestão de endereço"> '+destinoEscolhido+'</a></li>');



            }
        }, '.pac-container');

        

function autoCompletarEndereco(param){
  
  $(".caixa-endereco-autocomplet").css("bottom","0px");
  localStorage.setItem("paramEndereco",param);

  var preEndereco = $("#destinoEndereco").val();

  $("#destino").val(preEndereco);
  $("#destino").focus();

  $("a.more-link").fadeOut(0);

}


function salvarEnderecoFinalmente(seletor){

           console.log("ESSE É O ENDEREÇO FINAL:");
           var enderecoFinal = $(seletor).html().replace('</span><span class="no-fastclick">'," ");
           enderecoFinal = enderecoFinal.replace(/(<([^>]+)>)/ig,"");
          
           console.log(enderecoFinal);
           $("#destino").val(enderecoFinal);
           localStorage.setItem("destinoViagemPrimario",enderecoFinal);

           $("a.more-link").fadeIn(500);

        }  
        function salvarEnderecoFinalmente2(endereco){

           console.log("ESSE É O ENDEREÇO FINAL:");
           var enderecoFinal = endereco;
          
           console.log(enderecoFinal);
           $("#destino").val(enderecoFinal);
           localStorage.setItem("destinoViagemPrimario",enderecoFinal);
          
           // O ENDEREÇO JÁ É UM FAVORITO, NÃO PRECISAMOS ADICIONA-LO NOVAMENTE
           //$("a.more-link").fadeIn(500);

        }


