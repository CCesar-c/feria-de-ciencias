  var timing = 0;
  
  var contador = document.getElementById("contador")
  
  var comenzar = Boolean();
  
  var comenzar = document.getElementById("bton").addEventListener("click", () =>{
    setTimeout(() => {
      document.querySelector(".unable").classList.remove("unable")
    }, 1000);
    comenzar = true
  })

  document.addEventListener("click", () => {
    // ponerle color
    let nose = Array.from(document.querySelectorAll(".matched"))
    
    if (nose.length >= 14) {
      comenzar = false;
    }
    nose.forEach(elemento =>{
      let valor = elemento.querySelector(".face.back")
      if (valor != null) {
        valor.classList.add("color");
      }
    });

  })

  setInterval(() => {
    if (comenzar) {
      timing += 1;
      contador.innerText = "Tempo: " + timing;
    }
  }, 1000);

  function inicio() {
    const cartas = document.querySelectorAll("img");
    const baseImages = ["img1.png","img2.png","img3.png","img4.png",
  "img5.png","img6.png","img7.png"];

    const images = [ ...baseImages, ...baseImages]; 
    const mezcladas = images.sort(() => Math.random() - 0.5);

    cartas.forEach((img, i) => {
      img.src = mezcladas[i];
    });
  }

  function verificar() {
  // ver si son pares o no ponerle matched o darle la vuelta;
  const flipadasCards = Array.from(document.querySelectorAll(".card.flipped:not(.matched)"));
  if (flipadasCards.length === 2) {
    const imgs = flipadasCards.map(carta =>
      carta.querySelector(".back img")
    );

    if (imgs[0].src === imgs[1].src) {
      flipadasCards.forEach(carta => carta.classList.add("matched"));

    } else {
      setTimeout(() => {
        flipadasCards.forEach(carta => carta.classList.remove("flipped"));
      }, 1000);

    }
  }
}

function llamarAnim(carta) {
  if (carta.classList.contains("flipped") || carta.classList.contains("matched")) return;

  const flipadasActivas = document.querySelectorAll(".card.flipped:not(.matched)");
  if (flipadasActivas.length >= 2) return;

  carta.classList.add("flipped");
  verificar();
}

inicio();
