'use strict'
const paragraph = document.getElementById('rending')
let Ingredients=[];
let Preparation=[];
function Recipes(userRecipes, userStory, userServing, userTime, userPerfectBreak, userPerfectLunch, userPerfectDinner,userImage) {
    this.userRecipes = userRecipes;
    this.userStory = userStory;
    this.userServing = userServing;
    this.userTime = userTime;
    this.userPerfectBreak = userPerfectBreak;
    this.userPerfectLunch = userPerfectLunch;
    this.userPerfectDinner = userPerfectDinner;
    this.userIngred=Ingredients;
    this.userPreparation=Preparation;
    this.userImage=userImage;
    
}

Recipes.prototype.render = function () {
    const container = document.getElementById('showing')
    let nameOfRecipe = document.createElement('p');//done
    nameOfRecipe.setAttribute('id','header1')
    container.appendChild(nameOfRecipe);
    nameOfRecipe.textContent=this.userRecipes

    let numberOfServing = document.createElement('p');//done
    numberOfServing.setAttribute('id','servingaSize')
    container.appendChild(numberOfServing);
    numberOfServing.textContent = `For ${this.userServing} People`;

    let timeOfRecipe = document.createElement('p');//done
   timeOfRecipe.setAttribute('id','timeOf')
    container.appendChild(timeOfRecipe);
    timeOfRecipe.textContent = `Cooking Time: ${this.userTime} Min`;

    let StoryText = document.createElement('p');//done
    StoryText.setAttribute('id','storyOf')
    container.appendChild(StoryText);
    StoryText.textContent = this.userStory;

    let Text = document.createElement('p');//done
   Text.setAttribute('id','textOfingred')
    container.appendChild(Text);
    Text.textContent = "Ingrediants";
    
    // let IngredText = document.createElement('ul');
    // // IngredText.setAttribute('id','ingerdUL')
    // container.appendChild(IngredText);
    // for(let i=0;i<Ingredients.length;i++){
    // let li=document.createElement('li');
    // li.setAttribute('class','ingerdli')
    // IngredText.appendChild(li)
    // li.textContent = this.userIngred[i];
    // }

    let listIngred = "";
    for (let i = 0; i < Ingredients.length; i++) {//done
      listIngred +=this.userIngred[i] + "<br>"+ "<br>";
    }
    document.getElementById("textIngred").innerHTML = listIngred;

    let prepText = document.createElement('p');//done
    prepText.setAttribute('id','textOfprep')
    container.appendChild(prepText);
    prepText.textContent = "Prepeartion";

    let listPrepar = "";
    
    for (let i = 0; i < Preparation.length; i++) {//done
      listPrepar += this.userPreparation[i] + "<br>"+ "<br>";
    }
    document.getElementById("textPrepar").innerHTML = listPrepar;
    
    // let counter = "";
    // for (let i = 0; i < Preparation.length; i++) {//done
    //   counter += (i+1) + "<br>";
    // }
    // document.getElementById("textCounter").innerHTML = counter;

    // let PrepText = document.createElement('ul');
    // PrepText.setAttribute('id','prepUL')
    // container.appendChild(PrepText);
    // for(let i=0;i<Preparation.length;i++){
    // let li=document.createElement('li');
    // PrepText.appendChild(li)
    // li.textContent = this.userPreparation[i];
    // }
    while(this.userPerfectBreak===true ||this.userPerfectLunch===true||this.userPerfectDinner===true){
    if(this.userPerfectBreak===true){
    let fectBreak = document.createElement('p');//done
    fectBreak.setAttribute('id','BREAKperfect')
    container.appendChild(fectBreak);
    fectBreak.textContent = 'Breakfast, ';
    this.userPerfectBreak=false
    }else if(this.userPerfectLunch===true){
    let Lunch = document.createElement('p');//done
    Lunch.setAttribute('id','LUNCHperfect')
    container.appendChild(Lunch);
    Lunch.textContent = 'Lunch, ';
    this.userPerfectLunch=false
    }else if(this.userPerfectDinner===true){
    let Dinner = document.createElement('p');//done
    Dinner.setAttribute('id','DINNERperfect')
    container.appendChild(Dinner);
    Dinner.textContent = 'Dinner';
    this.userPerfectDinner=false
    }
    }
    
    let image = document.createElement('img');
    container.appendChild(image);
    image.setAttribute('id',"imageRender")
    image.setAttribute("src",`${this.userImage}`)
    
    let imageHead = document.createElement('img');
    container.appendChild(imageHead);
    imageHead.setAttribute('id',"imageHeader")
    imageHead.src= "https://i.ytimg.com/vi/omKbRsjNwV0/maxresdefault.jpg"
    }

    const form = document.getElementById('dish')
    form.addEventListener('onclick', myFunction)
    function myFunction() {
        event.preventDefault()
        var Ingred = document.getElementById("myBtn").value;
        console.log(Ingred);
        Ingredients.push(Ingred)
        document.getElementById("myBtn").value=""
      }
    form.addEventListener('onclick', preFunction)
    function preFunction() {
        event.preventDefault()
        var preper = document.getElementById("prep").value;
        console.log(preper);
        Preparation.push(preper)
        document.getElementById("prep").value=""
      }


form.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
    event.preventDefault()
    let Recipe = event.target.nameField.value
    let Story = event.target.recipeStory.value
    let serving = event.target.serving.value
    let time = event.target.cookTime.value
    let perfectBreak = event.target.breakfast.checked
    let perfectLunch = event.target.lunch.checked
    let perfectDinner = event.target.dinner.checked
    
    let evenImage=event.target.recipeImage.value
    let newRecipe = new Recipes(Recipe, Story, serving, time, perfectBreak, perfectLunch, perfectDinner,evenImage)
    console.log(newRecipe );
    newRecipe.render()
    // form.removeEventListener('submit', handleSubmit)
}

// form.addEventListener('click', add)
function shayFunction() {
    // const container = document.getElementById('showing')
    document.getElementById('showing').style.background = "#ffffff  no-repeat ";
    document.getElementById("showing").style.backgroundSize = "100% 100%";
    document.getElementById("showing").style.height="500px"
    document.getElementById("showing").style.width="100%"
    document.getElementById("textPrepar").style.overflowY="scroll "
    document.getElementById("textIngred").style.overflowY="scroll "
  }

  function saveToLocal(){
    console.log(Bus.allImages);
    let local = JSON.stringify(Bus.allImages);
    localStorage.setItem('voiting', local);

}

function getFromLocal(){

    let data =localStorage.getItem('voiting');
    let local  = JSON.parse(data);
    

    if(local !== null){
      Bus.allImages= local;
    showingList();

    }
}
getFromLocal()
console.log(local)
