fetch("https://evertofd.github.io/API/lol.json")
  .then((response) => response.json())
  .then((result) => {
    let personajes = result.data;
    let contenedor = document.getElementById("card_lol");
    console.log(personajes);
    let tarjetas = "";
    for (let personaje in personajes) {
      tarjetas += `
            <div class="col-md-3 col-sm-12 m-5">
                <div class="card">
                    <img src="${personajes[personaje].img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${personajes[personaje].title}</h5>
                      <p class="card-text">${personajes[personaje].blurb}</p>
                    </div>
                    <div class="card-back">
                        <h5>armorperlevel: ${personajes[personaje].stats.armorperlevel}</h5>
                        <h5>attackdamage: ${personajes[personaje].stats.attackdamage}</h5>
                        <h5>attackdamageperlevel: ${personajes[personaje].stats.attackdamageperlevel}</h5>
                        <h5>attackrange: ${personajes[personaje].stats.attackrange}</h5>
                        <h5>attackspeedoffset: ${personajes[personaje].stats.attackspeedoffset}</h5>
                        <h5>attackspeedperlevel${personajes[personaje].stats.attackspeedperlevel}</h5>
                    </div>
                </div>
                
            </div>
        `;
    }
    contenedor.innerHTML = tarjetas;
  })
  .catch((error) => console.log(error));
