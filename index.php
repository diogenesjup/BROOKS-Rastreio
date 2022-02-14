<?php require("config.php"); ?>
<!--
#
#   DIOGENES OLIVEIRA DOS SANTOS JUNIOR
#   WWW.DIOGENESJUNIOR.COM.BR
#   CONTATO@DIOGENESJUNIOR.COM.BR
#
-->
<!DOCTYPE html>
<html lang="pt-br"><head>
<title>BROOKS Acompanhamento Colaborador</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover">
<meta name="theme-color" content="#19232D">

<link rel="stylesheet" type="text/css" href="<?php echo $dominio; ?>css/bootstrap.css" media="all" />
<link rel="stylesheet" type="text/css" href="<?php echo $dominio; ?>css/style.css" />
<link rel="stylesheet" type="text/css" href="<?php echo $dominio; ?>css/sweetalert2.min.css">
<!-- ICONES -->
<link rel="stylesheet" href="<?php echo $dominio; ?>css/font-awesome.min.css">

<!-- ANIMATE -->
<link rel="stylesheet" type="text/css" href="<?php echo $dominio; ?>css/animate.css">
<!-- DROPDOWN -->
<link href="<?php echo $dominio; ?>css/bootstrap-dropdownhover.css" rel="stylesheet">

<!-- OWL -->
<link rel="stylesheet" type="text/css" href="<?php echo $dominio; ?>css/owl.carousel.min.css">

</head>
<body>

<!-- HEADER -->
<header>
  <div class="container">
     <div class="row">
        <!-- LOGO -->
        <div class="col-12 logo">
            <a href="">
                <img src="<?php echo $dominio; ?>images/logo-horizontal.png" alt="BROOKS Logo">
            </a>
        </div>
        <!-- LOGO -->
     </div>
  </div>
</header>
<!-- HEADER -->

<!-- BODY -->
<section class="mapa-rastreio">
     <div id="mapa" class="mapa"></div>
     <div class="area-infos">
         <h1>
           Olá <b id="nomeClienteAtendimento">Atualizando...</b>,<br>
           Acompanhe no mapa o deslocamento do colaborador <b style="color:#d19c27">BROOKS</b> até o local do atendimento:
         </h1>
         <p>
           <b>Nome do colaborador:</b> <span id="nomeColaboradorAtendimento">Atualizando...</span><br>
           <b>Carro e placa:</b> <span id="carroPlacaColaboradorAtendimento">Atualizando...</span><br>
         </p>
         <!--<p>
           <b>
             Tempo de chegada:
           </b> 23 minutos
         </p>-->
     </div>

</section>
<!-- BODY -->


<!-- FOOTER -->
<footer>
  <div class="container">
    <div class="row">
      <!-- LOGO -->
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 logo">
          <a href="#" title="BROOKS LOGO">
              <img src="<?php echo $dominio; ?>images/logo-horizontal.png" alt="BROOKS Logo">
          </a>
      </div>
      <!-- LOGO -->
      <!-- LINK GOOGLE PLAY -->
      <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12 lojas-apps">
        <span>Você é um colaborador BROOKS?<br> Baixe o app de atendimento:</span>
        <a href="#" target="_blank" title="baixar o app na Google Play">
            <img src="<?php echo $dominio; ?>images/download-google-play-png-6.svg" alt="Google Play">
        </a>
    </div>
    <!-- LINK GOOGLE PLAY -->
   </div>
  </div>
</footer>
<!-- FOOTER -->


    <!-- AVISOS -->
    <div class="modal-avisos" id="swipeAviso">
    <div class="aviso">
        <h3></h3>
        <p></p>
    </div>
    </div>
    <!-- AVISOS -->

    <script type="text/javascript" src="<?php echo $dominio; ?>js/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="<?php echo $dominio; ?>js/tether.min.js"></script>
    <script type="text/javascript" src="<?php echo $dominio; ?>js/bootstrap.min.js"></script>
    <script type="text/javascript" src="<?php echo $dominio; ?>js/owl.carousel.min.js"></script>

    <!-- GOOGLE MAPS -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUGRiH2iey-c2WqqeegGF2qpxBDNLsmfQ&libraries=places&region=in"></script>
    <script>
        const urlDom = "<?php echo $dominio; ?>";
        const urlApi = "<?php echo $api; ?>";
        const atendimento = "<?php echo $atendimento; ?>";
    </script>

    <script type="text/javascript" src="<?php echo $dominio; ?>js/scripts.js"></script>
    <script type="text/javascript" src="<?php echo $dominio; ?>js/sweetalert2.min.js"></script>

    <script type="text/javascript" src="<?php echo $dominio; ?>js/wow.min.js"></script>
    <script>
         new WOW().init();
    </script>

    <!-- DROPDOWN HOVER -->
    <script src="<?php echo $dominio; ?>js/bootstrap-dropdownhover.js"></script>
    <!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</body>
</html>
