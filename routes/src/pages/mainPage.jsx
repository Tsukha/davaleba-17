import React from "react";

function MainPage() {
  return (
    <div className="main-container">
      <div className="character-card">
        <div className="character-image-container">
          <img
            src="https://cdn.britannica.com/04/84704-050-7E762815/Basil-Rathbone-movies-Arthur-Conan-Doyle-one.jpg"
            alt="Sherlock Holmes"
            className="character-image"
          />
        </div>
        <div className="character-name">
          <h1>Sherlock Holmes</h1>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
