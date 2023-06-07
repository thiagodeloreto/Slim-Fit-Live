// Script Carrossel
document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;
  
    function showSlide(index) {
      slides[currentSlide].classList.remove("active");
      slides[index].classList.add("active");
      currentSlide = index;
    }
  
    function nextSlide() {
      var nextIndex = currentSlide + 1;
      if (nextIndex >= slides.length) {
        nextIndex = 0;
      }
      showSlide(nextIndex);
    }
  
    setInterval(nextSlide, 3000);
  });

//   Evento na navbar
  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navigation');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


// Script IMC
function calcularIMC() {
  var alturaInput = document.querySelector('.altura_input');
  var pesoInput = document.querySelector('.peso_input');
  var resultadoParagrafo = document.querySelector('.resultado');

  var altura = parseFloat(alturaInput.value);
  var peso = parseFloat(pesoInput.value);

  if (isNaN(altura) || isNaN(peso)) {
    resultadoParagrafo.innerHTML = 'Por favor, insira valores numéricos válidos.';
    return;
  }

  var imc = peso / ((altura / 100) ** 2);

  var mensagem = '';

  if (imc < 18.5) {
    mensagem = 'Abaixo do peso! <br><br> Seu resultado indica que você está abaixo do peso ideal de acordo com o seu Índice de Massa Corporal (IMC). Isso significa que você pode estar enfrentando desafios relacionados à nutrição e à saúde em geral. <br><br>A Slim Fit Life oferece soluções personalizadas de coaching esportivo e programas de alimentação balanceada, projetados para ajudá-lo a ganhar peso de forma saudável. <br><br>Nossos especialistas em saúde e condicionamento físico podem orientá-lo com um plano individualizado, focado no aumento de massa muscular e no fortalecimento do seu corpo. ';
  } else if (imc >= 18.5 && imc < 25) {
    mensagem = 'Peso normal!<br><br>Parabéns! Seu resultado indica que você está dentro do intervalo considerado "peso normal" de acordo com o seu Índice de Massa Corporal (IMC).<br><br> No entanto, manter um estilo de vida saudável e ativo é fundamental para garantir o bem-estar a longo prazo.<br><br> A Slim Fit Life pode ajudá-lo a alcançar seus objetivos de condicionamento físico, oferecendo serviços de coaching esportivo personalizado, treinamentos específicos e planos nutricionais balanceados. Nossa equipe de profissionais está pronta para ajudá-lo a manter-se no caminho certo para uma vida saudável e equilibrada. ';
  } else if (imc >= 25 && imc < 30) {
    mensagem = 'Sobrepeso!<br><br> Seu resultado indica que você está enfrentando desafios relacionados ao sobrepeso de acordo com o seu Índice de Massa Corporal (IMC). O sobrepeso pode ter impactos negativos na sua saúde geral e bem-estar. <br><br>No entanto, com as soluções personalizadas de coaching esportivo da Slim Fit Life, você pode iniciar sua jornada rumo a um peso saudável. Nossa equipe de especialistas em condicionamento físico e nutrição criará um programa personalizado para ajudá-lo a perder peso, ganhar energia e melhorar sua saúde.<br><br> Com treinamentos específicos e orientações nutricionais adequadas, estaremos ao seu lado para ajudá-lo a alcançar seus objetivos de maneira segura e sustentável.';
  } else {
    mensagem = 'Obesidade! <br><br> Seu resultado indica que você está enfrentando desafios relacionados à obesidade de acordo com o seu Índice de Massa Corporal (IMC). A obesidade pode ter impactos significativos na sua saúde e aumentar os riscos de várias doenças.<br><br> Na Slim Fit Life, entendemos a importância de abordar a obesidade de maneira abrangente e personalizada. Nossos programas de coaching esportivo são projetados para ajudá-lo a alcançar uma perda de peso saudável e duradoura.<br><br> Com uma combinação de treinamentos físicos eficazes, planos alimentares equilibrados e suporte contínuo, nossa equipe de especialistas trabalhará com você para melhorar sua saúde, aumentar sua confiança e promover mudanças positivas em sua vida.';
  }

  resultadoParagrafo.innerHTML = 'Seu IMC é ' + imc.toFixed(2) + ':<br><br> ' + mensagem;
}