define(["require", "exports", 'main/app'], function (require, exports, app) {
    //Define its own routing state:
    app.state("state2", {
        url: "/state2",
        templateUrl: "app/features/home/home.html"
    });
});
