document.addEventListener('DOMContentLoaded', function(_event) {
    const tabs = $data.tabs;
    const ids = $data.ids;
    let currentSet = tabs.profile;

    alternateMainContent('snippets/profile-snippet.html', tabs.profile);
    document.querySelector('#year').innerHTML = new Date().getFullYear();

    document.querySelector(ids.profile).addEventListener('click', (_event) => {
      if(!canGoTo(tabs.profile)) return;
      alternateMainContent('snippets/profile-snippet.html', tabs.profile);
    });

    document.querySelector(ids.brand).addEventListener('click', (_event) => {
      if(!canGoTo(tabs.profile)) return;
      alternateMainContent('snippets/profile-snippet.html', tabs.profile);
    });

    document.querySelector(ids.logo).addEventListener('click', (_event) => {
      if(!canGoTo(tabs.profile)) return;
      alternateMainContent('snippets/profile-snippet.html', tabs.profile);
    });

    document.querySelector(ids.career).addEventListener('click', (_event) => {
      if(!canGoTo(tabs.career)) return;
      alternateMainContent('snippets/career-snippet.html', tabs.career);
    });

    document.querySelector(ids.done).addEventListener('click', (_event) => {
      if(!canGoTo(tabs.done)) return;
      alternateMainContent('snippets/done-snippet.html', tabs.done);
    });

    function alternateMainContent(url, newSet) {
      $ajax.makeRequest(
        url,
        function(response) {
          document.querySelector('#main-content').innerHTML = response;
          if(newSet) alternateSet(newSet);
        },
        false,
      );
    };

    function alternateSet(elementToSet) {
      document.getElementById(currentSet).classList.remove('set');
      document.getElementById(elementToSet).classList.add('set');
      currentSet = elementToSet;
    };

    function canGoTo(currentPage) {
      if(currentSet === currentPage) return false;
      let tabName = 'Daniel N. Santos - ';

      if(currentPage === 'li-profile') tabName += 'Perfil';
      else if(currentPage === 'li-done') tabName += 'Feitos';
      else tabName += 'Carreira';

      document.getElementById('titulo').textContent = tabName;
      return true;
    };

    //faz com que o menu do botão se recolha quando ele perder o foco
    document.querySelector('#btn').addEventListener(
      'blur',
      function(_event) {
        let screenWidth = innerWidth;
        if(screenWidth < 768) {
          //$ é semelhante ao querySelector, mas usando pelo jQuery
          $('#collapsable-nav').collapse('hide');
        }
      },
    );

});
