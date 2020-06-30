(function(window){

    let ajax = {};

    function gerRequestObject(){
        if(XMLHttpRequest){
            return(new XMLHttpRequest());
        }else{
            window.alert('AJAX is not supported :(');
            return(null);
        }
    }

    ajax.makeRequest = function(url, func, isJson){
        let request = gerRequestObject();
        request.onreadystatechange = function(){
            whatToDo(request, func, isJson);
        }

        request.open('GET', url, true);
        request.send(null);
    };

    function whatToDo(request, func, isJson){
        if(request.readyState == 4 && request.status == 200){
            if(isJson == undefined){
                isJson = true;
            }

            if(isJson){
                func(JSON.parse(request.responseText));
            }else{
                func(request.responseText)
            }
        }
    };

    window.$ajax = ajax;

})(window);