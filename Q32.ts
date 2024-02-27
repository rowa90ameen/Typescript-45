let existingUsers: string[] = ['user1', 'user2', 'user3', 'user4', 'user5'];
let newUsers: string[] = ['user2', 'user6', 'user5', 'user7', 'user8'];

for (let username of newUsers) {
    if (existingUsers.includes(username)) {
        console.log(`The username '${username}' has already been used. Please enter a new username.`);
    } else {
        console.log(`The username '${username}' is available.`);
    }
}
