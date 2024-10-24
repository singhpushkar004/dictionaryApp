
// const wrd = [
//     {name:"Apple",mean:"Seve"},
//     {name:"Banana",mean:"kela"},
//     {name:"Guava",mean:"amrod"},
//     {name:"orange",mean:"santra"},
//     {name:"Dog",mean:"Kutta"},
//     {name:"Deer",mean:"Hiran"}

// ]
// function search(){
//     // alert('hello')
//    let a = document.getElementById('word').value.toLowerCase();
//    if(a.trim()=="")
//    {
//     alert('Please Enter The Text')
//    }
//    wrd.forEach((meaning) => {
//         if(meaning.name.toLocaleLowerCase()==a)
//         {
//             // console.log(meaning.mean);
//             document.getElementById('meaning').innerHTML=meaning.mean;
            
//         }
//    });

// }
function search() {
  let word = document.getElementById('word').value.toLowerCase();

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Word not found');
      }
      return response.json();
    })
    .then(data => {
      let definition = data[0].meanings[0].definitions[0].definition;
      document.getElementById('meaning').innerHTML = `<h2>${word}</h2><p>${definition}</p>`;
    })
    .catch(error => {
      document.getElementById('meaning').innerHTML = `<p>${error.message}</p>`;
    });
}



