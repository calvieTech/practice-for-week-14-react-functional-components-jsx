import Image from "./images/bulbasaur.jpg";

function Showcase() {
  const favPokemon = "Pikachu";
  const pokeCharacteristics = {
    type: "Electric",
    move: "Thunderbolt",
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{`${favPokemon}'s `}Showcase Component</h1>
      {/* {`${pokeCharacteristics}`} */}
      <img src={Image} width="200" height="200" alt={favPokemon} />
      <h2>
        {`${favPokemon}'s type is`}{" "}
        <span
          style={{ backgroundColor: "green" }}
        >{`${pokeCharacteristics.type}`}</span>{" "}
        and one of their moves is{" "}
        <span
          style={{ backgroundColor: "white", color: "green" }}
        >{`${pokeCharacteristics.move}`}</span>
      </h2>
    </div>
  );
}

export default Showcase;
