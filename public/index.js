
var modal = document.getElementById("create-movie-modal");
var modalBD = document.getElementById("modal-backdrop");
var createButton = document.getElementById("create-movie-button");
var movieUser = document.getElementById("movie-user-input");
var movieText = document.getElementById("movie-text-input");
var movieAuthor = document.getElementById("movie-attribution-input");

var movieInput = document.getElementById("navbar-search-input");
var movieSearch = document.getElementById("navbar-search-button");
var modalCancel  = document.getElementsByClassName("modal-cancel-button")[0];
var modalClose = document.getElementsByClassName("modal-close-button")[0];
var modalAccept = document.getElementsByClassName("modal-accept-button")[0];

createButton.addEventListener('click', modalFunc);
modalCancel.addEventListener('click', modalFunc);
modalClose.addEventListener('click', modalFunc);
modalAccept.addEventListener('click', movieFunc);
movieSearch.addEventListener('click', search);
movieInput.addEventListener('keyup', search);

function search(event) {

    var movies = document.getElementsByClassName('movie');

    for (i = 0; i < 8; i++) {

        if ((movies[i].childNodes[3].childNodes[1].textContent.includes(movieInput.value)) || 
            (movies[i].childNodes[3].childNodes[3].textContent.includes(movieInput.value))) {

                movies[i].classList.remove('hidden');
                continue;
        }

        else {
                movies[i].classList.add('hidden');
        }
    }

    if (movies.length > 8) {

            for (i = 8; i < movies.length; i++) {

                if ((movies[i].childNodes[1].childNodes[0].textContent.includes(movieInput.value)) || 
                    (movies[i].childNodes[1].childNodes[1].textContent.includes(movieInput.value))) {

                        movies[i].classList.remove('hidden');
                        continue;
                }

                else {
                        movies[i].classList.add('hidden');
                }
            }
    }
    
}

function modalFunc(event) {

  if (modal.classList.contains("hidden")) {

       movieText.value = "";
       movieAuthor.value = "";
       movieUser.value = "";
       modal.classList.remove('hidden');
       modalBD.classList.remove('hidden');

  }

  else {

       modal.classList.add('hidden');
       modalBD.classList.add('hidden');

  }

}

function movieFunc(event) {

  if ((movieText.value == "") || (movieAuthor.value == "") || (movieUser.value == "")) {

        alert("One or more Boxes empty, cannot create user review.")
        return;

  }

	  var icon = document.createElement('i');
	  var movieIcon = document.createElement('div');
	  var text = document.createElement('p');
	  var author = document.createElement('p');
	  var user = document.createElement('h3');
	  var attribution = document.createElement('p');
	  var movieContent = document.createElement('div');
	  var movie = document.createElement('article');
	  var body = document.getElementsByClassName('movie-container')[0];
	
	  movieContent.classList.add("movie-content");
	  movieContent.appendChild(text);
	  movieContent.appendChild(user);
	  movieContent.appendChild(attribution);
	  movieContent.appendChild(text);
	
	
	  user.classList.add('movie-text');
	  user.textContent = movieUser.value;
	
	  text.classList.add('movie-text');
	  text.textContent = movieText.value;
	
	
	  author.href = '#';
	  author.textContent = movieAuthor.value;
	
  
    
  attribution.classList.add('movie-attribution');
  attribution.appendChild(author);

  
  movie.classList.add('movie');
  movie.appendChild(movieIcon);
  movie.appendChild(movieContent);
  

  body.appendChild(movie);

  modalFunc();
}
