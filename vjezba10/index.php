<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>PZI - Vježba 10</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles/font-awesome.min.css"/>
    <link rel="stylesheet" href="styles/style.css"/>
    <template id='card-template'>
      <article class='card' data-card-id=''>
        <i class='fa fa-times delete-button clickable-icon'></i>
        <img src='' alt=''/>
        <h3><span class='card-title-label'></span> <i class='fa fa-heart-o heart-icon clickable-icon'></i></h3>
        <p></p>
        <i class='fa fa-plus add-paragraph-icon clickable-icon'></i>
      </article>
    </template>
  </head>
  <body>
    
    <header>
      <span>Vježba 10</span>
      <span>PZI</span>
      <div id="search-container">
        <i class="fa fa-search search-icon"></i>
        <input type="text" id="search-box" placeholder="search"/>
      </div>
    </header>

    <main>
      <nav>
        <div class="logo-container">
          <img src="images/fesb-logo.png"/>
        </div>
        <div class="links-container">
            <a href="">Vj 7</a>
            <a href="">Vj 8</a>
            <a href="">Vj 9</a>
            <a href="" class="selected">Vj 10</a>
        </div>
      </nav>
      <div id="slider">
        <div id="slider-main-picture-container">
            <i class="fa fa-chevron-left slider-arrow-left slider-arrow" aria-hidden="true"></i>  
            <img alt="picture" src="images/cetina.jpg"/>
            <i class="fa fa-chevron-right slider-arrow-right slider-arrow" aria-hidden="true"></i>
        </div>
        <div id="slider-thumbnails-container">
          <div class="thumbnail selected" data-large-img-url="images/cetina.jpg">
            <img src="images/thumbnails/cetina.jpg" alt="cetina"/>
          </div>
          <div class="thumbnail" data-large-img-url="images/kozjak.jpg">
            <img src="images/thumbnails/kozjak.jpg" alt="kozjak"/>
          </div>
          <div class="thumbnail" data-large-img-url="images/sibenik.jpg">
            <img src="images/thumbnails/sibenik.jpg" alt="katedrala"/>
          </div>
          <div class="thumbnail" data-large-img-url="images/primosten.jpg">
            <img src="images/thumbnails/primosten.jpg" alt="primosten"/>
          </div>
          <div class="thumbnail" data-large-img-url="images/svilaja.jpg">
            <img src="images/thumbnails/svilaja.jpg" alt="svilaja"/>
          </div>
        </div>
      </div>
      
      <h1>Vježba 10 - php </h1>
	  <button id="add-card-button">Dodaj novu karticu</button>
      <div id="cards-container">
        <?php 
          require_once("php/cards.php");
          echo(generateCardsHtml());
        ?>
      </div>
    </main>

    <footer>
      Copyright Nina Rađa @FESB 2021 PZI
    </footer>
    <script src="scripts/slider.js"></script>
    <script src="scripts/cards.js"></script>
  </body>
</html>
