function make_album(artist, title, tracks) {
    var album = {
        "artist": artist,
        "title": title
    };
    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }
    return album;
}
// Making three dictionaries representing different albums
var album1 = make_album("Artist1", "Album1");
var album2 = make_album("Artist2", "Album2", 12); // Album with 12 tracks
var album3 = make_album("Artist3", "Album3");
// Printing each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
