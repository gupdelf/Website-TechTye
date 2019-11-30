//
//					█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
//			     	 !	 Declaração Functions de [SCROLL] 	!
//					█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█


window.onscroll = function() {StickyMenu(),Barra(),Containers()};


//					█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
//			    	 !	 [SCROLL] Animação Do Menu 	 !
//					█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
//
//	1. A tela, sem nenhuma alterãção no scroll, ficará com o menumaior e não haverá separação visual com
//		containers de baixo.
//	2. Ao dar scroll para baixo, quando chegar em um certo ponto, o menuMenor irá aparecer, e o menuMaior 
//		irá sumir.
//	4. Ao descer a página, faltando alguns scrolls para chegar no footer, o menuMenor vai aparecer novamente.
//	5. Se der pelo menos 1 scroll pra cima o menuMenor aparececerá.
//	6. Se der pelo menos 1 scroll pra baixo o menuMenor sumirá.
//
//
//	!!!! Apenas quando a página estiver encostada no topo, o menuMaior vai aparecer !!!!


var menu = document.getElementById("menu");
var sticky = menu.offsetTop;

function StickyMenu() 
{
    if (window.pageYOffset >= sticky) 
	{
		menu.classList.add("sticky");
		menu.classList.remove("encostado")
		menu.classList.add("normal");
    } 
   
		else 
		{
			menu.classList.remove("sticky");
			menu.classList.add("encostado")
			menu.classList.remove("normal");
		}		
}


//					█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
//			   		 !	   [SCROLL] Animação Barra de carregamento 	  !
//					█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
//
//	1. Fica acima da header uma linha horizontal de width 100%
//	2. A linha vai "aumentando" a porcentagem conforme a página é "scrollada"
//	3. Descer o scroll aumenta a porcentagem da linha.
// 	4. Subir o scroll abaixa a porcentagem da linha.
//	5. A linha terá uma porcentagem inicial quando a tela carregar.










//					█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
//			     	 !	   [SCROLL] Animação Containers da página 	  !
//					█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
//
//	1. Ao descer o scroll, os contents dos containers surgirá de um dos lados.
//	2. Acontecerá a animação apenas uma vez.
//	3. Subir a página e voltar, não afeta a animação.
