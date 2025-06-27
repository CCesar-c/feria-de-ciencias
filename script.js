  var timing = 0;

  var infomacion = document.getElementById("pop-up")

  var contador = document.getElementById("contador")
  
  var comenzar = Boolean();
  
  var a = document.getElementById("bton");
  a.addEventListener("click", () =>{
    setTimeout(() => {
      document.querySelector(".unable").classList.remove("unable")
      a.remove();
    }, 1000);
    comenzar = true
  })
  if(localStorage.getItem("tiempo") != null){
    alert(localStorage.getItem("tiempo"))
  }
  document.addEventListener("click", () => {
    // ponerle color
    document.addEventListener('mousemove', function (e) {
      infomacion.style.left = e.pageX + "px";
      infomacion.style.top = e.pageY + "px";
    });
    let nose = Array.from(document.querySelectorAll(".matched"))
    nose.forEach(clase =>{ 
    clase.addEventListener("mouseout", () =>{

      infomacion.classList.remove("activada")
      infomacion.classList.add("desactivada")
    })
    if (nose.length == 14) {
      let bton_reiniciar = document.createElement("button");
      bton_reiniciar.addEventListener("click", () => {
        location.reload();
      })
      bton_reiniciar.type = "button";
      bton_reiniciar.innerText = "Reiniciar";
      document.body.appendChild(bton_reiniciar);
    }

    clase.addEventListener("mouseover", () =>{

      infomacion.classList.remove("desactivada")
      infomacion.classList.add("activada")

      clase.querySelectorAll("img").forEach(img => {
        switch (img.src) {
          case "file:///C:/Users/narki/Downloads/feria-de-ciencias-main/feria-de-ciencias-main/img1.png":
            infomacion.innerText = " Plástico normal (como o PET): podem permanecer entre 100 y 1,000 anos antes de degradarse."
            break;
          case "file:///C:/Users/narki/Downloads/feria-de-ciencias-main/feria-de-ciencias-main/img2.png":
            infomacion.innerText = " Eliminar objetos perigosos como vidros quebrados, bitucas de cigarro ou produtos químicos reduz o risco de acidentes e infecções para os frequentadores da praia."
            break;
          case "file:///C:/Users/narki/Downloads/feria-de-ciencias-main/feria-de-ciencias-main/img3.png":
            infomacion.innerText = " Reutilizar garrafas e potes plásticos ajuda a diminuir o volume de lixo descartado."
            break;
          case "file:///C:/Users/narki/Downloads/feria-de-ciencias-main/feria-de-ciencias-main/img4.png":
            infomacion.innerText = " Você pode pintar, cortar e decorar os recipientes como quiser, criando peças únicas."
            break;
          case "file:///C:/Users/narki/Downloads/feria-de-ciencias-main/feria-de-ciencias-main/img5.png":
            infomacion.innerText = " Todo plástico deixado na areia pode se degradar e liberar microplásticos, poluindo o oceano e afetando a cadeia alimentar."
            break;
          case "file:///C:/Users/narki/Downloads/feria-de-ciencias-main/feria-de-ciencias-main/img6.png":
            infomacion.innerText = " Remover resíduos ajuda a evitar que animais fiquem presos ou ingiram lixo, o que pode causar ferimentos ou morte."
            break;
          case "file:///C:/Users/narki/Downloads/feria-de-ciencias-main/feria-de-ciencias-main/img7.png":
            infomacion.innerText = " A natureza não é lixeira — cada escolha deixa raízes, Colabora com a limpeza do planeta que também é tua casa. "
            break;
        }
      })
    })});
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
      localStorage.setItem("tiempo",timing)
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
