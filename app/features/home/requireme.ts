import app = require('app/main/app');

//Define its own routing state:
app.state("home", 
{
    url:"/home",
    templateUrl: "app/features/home/home.html"
})
