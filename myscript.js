//object literal

const salon = {
    name: "The Fashion Pet",
    phone:"(661)106-37-31",
    address:{
        street:" Av. Rosarito ",
        number:" 22710"
    },
    workingHours:{
        days:"Mon-Fri",
        open:"10:00 am",
        close:"5:00 pm"
    },
    pets:[]
}
console.log(salon);
// let name= salon.name;
// let{name}=salon;

let{name,phone,address:{street,number},workingHours:{days,open,close,}}=salon;

document.querySelector('.info').innerHTML=`Visit us ${phone},${street},${number}<br> Open from ${open} to ${close}`;

//object constructor
var c=0;
class Pet{
    constructor(name,age,gender,breed,service,owner,contact){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.owner=owner;
        this.contact=contact;
        this.hunger=10;
        this.happiness=5;
        this.id='pet'+ c ;
        c +-1;
    }
    ownerInfo =function(){
        console.log("Owner name:"+this.owner + "\n" + "Contact Phone:"+ this.contact);
    }
    feed=function(){
        this.hunger-=5;
        this.happiness+=5;
        console.log("feeding..."+ this.petName);
    }
    status=function(){
        console.log("Hunger: "+this.hunger+"\n"+"Happiness:"+this.happiness);
    }
}
const pet1 =new Pet("Oreo",1,"Male","Cat","Shower","Ms. Perez","(664)419-50-00");
const pet2 =new Pet("Zaghdaic",1,"Male","Cat","Shower","Ms. Perez","(664)419-50-00");
const pet3 =new Pet("Munek",3,"Fem","Mutt","Full Service","Mr. Busch","(664)419-50-00");

pet1.ownerInfo();
pet2.ownerInfo();
pet3.ownerInfo();

console.log(pet1);
console.log(pet2);
console.log(pet3);

pet1.status();
pet1.feed();
pet1.status();

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3); 

var textname=document.getElementById('txtname');
var textage=document.getElementById('txtage');
var textgender=document.getElementById('txtgender');
var textbreed=document.getElementById('txtbreed');
var textservice=document.getElementById('txtservice');
var textowner=document.getElementById('txtowner');
var textcontact=document.getElementById('txtcontact');

function register(){
    /*  Display on console
    console.log(textname.value);
     console.log(textage.value);
     console.log(textgender.value);
     console.log(textbreed.value);
     console.log(textservice.value);
     console.log(textowner.value);
     console.log(textcontact.value); */
 
     //the order of the elements is important, has to be the same as the constructor.
     //Save on temporal Database until its reload the page
     const thePet=new Pet
     (textname.value,
     textage.value,
     textgender.value,
     textbreed.value,
     textservice.value,
     textowner.value,
     textcontact.value);

 salon.pets.push(thePet);
 alert("You registered a new pet.");
 clear();

}
function clear(){
    textname.value="";
    textage.value="";
    textgender.value="";
    textbreed.value="";
    textservice.value="";
    textowner.value="";
    textcontact.value="";
}
function display(aPet){
    var tbody=document.getElementById('rowPet');
    var row=`<tr id='${aPet.id}'>
                <td>${aPet.name}</td>
                <td>${aPet.age}</td>
                <td>${aPet.gender}</td>
                <td>${aPet.breed}</td>
                <td>${aPet.service}</td>
                <td>${aPet.owner}</td>
                <td>${aPet.contact}</td>
               <td><button onclick="deletePet('${aPet.id}')">Delete</button></td> 
            </tr>`;
    tbody.innerHTML+=row;

}
display(pet1);
display(pet2);
display(pet3);
//exercise display all the information on the column and when I register the pet it adds to the html submit github and lms

function deletePet(petId){
    var tr=document.getElementById(petId);
    var indexDelete;
    //search the pet using the id

    for(var i=0; i<salon.pets.length;i++){
        var selected = salon.pets[i];
        if(selected.id===petId){
            indexDelete=i;
        }
    }
    salon.pets.splice(indexDelete,1);
    tr.remove();
}

/* function Search(){
    var searchString =document.getElementById('petSearch').value;
    console.log (searchString);

    for(var j=0;j<salon.pets.length;j++){
        var searchPet=salon.pets[j];
        if(searchString==searchPet.name){
         
          document.getElementById('pet'+j).setAttribute('class','selected');
        }
    }
} */

function Search(){
    var ss =document.getElementById('petSearch').value;
    var searchString =ss.toLowerCase();
    
    for(var j=0;j<salon.pets.length;j++){
        var searchPet=salon.pets[j];
        if(searchString===searchPet.name.toLowerCase() || searchString==searchPet.id){
           
        document.getElementById('pet'+j).setAttribute('class','selected');
        }
    }
} 

// complete this site and use adiferent css to show hide and show the elements and jquery solutions
//Leave a comment
function showInput() {
    document.getElementById('display').innerHTML =
    document.getElementById("user_input").value;
}