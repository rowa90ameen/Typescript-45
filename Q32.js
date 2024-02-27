var existingUsers = ['user1', 'user2', 'user3', 'user4', 'user5'];
var newUsers = ['user2', 'user6', 'user5', 'user7', 'user8'];
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var username = newUsers_1[_i];
    if (existingUsers.includes(username)) {
        console.log("The username '".concat(username, "' has already been used. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(username, "' is available."));
    }
}
