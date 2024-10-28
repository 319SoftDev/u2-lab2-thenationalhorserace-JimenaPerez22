<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css">
    <title>Horse Race</title>
  </head>
  <body>
    <div class="container">
      <h1>The National Horse Race</h1>

      <button id="steps-Button">Steps</button>
        <div id="steps"></div>

      <button id="color-Button">Color</button>
      <div id="chosen-horse"></div>

      <div class="section">
        <div class="horse">
          <button id="blue-button" value="blue" aria-label="Advance blue horse">Run!</button>
          <div class="track"><img id="blue-horse" src="img/blue.png" arial-live="polite" arial-atomic="true" alt="blue horse at postion 1 out of 5" /></div>
        </div>
        <div class="horse">
          <button id="pink-button" value="pink" aria-label="Advance pink horse">Run!</button>
          <div class="track"><img id="pink-horse" src="img/pink.jpg" arial-live="polite" arial-atomic="true" alt="pink horse at position 1 out of 5" /></div>
        </div>
        <div class="horse">
          <button id="brown-button" value="brown" aria-label="Advance brown horse">Run!</button>
          <div class="track"><img id="brown-horse" src="img/brown.png" arial-live="polite" arial-atomic="true" alt="brown horse at position 1 out of 5" /></div>
        </div>
      </div>

      <br>

      <button id="restart-button" value="restart">Restart Game</button>

      <div id="winner"></div>
    </div>

    <script src="script.js"></script>
  </body>
</html>


    <script src="script.js"></script>
  </body>
</html>
