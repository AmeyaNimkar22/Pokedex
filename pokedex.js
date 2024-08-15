/**fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
 .then(response => response.json())
 .then(data => console.log(data))
 .catch(error => console.error(error));**/

 const pname=document.getElementById("name");
 const height=document.getElementById("height");
 const weight=document.getElementById("weight");
 const pokemonSprite=document.getElementById("pokemonSprite");
 const id=document.getElementById("id");
 const type=document.getElementById("type");
 const hp=document.getElementById("hp");
 const attack=document.getElementById("attack");
 const defense=document.getElementById("defense");
 const specialAttack=document.getElementById("special-attack");
 async function searchPokemon(){
    const pokemon=document.getElementById("pokemon").value.toLowerCase();
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(!response.ok){
        throw new Error("Could not");
    }
    else{
        const data=await response.json();
        pname.textContent=`${data.name}`;
        height.textContent=` ${data.id}`;
        weight.textContent=`${data.weight}`;
        id.textContent=`${data.id}`;
        const pkImg=data.sprites.front_default;
        pokemonSprite.src=pkImg;
        pokemonSprite.style.display="block";
        type.textContent=`${data.types.map(typeInfo => typeInfo.type.name).join(', ')}`;
        hp.textContent=`${data.stats[0].base_stat}`;
        attack.textContent=`${data.stats[1].base_stat}`;
        defense.textContent=`${data.stats[2].base_stat}`;
        specialAttack.textContent=`${data.stats[3].base_stat}`;

    }


  
 }