window.onload = function(){
    var searchButton = document.querySelector('#searchButton');
    var httpsRequest;

    searchButton.addEventListener('click',function(elements){
        elements.preventDefault();

        httpsRequest = new XMLHttpRequest();

        var url = "superheroes.php";
        httpsRequest.onreadystatechange = superHeroes;
        httpsRequest.open('GET', url);
        httpsRequest.send();
    });

    function superHeroes(){
        if(httpsRequest.readyState === XMLHttpRequest.DONE){
            if(httpsRequest.status === 200){
                var response = httpsRequest.responseText;
                var superhero = document.querySelector('#superheroes');
                superhero.innerHTML = response;
                alert(response);
            }else{
                alert("There was a problem")
            }
        }
    }
};