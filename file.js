const API_URL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

form.addEventListener('submit', function(e){
    e.preventDefault();

    const searchVal = search.value;

    const user = searchVal.split(' ').join('');

fetch(API_URL+user)
.then((result)=> result.json())
.then((userdata)=>{

    createUserCard(userdata);
    });

    function createUserCard(userdata){
        
        const cardHTML = `
           
        <div class = 'card'>
        <div class= 'wraper'>
            <div class="image">
              <img class="avatar" src = "${userdata.avatar_url}" alt = "${userdata.name}" />
            </div>

         <div class = 'user-info'> 
         <div class = "name">${userdata.name}</div>
            <div class="location">
                ${userdata.location}
            </div>
            <div class="bio">
                ${userdata.bio}
            </div>
    
            <div class="number">
                <div class="followers">${userdata.followers}<span class="size"> Followers</span></div>
                <div class="following">${userdata.following}<span class="size"> Following</span></div>
                </div>
    
            <div class = "git-div">
            
<form method="get" action="${userdata.html_url}" target="_blank">
<button class="git-btn" type="submit">To Github</button></form>
          </div>        
        
    </div>
    
    
        `;
        main.innerHTML = cardHTML;
    }
});





