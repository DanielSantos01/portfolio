document.addEventListener('DOMContentLoaded', function(event){


    let currentSet = 'li-profile';

    //página inicial - automática
    alternateMainContent('snippets/profile-snippet.html', 'li-profile');

    //pagina inicial - onclick
    document.querySelector('#profile').addEventListener('click', function(event){
        checkPage('li-profile');
        alternateMainContent('snippets/profile-snippet.html', 'li-profile');
    });

    //brand - onclick
    document.querySelector('#brand').addEventListener('click', function(event){
        checkPage('li-profile');
        alternateMainContent('snippets/profile-snippet.html', 'li-profile');
    });

    //logo onclick
    document.querySelector('#logo-link').addEventListener('click', function(event){
        checkPage('li-profile');
        alternateMainContent('snippets/profile-snippet.html', 'li-profile');
    });

    //página de carreira - onlclick
    document.querySelector('#career').addEventListener('click', function(event){
        checkPage('li-career');
        alternateMainContent('snippets/career-snippet.html', 'li-career');
    });

    //página de feitos - onclick
    document.querySelector('#done').addEventListener('click', function(event){
        checkPage('li-done');
        alternateMainContent('snippets/done-snippet.html', 'li-done');
    });

    //alterna a visualização do conteúdo principal
    function alternateMainContent(url, newSet){
        $ajax.makeRequest(url, function(response){
            document.querySelector('#main-content').innerHTML = response;

            if(newSet != undefined){
                alternateSet(newSet);
            }
        }, false);
    };

    //alterna a visualização da página que está setada no menu
    function alternateSet(elementToSet){
        document.getElementById(currentSet).classList.remove('set');
        document.getElementById(elementToSet).classList.add('set');
        currentSet = elementToSet;
    };


    //mostra um sutil anúncio na tela caso o usuário tente ir para uma página que ele já está
    function checkPage(currentPage){
        let tabName = 'Daniel N. Santos - ';

        //verifica se o usuário está tentando ir para a mesma página que ele está
        if(currentSet === currentPage){
            let msg = 'olá... você está visualizando ';

            if(currentPage === 'li-profile'){
                msg += 'o perfil :)';

            }else if(currentPage === 'li-done'){
                msg += 'os Feitos :)';

            }else{
                msg += 'a Carreira :)';

            }
            document.getElementById('msg').textContent = msg;
            document.getElementById('msg').style.display = 'block';

        }else{
            document.getElementById('msg').style.display = 'none';
        }

        if(currentPage === 'li-profile'){
            tabName += 'Perfil';

        }else if(currentPage === 'li-done'){
            tabName += 'Feitos';

        }else{
            tabName += 'Carreira';

        }

        //atualiza o título da página
        document.getElementById('titulo').textContent = tabName;
    };

    //faz com que o menu do botão se recolha quando ele perder o foco
    document.querySelector('#btn').addEventListener('blur', function(event){
        let screenWidth = innerWidth;
        if(screenWidth < 768){
            //$ é semelhante ao querySelector, mas usando pelo jQuery
            $('#collapsable-nav').collapse('hide');
        }
    });

});
