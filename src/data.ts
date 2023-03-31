export async function getData() {
  try{
    const HP = []
    for (let index = 1; index < 2; index++) {
      const person = await(await fetch("https://harry-potter-api.onrender.com/personajes/"+index)).json();
      HP.push(person);
    }
    return HP
  }
  catch(error)
  {
    console.log(error);
  }  
}
