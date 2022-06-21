(function(window) {
    function gerRequestObject() {
      if(XMLHttpRequest) {
        return new XMLHttpRequest();
      } else {
        window.alert('AJAX is not supported');
        return null;
      }
    }

    function whatToDo(request, func, isJson){
      if(request.readyState == 4 && request.status == 200) {
        if(isJson == undefined || isJson) {
          func(JSON.parse(request.responseText));
        } else {
          func(request.responseText)
        }
      }
    };

    window.$ajax = {
      makeRequest: (url, func, isJson) => {
        const request = gerRequestObject();
        request.onreadystatechange = () => whatToDo(request, func, isJson);
        request.open('GET', url, true);
        request.send(null);
      },
    };

})(window);