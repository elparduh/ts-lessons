var Users;
(function (Users) {
    Users[Users["normal"] = 0] = "normal";
    Users[Users["payed"] = 1] = "payed";
    Users[Users["admin"] = 2] = "admin";
    Users[Users["mega"] = 3] = "mega";
})(Users || (Users = {}));
var myUserRol = Users.admin;
console.log(myUserRol);
