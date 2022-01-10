//cambiato nella key image il valore di tutti aggiungendo /img sennò non funzionavano le img
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'img/angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'img/walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'img/scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'img/barbara-ramos-graphic-designer.jpg',
    },
];
//dichiaro variabile che si attacca al teamcontainer
const teamContainer = document.querySelector('.team-container');
//per ogni elemento del nostro array
function createCard(){
  for(let i=0; i<team.length;i++){
    //creo un div classe teamcard che appendo al container
    const teamCard = document.createElement('div');
    teamCard.className='team-card';
    teamContainer.append(teamCard);
    //creo un div classe cardImg che appendo al teamcard
    const cardImage = document.createElement('div');
    cardImage.className='card-image';
    teamCard.append(cardImage);
    // un tag img appeso al div cardImg
    const img=document.createElement('img');
    cardImage.append(img);
    //un div cardText appeso al div class team card
    const cardText = document.createElement('div');
    cardText.className='card-text';
    teamCard.append(cardText);
    //cambio attributi al tag img 
    img.setAttribute("alt",team[i].name);
    //cambio src al tag img
    img.src=team[i].image;
    //inserisco nell'htm nel div cardtext i nomi e i ruoli delle card
    cardText.innerHTML=`<h3>${team[i].name}</h3><p>${team[i].role}</p>`
  
  }
}
createCard(); //creo card
const button = document.getElementById('addMemberButton');

button.addEventListener('click',function(){
  //creo un nuovo oggetto member
  let member ={
    name: document.getElementById('name').value,
    role: document.getElementById('role').value,
    image: document.getElementById('image').value,
  };
  //pulisco il container
  teamContainer.innerHTML='';
  console.log(member);
  //pusho a team il nuovo oggetto member
  team.push(member);
  createCard()//richiamo function creazione card
})






  
