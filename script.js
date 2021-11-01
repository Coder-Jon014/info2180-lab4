window.onload = function(){
    var searchButton = document.querySelector('#searchButton');
    var httpsRequest;

    searchButton.addEventListener('click',function(elements){
        elements.preventDefault();

        httpsRequest = new XMLHttpRequest();
        var searchBar = document.querySelector('#searchBar').value;

        var url = "superheroes.php?query=";
        httpsRequest.onreadystatechange = superHeroes;
        httpsRequest.open('GET', url+searchBar, true);
        httpsRequest.send();
        console.log(searchBar);
    });

    function superHeroes(){
        if(httpsRequest.readyState === XMLHttpRequest.DONE){
            if(httpsRequest.status === 200){
                var response = httpsRequest.responseText;
                console.log(response);
                var superhero = document.querySelector('#superheroes');
                superhero.innerHTML = response;
            }else{
                alert("There was a problem")
            }
        }
    }
};