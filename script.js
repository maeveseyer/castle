const movies = [
    {
      title: "Inception",
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy", "Ken Watanabe", "Cillian Murphy", "Marion Cotillard", "Michael Caine"]
    },
    {
      title: "The Matrix",
      cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving", "Joe Pantoliano", "Gloria Foster", "Marcus Chong", "Paul Goddard"]
    },
    // Add more movies and casts here
  ];
  
  let currentMovie = movies[Math.floor(Math.random() * movies.length)];
  let hintIndex = 0;
  
  const hintContainer = document.getElementById("hint-container");
  const guessInput = document.getElementById("guess");
  const resultDiv = document.getElementById("result");
  
  document.getElementById("get-hint").addEventListener("click", () => {
    if (hintIndex < currentMovie.cast.length) {
      const hint = document.createElement("div");
      hint.textContent = `Hint ${hintIndex + 1}: ${currentMovie.cast[hintIndex]}`;
      hint.className = "hint";
      hintContainer.appendChild(hint);
      hintIndex++;
    } else {
      alert("No more hints available!");
    }
  });
  
  document.getElementById("submit-guess").addEventListener("click", () => {
    const userGuess = guessInput.value.trim().toLowerCase();
    if (userGuess === currentMovie.title.toLowerCase()) {
      resultDiv.textContent = "🎉 Correct! You guessed the movie!";
    } else {
      resultDiv.textContent = "❌ Wrong guess. Try again!";
    }
  });