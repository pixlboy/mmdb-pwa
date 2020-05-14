//requiring path and fs modules
const firebase = require('firebase');

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyD8BBOiAz31y6JNjOJASFVs6aRgdNaKYIg",
    authDomain: "rg-mmdb.firebaseapp.com",
    databaseURL: "https://rg-mmdb.firebaseio.com",
    projectId: "rg-mmdb",
    storageBucket: "rg-mmdb.appspot.com",
    messagingSenderId: "324131263247",
    appId: "1:324131263247:web:d5be2047b06ef31123a47a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let movies = [
        {
          "path": "10 Cloverfield Lane (2016).jpg",
          "name": "10 Cloverfield Lane",
          "year": "2016",
          "rating": 6
        },
        {
          "path": "1971.jpg",
          "name": "",
          "year": "g",
          "rating": 8
        },
        {
          "path": "127 Hours [].jpg",
          "name": "127 H",
          "year": "rs [",
          "rating": 6
        },
        {
          "path": "10 Things I Hate About You [1999].jpg",
          "name": "10 Things I Hate About You",
          "year": "1999",
          "rating": 8
        },
        {
          "path": "17 Again.jpg",
          "name": "1",
          "year": "Agai",
          "rating": 8
        },
        {
          "path": "2 States [2014].jpg",
          "name": "2 States",
          "year": "2014",
          "rating": 8
        },
        {
          "path": "21 Jump Street [2012].jpg",
          "name": "21 Jump Street",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "3 Idiots.jpg",
          "name": "3",
          "year": "diot",
          "rating": 10
        },
        {
          "path": "28 Days Later... [2002].jpg",
          "name": "28 Days Later...",
          "year": "2002",
          "rating": 6
        },
        {
          "path": "300 - Rise of an Empire [2014].jpg",
          "name": "300 - Rise of an Empire",
          "year": "2014",
          "rating": 6
        },
        {
          "path": "50-50 [2011].jpg",
          "name": "50-50",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "30 Minutes or Less [2011].jpg",
          "name": "30 Minutes or Less",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "9 [2009].jpg",
          "name": "9",
          "year": "2009",
          "rating": 6
        },
        {
          "path": "A Few Good Men (1992).jpg",
          "name": "A Few Good Men",
          "year": "1992",
          "rating": 6
        },
        {
          "path": "A Perfect Getaway [2009].jpg",
          "name": "A Perfect Getaway",
          "year": "2009",
          "rating": 6
        },
        {
          "path": "A Very Harold _ Kumar 3D Christmas [2011].jpg",
          "name": "A Very Harold _ Kumar 3D Christmas",
          "year": "2011",
          "rating": 4
        },
        {
          "path": "A Christmas Carol.jpg",
          "name": "A Christma",
          "year": "Caro",
          "rating": 10
        },
        {
          "path": "A beautiful Mind.jpg",
          "name": "A beautif",
          "year": " Min",
          "rating": 10
        },
        {
          "path": "A Single Man [].jpg",
          "name": "A Single",
          "year": "an [",
          "rating": 2
        },
        {
          "path": "A Walk on the Moon [1999].jpg",
          "name": "A Walk on the Moon",
          "year": "1999",
          "rating": 6
        },
        {
          "path": "A Walk in the Clouds [1995].jpg",
          "name": "A Walk in the Clouds",
          "year": "1995",
          "rating": 6
        },
        {
          "path": "Aashiqui 2 [2013].jpg",
          "name": "Aashiqui 2",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "Aarakshan [].jpg",
          "name": "Aarak",
          "year": "an [",
          "rating": 6
        },
        {
          "path": "About a Boy [].jpg",
          "name": "About a",
          "year": "oy [",
          "rating": 6
        },
        {
          "path": "Abraham Lincoln - Vampire Hunter [2012].jpg",
          "name": "Abraham Lincoln - Vampire Hunter",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "Absentia [2011].jpg",
          "name": "Absentia",
          "year": "2011",
          "rating": 4
        },
        {
          "path": "Aeon Flux [2005].jpg",
          "name": "Aeon Flux",
          "year": "2005",
          "rating": 4
        },
        {
          "path": "Agora [2009].jpg",
          "name": "Agora",
          "year": "2009",
          "rating": 4
        },
        {
          "path": "Aladdin (2019).jpg",
          "name": "Aladdin",
          "year": "2019",
          "rating": null
        },
        {
          "path": "Airlift [2016].jpg",
          "name": "Airlift",
          "year": "2016",
          "rating": 8
        },
        {
          "path": "Alice In Wonderland [2010].jpg",
          "name": "Alice In Wonderland",
          "year": "2010",
          "rating": 8
        },
        {
          "path": "American Virgin [2009].jpg",
          "name": "American Virgin",
          "year": "2009",
          "rating": 6
        },
        {
          "path": "Agneepath [2012].jpg",
          "name": "Agneepath",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "Amusement [2008].jpg",
          "name": "Amusement",
          "year": "2008",
          "rating": 4
        },
        {
          "path": "Andhadhun (2018).jpg",
          "name": "Andhadhun",
          "year": "2018",
          "rating": 8
        },
        {
          "path": "Annabelle [2014].jpg",
          "name": "Annabelle",
          "year": "2014",
          "rating": 6
        },
        {
          "path": "An Education [2009].jpg",
          "name": "An Education",
          "year": "2009",
          "rating": 6
        },
        {
          "path": "Alvin and The Chipmunks 2.jpg",
          "name": "Alvin and The Chip",
          "year": "nks ",
          "rating": 6
        },
        {
          "path": "Ant-Man [2015].jpg",
          "name": "Ant-Man",
          "year": "2015",
          "rating": 6
        },
        {
          "path": "Another Cinderella Story [2008].jpg",
          "name": "Another Cinderella Story",
          "year": "2008",
          "rating": 4
        },
        {
          "path": "Any Body Can Dance 2 [2015].jpg",
          "name": "Any Body Can Dance 2",
          "year": "2015",
          "rating": 6
        },
        {
          "path": "Arrival (2016).jpg",
          "name": "Arrival",
          "year": "2016",
          "rating": 4
        },
        {
          "path": "August Rush [2007].jpg",
          "name": "August Rush",
          "year": "2007",
          "rating": 8
        },
        {
          "path": "Argo [2012].jpg",
          "name": "Argo",
          "year": "2012",
          "rating": 8
        },
        {
          "path": "Avengers- Endgame (2019).jpg",
          "name": "Avengers- Endgame",
          "year": "2019",
          "rating": null
        },
        {
          "path": "Avengers - Age of Ultron [2015].jpg",
          "name": "Avengers - Age of Ultron",
          "year": "2015",
          "rating": 6
        },
        {
          "path": "Avengers [2012].jpg",
          "name": "Avengers",
          "year": "2012",
          "rating": 8
        },
        {
          "path": "Avengers- Infinity War (2018).jpg",
          "name": "Avengers- Infinity War",
          "year": "2018",
          "rating": 8
        },
        {
          "path": "Badhaai Ho (2018).jpg",
          "name": "Badhaai Ho",
          "year": "2018",
          "rating": 6
        },
        {
          "path": "Bad Teacher [2011].jpg",
          "name": "Bad Teacher",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "Baahubali - The Beginning [2015].jpg",
          "name": "Baahubali - The Beginning",
          "year": "2015",
          "rating": 8
        },
        {
          "path": "Baby [2015].jpg",
          "name": "Baby",
          "year": "2015",
          "rating": 8
        },
        {
          "path": "Badla (2019).jpg",
          "name": "Badla",
          "year": "2019",
          "rating": 8
        },
        {
          "path": "Bahubali 2 - The Conclusion (2017).jpg",
          "name": "Bahubali 2 - The Conclusion",
          "year": "2017",
          "rating": 8
        },
        {
          "path": "Badlapur [2015].jpg",
          "name": "Badlapur",
          "year": "2015",
          "rating": 8
        },
        {
          "path": "Bajirao Mastani (2015).jpg",
          "name": "Bajirao Mastani",
          "year": "2015",
          "rating": null
        },
        {
          "path": "Barfi! [2012].jpg",
          "name": "Barfi!",
          "year": "2012",
          "rating": 8
        },
        {
          "path": "Batman v Superman - Dawn of Justice [2016].jpg",
          "name": "Batman v Superman - Dawn of Justice",
          "year": "2016",
          "rating": 4
        },
        {
          "path": "Barot House (2019).jpg",
          "name": "Barot House",
          "year": "2019",
          "rating": null
        },
        {
          "path": "Batman Begins.jpg",
          "name": "Batman",
          "year": "egin",
          "rating": 10
        },
        {
          "path": "Bazaar (2018).jpg",
          "name": "Bazaar",
          "year": "2018",
          "rating": 4
        },
        {
          "path": "Beauty and the Beast (2017).jpg",
          "name": "Beauty and the Beast",
          "year": "2017",
          "rating": 4
        },
        {
          "path": "Before the Flood (2016).jpg",
          "name": "Before the Flood",
          "year": "2016",
          "rating": 10
        },
        {
          "path": "Battle - Los Angeles [].jpg",
          "name": "Battle - Los Ang",
          "year": "es [",
          "rating": 4
        },
        {
          "path": "Behind Enemy Lines [].jpg",
          "name": "Behind Enemy L",
          "year": "es [",
          "rating": 6
        },
        {
          "path": "Bhopal - A Prayer for Rain [2014].jpg",
          "name": "Bhopal - A Prayer for Rain",
          "year": "2014",
          "rating": 6
        },
        {
          "path": "Big Hero 6 [2014].jpg",
          "name": "Big Hero 6",
          "year": "2014",
          "rating": 8
        },
        {
          "path": "Bhaag Milkha Bhaag [2013].jpg",
          "name": "Bhaag Milkha Bhaag",
          "year": "2013",
          "rating": 8
        },
        {
          "path": "Big Fish [].jpg",
          "name": "Big ",
          "year": "sh [",
          "rating": 6
        },
        {
          "path": "Black Death [].jpg",
          "name": "Black D",
          "year": "th [",
          "rating": 6
        },
        {
          "path": "Blood Diamond [2006].jpg",
          "name": "Blood Diamond",
          "year": "2006",
          "rating": 10
        },
        {
          "path": "Black Swan [].jpg",
          "name": "Black ",
          "year": "an [",
          "rating": 6
        },
        {
          "path": "Bodyguard [2011].jpg",
          "name": "Bodyguard",
          "year": "2011",
          "rating": 4
        },
        {
          "path": "Bloodrayne 1.jpg",
          "name": "Blood",
          "year": "yne ",
          "rating": 6
        },
        {
          "path": "Body of Evidence [1993].jpg",
          "name": "Body of Evidence",
          "year": "1993",
          "rating": 4
        },
        {
          "path": "Boogie Nights [1997].jpg",
          "name": "Boogie Nights",
          "year": "1997",
          "rating": 4
        },
        {
          "path": "Brave [2012].jpg",
          "name": "Brave",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "Braveheart.jpg",
          "name": "Bra",
          "year": "hear",
          "rating": 10
        },
        {
          "path": "Bride Wars [2009].jpg",
          "name": "Bride Wars",
          "year": "2009",
          "rating": 6
        },
        {
          "path": "Breaking the Girls [2013].jpg",
          "name": "Breaking the Girls",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "Camp Rock 2 - The Final Jam [2010].jpg",
          "name": "Camp Rock 2 - The Final Jam",
          "year": "2010",
          "rating": 4
        },
        {
          "path": "Casanova.jpg",
          "name": "C",
          "year": "anov",
          "rating": 8
        },
        {
          "path": "Captain America - Civil War [2016].jpg",
          "name": "Captain America - Civil War",
          "year": "2016",
          "rating": 6
        },
        {
          "path": "Bridge to Terabithia.jpg",
          "name": "Bridge to Ter",
          "year": "ithi",
          "rating": 6
        },
        {
          "path": "Catch Me If You Can [2002].jpg",
          "name": "Catch Me If You Can",
          "year": "2002",
          "rating": 6
        },
        {
          "path": "Chakk de Phatte [2011].jpg",
          "name": "Chakk de Phatte",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "Chaos.jpg",
          "name": "",
          "year": "Chao",
          "rating": 6
        },
        {
          "path": "Charlie and the Chocolate Factory (2005).jpg",
          "name": "Charlie and the Chocolate Factory",
          "year": "2005",
          "rating": null
        },
        {
          "path": "Cheaper by the Dozen 2.jpg",
          "name": "Cheaper by the ",
          "year": "zen ",
          "rating": 6
        },
        {
          "path": "Centurion [2010].jpg",
          "name": "Centurion",
          "year": "2010",
          "rating": 4
        },
        {
          "path": "Chhichhore (2019).jpg",
          "name": "Chhichhore",
          "year": "2019",
          "rating": null
        },
        {
          "path": "Chronicle [2012].jpg",
          "name": "Chronicle",
          "year": "2012",
          "rating": 4
        },
        {
          "path": "Cinderella [2015].jpg",
          "name": "Cinderella",
          "year": "2015",
          "rating": 6
        },
        {
          "path": "Colombiana [2011].jpg",
          "name": "Colombiana",
          "year": "2011",
          "rating": 8
        },
        {
          "path": "Chashme Baddoor [2013].jpg",
          "name": "Chashme Baddoor",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "Cloudy with a Chance of Meatballs [2009].jpg",
          "name": "Cloudy with a Chance of Meatballs",
          "year": "2009",
          "rating": 6
        },
        {
          "path": "Contagion (2011).jpg",
          "name": "Contagion",
          "year": "2011",
          "rating": null
        },
        {
          "path": "Contraband [2012].jpg",
          "name": "Contraband",
          "year": "2012",
          "rating": 8
        },
        {
          "path": "Coyote Ugly.jpg",
          "name": "Coyo",
          "year": " Ugl",
          "rating": 6
        },
        {
          "path": "Crimson Tide [1995].jpg",
          "name": "Crimson Tide",
          "year": "1995",
          "rating": 8
        },
        {
          "path": "Creature [2014].jpg",
          "name": "Creature",
          "year": "2014",
          "rating": 4
        },
        {
          "path": "Crank - High Voltage [].jpg",
          "name": "Crank - High Vol",
          "year": "ge [",
          "rating": 4
        },
        {
          "path": "Dangal (2016).jpg",
          "name": "Dangal",
          "year": "2016",
          "rating": null
        },
        {
          "path": "Dabangg 2 [2012].jpg",
          "name": "Dabangg 2",
          "year": "2012",
          "rating": 4
        },
        {
          "path": "Day of the Warrior [1996].jpg",
          "name": "Day of the Warrior",
          "year": "1996",
          "rating": 2
        },
        {
          "path": "Daredevil [2003].jpg",
          "name": "Daredevil",
          "year": "2003",
          "rating": 4
        },
        {
          "path": "Date Night [2010].jpg",
          "name": "Date Night",
          "year": "2010",
          "rating": 6
        },
        {
          "path": "Dabangg.jpg",
          "name": "",
          "year": "bang",
          "rating": 6
        },
        {
          "path": "Daybreakers [2009].jpg",
          "name": "Daybreakers",
          "year": "2009",
          "rating": 4
        },
        {
          "path": "Deadpool (2016).jpg",
          "name": "Deadpool",
          "year": "2016",
          "rating": 6
        },
        {
          "path": "Deadpool 2 (2018).jpg",
          "name": "Deadpool 2",
          "year": "2018",
          "rating": 6
        },
        {
          "path": "Despicable Me 2 [2013].jpg",
          "name": "Despicable Me 2",
          "year": "2013",
          "rating": 8
        },
        {
          "path": "Desi Boyz [2011].jpg",
          "name": "Desi Boyz",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "Despicable Me.jpg",
          "name": "Despic",
          "year": "le M",
          "rating": 6
        },
        {
          "path": "Devil_s Playground [2010].jpg",
          "name": "Devil_s Playground",
          "year": "2010",
          "rating": 4
        },
        {
          "path": "Delhi Belly [2011].jpg",
          "name": "Delhi Belly",
          "year": "2011",
          "rating": 8
        },
        {
          "path": "Diary of a Wimpy Kid - Dog Days [2012].jpg",
          "name": "Diary of a Wimpy Kid - Dog Days",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "Dharti [].jpg",
          "name": "Dh",
          "year": "ti [",
          "rating": 6
        },
        {
          "path": "Dhoom-3.jpg",
          "name": "",
          "year": "oom-",
          "rating": 6
        },
        {
          "path": "Diary of a Wimpy Kid - Rodrick Rules [2011].jpg",
          "name": "Diary of a Wimpy Kid - Rodrick Rules",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "Diary of a Wimpy Kid {2010].jpg",
          "name": "Diary of a Wimpy Kid",
          "year": "2010",
          "rating": 6
        },
        {
          "path": "District B13.jpg",
          "name": "Distr",
          "year": "t B1",
          "rating": 6
        },
        {
          "path": "Donnie Darko [2001].jpg",
          "name": "Donnie Darko",
          "year": "2001",
          "rating": 2
        },
        {
          "path": "Don 2 [2011].jpg",
          "name": "Don 2",
          "year": "2011",
          "rating": 8
        },
        {
          "path": "Don_t Breathe [2016].jpg",
          "name": "Don_t Breathe",
          "year": "2016",
          "rating": 6
        },
        {
          "path": "Dream Girl (2019).jpg",
          "name": "Dream Girl",
          "year": "2019",
          "rating": null
        },
        {
          "path": "Dumbo (2019).jpg",
          "name": "Dumbo",
          "year": "2019",
          "rating": 6
        },
        {
          "path": "Die Hard 4.jpg",
          "name": "Die",
          "year": "ard ",
          "rating": 6
        },
        {
          "path": "Due Date [2010].jpg",
          "name": "Due Date",
          "year": "2010",
          "rating": 6
        },
        {
          "path": "Drive [2011].jpg",
          "name": "Drive",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "Dunkirk (2017).jpg",
          "name": "Dunkirk",
          "year": "2017",
          "rating": 8
        },
        {
          "path": "Edge of Tomorrow [2014].jpg",
          "name": "Edge of Tomorrow",
          "year": "2014",
          "rating": 4
        },
        {
          "path": "Easy A.jpg",
          "name": "",
          "year": "asy ",
          "rating": 6
        },
        {
          "path": "Ek Main Aur Ek Tu [2012].jpg",
          "name": "Ek Main Aur Ek Tu",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "Ek thi Daayan [2013].jpg",
          "name": "Ek thi Daayan",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "Eden Lake [2008].jpg",
          "name": "Eden Lake",
          "year": "2008",
          "rating": 6
        },
        {
          "path": "Ek Villain [2014].jpg",
          "name": "Ek Villain",
          "year": "2014",
          "rating": 4
        },
        {
          "path": "Eurotrip.jpg",
          "name": "E",
          "year": "otri",
          "rating": 6
        },
        {
          "path": "Enchanted (2007).jpg",
          "name": "Enchanted",
          "year": "2007",
          "rating": null
        },
        {
          "path": "Fantastic Beasts and Where to Find Them (2016).jpg",
          "name": "Fantastic Beasts and Where to Find Them",
          "year": "2016",
          "rating": 6
        },
        {
          "path": "Equilibrium [2002].jpg",
          "name": "Equilibrium",
          "year": "2002",
          "rating": 8
        },
        {
          "path": "Fast Five [2011].jpg",
          "name": "Fast Five",
          "year": "2011",
          "rating": 8
        },
        {
          "path": "Fast _ Furious 6 [2013].jpg",
          "name": "Fast _ Furious 6",
          "year": "2013",
          "rating": 8
        },
        {
          "path": "Fast Track - No Limits [2008].jpg",
          "name": "Fast Track - No Limits",
          "year": "2008",
          "rating": 4
        },
        {
          "path": "Fight Club.jpg",
          "name": "Fig",
          "year": " Clu",
          "rating": 6
        },
        {
          "path": "Final Destination 5 [2011].jpg",
          "name": "Final Destination 5",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "Flipped [].jpg",
          "name": "Fli",
          "year": "ed [",
          "rating": 4
        },
        {
          "path": "Finding Fanny [2014].jpg",
          "name": "Finding Fanny",
          "year": "2014",
          "rating": 6
        },
        {
          "path": "Ford v Ferrari (2019).jpg",
          "name": "Ford v Ferrari",
          "year": "2019",
          "rating": null
        },
        {
          "path": "Forbidden Warrior [2005].jpg",
          "name": "Forbidden Warrior",
          "year": "2005",
          "rating": 2
        },
        {
          "path": "Force [2009].jpg",
          "name": "Force",
          "year": "2009",
          "rating": 4
        },
        {
          "path": "Friends with Benefits [2011].jpg",
          "name": "Friends with Benefits",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "Fruit _ Nut [2009].jpg",
          "name": "Fruit _ Nut",
          "year": "2009",
          "rating": 2
        },
        {
          "path": "Fright Night [2011].jpg",
          "name": "Fright Night",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "Friends with Money [2006].jpg",
          "name": "Friends with Money",
          "year": "2006",
          "rating": 4
        },
        {
          "path": "Gabbar is Back [2015].jpg",
          "name": "Gabbar is Back",
          "year": "2015",
          "rating": 6
        },
        {
          "path": "Fukrey Returns (2017).jpg",
          "name": "Fukrey Returns",
          "year": "2017",
          "rating": 6
        },
        {
          "path": "Furious 7 [2015].jpg",
          "name": "Furious 7",
          "year": "2015",
          "rating": 8
        },
        {
          "path": "Full Metal Jacket [1987].jpg",
          "name": "Full Metal Jacket",
          "year": "1987",
          "rating": 6
        },
        {
          "path": "Fukrey [2013].jpg",
          "name": "Fukrey",
          "year": "2013",
          "rating": 8
        },
        {
          "path": "Ghost Ship [2002].jpg",
          "name": "Ghost Ship",
          "year": "2002",
          "rating": 6
        },
        {
          "path": "Game of Death.jpg",
          "name": "Game o",
          "year": "Deat",
          "rating": 6
        },
        {
          "path": "Get the Gringo [2012].jpg",
          "name": "Get the Gringo",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "Ghosts of Girlfriends Past.jpg",
          "name": "Ghosts of Girlfrien",
          "year": " Pas",
          "rating": 6
        },
        {
          "path": "Gladiator [2000].jpg",
          "name": "Gladiator",
          "year": "2000",
          "rating": 10
        },
        {
          "path": "Godzilla [2014].jpg",
          "name": "Godzilla",
          "year": "2014",
          "rating": 8
        },
        {
          "path": "GI Joe -The Rise of Cobra.jpg",
          "name": "GI Joe -The Rise o",
          "year": "Cobr",
          "rating": 6
        },
        {
          "path": "Go Goa Gone [2013].jpg",
          "name": "Go Goa Gone",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "Going the Distance [2010].jpg",
          "name": "Going the Distance",
          "year": "2010",
          "rating": 8
        },
        {
          "path": "Gran Torino [].jpg",
          "name": "Gran To",
          "year": "no [",
          "rating": 6
        },
        {
          "path": "Gravity [2013].jpg",
          "name": "Gravity",
          "year": "2013",
          "rating": 8
        },
        {
          "path": "Goliyon Ki Rasleela Ram-Leela [2013].jpg",
          "name": "Goliyon Ki Rasleela Ram-Leela",
          "year": "2013",
          "rating": 4
        },
        {
          "path": "Grave Encounters [2011].jpg",
          "name": "Grave Encounters",
          "year": "2011",
          "rating": 4
        },
        {
          "path": "Green Street Hooligans [2005].jpg",
          "name": "Green Street Hooligans",
          "year": "2005",
          "rating": 6
        },
        {
          "path": "Green Zone.jpg",
          "name": "Gre",
          "year": " Zon",
          "rating": 6
        },
        {
          "path": "Guardians of the Galaxy [2014].jpg",
          "name": "Guardians of the Galaxy",
          "year": "2014",
          "rating": 6
        },
        {
          "path": "Grown Ups.jpg",
          "name": "Gr",
          "year": "n Up",
          "rating": 8
        },
        {
          "path": "Hachi - A Dog_s Tale [2009].jpg",
          "name": "Hachi - A Dog_s Tale",
          "year": "2009",
          "rating": 10
        },
        {
          "path": "Haider [2014].jpg",
          "name": "Haider",
          "year": "2014",
          "rating": 8
        },
        {
          "path": "Grand Masti [2013].jpg",
          "name": "Grand Masti",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "Hamari Adhuri Kahaani [2015].jpg",
          "name": "Hamari Adhuri Kahaani",
          "year": "2015",
          "rating": 4
        },
        {
          "path": "Happy Endings [].jpg",
          "name": "Happy End",
          "year": "gs [",
          "rating": 4
        },
        {
          "path": "Harry Potter and the Deathly Hallows - Part 2 [2011].jpg",
          "name": "Harry Potter and the Deathly Hallows - Part 2",
          "year": "2011",
          "rating": 10
        },
        {
          "path": "Harry Potter and the Deathly Hallows 1.jpg",
          "name": "Harry Potter and the Deathly Ha",
          "year": "ows ",
          "rating": 10
        },
        {
          "path": "Harold and Kumar Escape from Guantanamo Bay.jpg",
          "name": "Harold and Kumar Escape from Guantan",
          "year": "o Ba",
          "rating": 10
        },
        {
          "path": "Hasee Toh Phasee [2013].jpg",
          "name": "Hasee Toh Phasee",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "Hawaizaada [2015].jpg",
          "name": "Hawaizaada",
          "year": "2015",
          "rating": 4
        },
        {
          "path": "Highway [2014].jpg",
          "name": "Highway",
          "year": "2014",
          "rating": 6
        },
        {
          "path": "Hitch [2005].jpg",
          "name": "Hitch",
          "year": "2005",
          "rating": 8
        },
        {
          "path": "Holiday in the Wild (2019).jpg",
          "name": "Holiday in the Wild",
          "year": "2019",
          "rating": null
        },
        {
          "path": "Horrible Bosses [2011].jpg",
          "name": "Horrible Bosses",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "Hansel _ Gretel - Witch Hunters [2013].jpg",
          "name": "Hansel _ Gretel - Witch Hunters",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "Home Again (2017).jpg",
          "name": "Home Again",
          "year": "2017",
          "rating": 6
        },
        {
          "path": "Hotel Transylvania (2012).jpg",
          "name": "Hotel Transylvania",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "Housefull 2 [2012].jpg",
          "name": "Housefull 2",
          "year": "2012",
          "rating": 4
        },
        {
          "path": "Hot Tub Time Machine  [2010].jpg",
          "name": "Hot Tub Time Machine ",
          "year": "2010",
          "rating": 6
        },
        {
          "path": "Hugo [2011].jpg",
          "name": "Hugo",
          "year": "2011",
          "rating": 8
        },
        {
          "path": "I Spit on Your Grave 2 [2013].jpg",
          "name": "I Spit on Your Grave 2",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "Howl_s Moving Castle [2004].jpg",
          "name": "Howl_s Moving Castle",
          "year": "2004",
          "rating": 6
        },
        {
          "path": "Hulk [2003].jpg",
          "name": "Hulk",
          "year": "2003",
          "rating": 6
        },
        {
          "path": "I, Frankenstein (2014).jpg",
          "name": "I, Frankenstein",
          "year": "2014",
          "rating": 4
        },
        {
          "path": "I Spit on Your Grave [2010].jpg",
          "name": "I Spit on Your Grave",
          "year": "2010",
          "rating": 8
        },
        {
          "path": "How to Train Your Dragon.jpg",
          "name": "How to Train Your",
          "year": "rago",
          "rating": 10
        },
        {
          "path": "Ice Age-Continental Drift [2012].jpg",
          "name": "Ice Age-Continental Drift",
          "year": "2012",
          "rating": 8
        },
        {
          "path": "Impulse.jpg",
          "name": "",
          "year": "puls",
          "rating": 6
        },
        {
          "path": "In Time [2011].jpg",
          "name": "In Time",
          "year": "2011",
          "rating": 4
        },
        {
          "path": "Inception.jpg",
          "name": "In",
          "year": "ptio",
          "rating": 10
        },
        {
          "path": "Indecent Behavior 2 [1994].jpg",
          "name": "Indecent Behavior 2",
          "year": "1994",
          "rating": 4
        },
        {
          "path": "Inglourious Basterds [].jpg",
          "name": "Inglourious Bast",
          "year": "ds [",
          "rating": 8
        },
        {
          "path": "Inferno (2016).jpg",
          "name": "Inferno",
          "year": "2016",
          "rating": 6
        },
        {
          "path": "Interstellar [2014].jpg",
          "name": "Interstellar",
          "year": "2014",
          "rating": 10
        },
        {
          "path": "Intimacy [2001].jpg",
          "name": "Intimacy",
          "year": "2001",
          "rating": 4
        },
        {
          "path": "Into the Woods (2014).jpg",
          "name": "Into the Woods",
          "year": "2014",
          "rating": 4
        },
        {
          "path": "Indiana Jones and the Kingdom of Crystal Skull [2008].jpg",
          "name": "Indiana Jones and the Kingdom of Crystal Skull",
          "year": "2008",
          "rating": 8
        },
        {
          "path": "Its a Boy Girl Thing.jpg",
          "name": "Its a Boy Gir",
          "year": "Thin",
          "rating": 6
        },
        {
          "path": "Jab Tak Hai Jaan [2012].jpg",
          "name": "Jab Tak Hai Jaan",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "Jack the Giant Slayer [2013].jpg",
          "name": "Jack the Giant Slayer",
          "year": "2013",
          "rating": 8
        },
        {
          "path": "John Tucker Must Die.jpg",
          "name": "John Tucker M",
          "year": "t Di",
          "rating": 6
        },
        {
          "path": "John Wick (2014).jpg",
          "name": "John Wick",
          "year": "2014",
          "rating": 6
        },
        {
          "path": "John Wick - Chapter 2.jpg",
          "name": "John Wick - Ch",
          "year": "ter ",
          "rating": 4
        },
        {
          "path": "Ice Age 3 - Dawn of the Dinosaurs.jpg",
          "name": "Ice Age 3 - Dawn of the Di",
          "year": "saur",
          "rating": 8
        },
        {
          "path": "Johnny English [2003].jpg",
          "name": "Johnny English",
          "year": "2003",
          "rating": 8
        },
        {
          "path": "Joker (2019).jpg",
          "name": "Joker",
          "year": "2019",
          "rating": null
        },
        {
          "path": "Jolly LLB 2 (2017).jpg",
          "name": "Jolly LLB 2",
          "year": "2017",
          "rating": 6
        },
        {
          "path": "Hostel [2005].jpg",
          "name": "Hostel",
          "year": "2005",
          "rating": 4
        },
        {
          "path": "Jumanji- The Next Level (2019).jpg",
          "name": "Jumanji- The Next Level",
          "year": "2019",
          "rating": null
        },
        {
          "path": "Jumanji- Welcome to the Jungle (2017).jpg",
          "name": "Jumanji- Welcome to the Jungle",
          "year": "2017",
          "rating": 6
        },
        {
          "path": "Journey 2 - The Mysterious Island  [2012].jpg",
          "name": "Journey 2 - The Mysterious Island ",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "Jurassic World [2015].jpg",
          "name": "Jurassic World",
          "year": "2015",
          "rating": 8
        },
        {
          "path": "Jurassic Park [1993].jpg",
          "name": "Jurassic Park",
          "year": "1993",
          "rating": 10
        },
        {
          "path": "Jurassic World- Fallen Kingdom (2018).jpg",
          "name": "Jurassic World- Fallen Kingdom",
          "year": "2018",
          "rating": 6
        },
        {
          "path": "Kaal (2005).jpg",
          "name": "Kaal",
          "year": "2005",
          "rating": null
        },
        {
          "path": "Justice League (2017).jpg",
          "name": "Justice League",
          "year": "2017",
          "rating": 6
        },
        {
          "path": "Just My Luck [2006].jpg",
          "name": "Just My Luck",
          "year": "2006",
          "rating": 6
        },
        {
          "path": "Ki _ Ka (2016).jpg",
          "name": "Ki _ Ka",
          "year": "2016",
          "rating": 6
        },
        {
          "path": "Khosla ka Ghosla [2006].jpg",
          "name": "Khosla ka Ghosla",
          "year": "2006",
          "rating": 8
        },
        {
          "path": "Killer Elite [2011].jpg",
          "name": "Killer Elite",
          "year": "2011",
          "rating": 4
        },
        {
          "path": "King Arthur.jpg",
          "name": "King",
          "year": "rthu",
          "rating": 8
        },
        {
          "path": "King Arthur- Legend of the Sword.jpg",
          "name": "King Arthur- Legend of th",
          "year": "Swor",
          "rating": 8
        },
        {
          "path": "Klaus (2019).jpg",
          "name": "Klaus",
          "year": "2019",
          "rating": null
        },
        {
          "path": "Kingdom of Heaven [2005].JPG",
          "name": "Kingdom of Heaven",
          "year": "2005",
          "rating": 8
        },
        {
          "path": "Killing Me Softly [2002].jpg",
          "name": "Killing Me Softly",
          "year": "2002",
          "rating": 6
        },
        {
          "path": "Kong- Skull Island (2017).jpg",
          "name": "Kong- Skull Island",
          "year": "2017",
          "rating": 8
        },
        {
          "path": "Knocked Up [2007].jpg",
          "name": "Knocked Up",
          "year": "2007",
          "rating": 6
        },
        {
          "path": "Kung Fu Panda 3 [2016].jpg",
          "name": "Kung Fu Panda 3",
          "year": "2016",
          "rating": 8
        },
        {
          "path": "La La Land (2016).jpg",
          "name": "La La Land",
          "year": "2016",
          "rating": 6
        },
        {
          "path": "Lady Bloodfight (2016).jpg",
          "name": "Lady Bloodfight",
          "year": "2016",
          "rating": 4
        },
        {
          "path": "Kya Super Kool Hain Hum [2012].jpg",
          "name": "Kya Super Kool Hain Hum",
          "year": "2012",
          "rating": 4
        },
        {
          "path": "Leap Year [2010].jpg",
          "name": "Leap Year",
          "year": "2010",
          "rating": 8
        },
        {
          "path": "Life is Beautiful [1997].jpg",
          "name": "Life is Beautiful",
          "year": "1997",
          "rating": 8
        },
        {
          "path": "Lion (2016).jpg",
          "name": "Lion",
          "year": "2016",
          "rating": 6
        },
        {
          "path": "Life of Pi [2012].jpg",
          "name": "Life of Pi",
          "year": "2012",
          "rating": 8
        },
        {
          "path": "Jobs [2013].jpg",
          "name": "Jobs",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "Love Actually [].jpg",
          "name": "Love Actu",
          "year": "ly [",
          "rating": 8
        },
        {
          "path": "Losers.jpg",
          "name": "",
          "year": "oser",
          "rating": 6
        },
        {
          "path": "M.S. Dhoni - The Untold Story [2016].jpg",
          "name": "M.S. Dhoni - The Untold Story",
          "year": "2016",
          "rating": 6
        },
        {
          "path": "Lucy (2014).jpg",
          "name": "Lucy",
          "year": "2014",
          "rating": 8
        },
        {
          "path": "LSD-Love Sex Aur Dhoka.jpg",
          "name": "LSD-Love Sex Au",
          "year": "Dhok",
          "rating": 8
        },
        {
          "path": "Madagascar 3 - Europe_s Most Wanted [2012].jpg",
          "name": "Madagascar 3 - Europe_s Most Wanted",
          "year": "2012",
          "rating": 8
        },
        {
          "path": "Made in China (2019).jpg",
          "name": "Made in China",
          "year": "2019",
          "rating": null
        },
        {
          "path": "Madras Cafe [2013].jpg",
          "name": "Madras Cafe",
          "year": "2013",
          "rating": 8
        },
        {
          "path": "Man of Steel [2013].jpg",
          "name": "Man of Steel",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "Main Tera Hero [2014].jpg",
          "name": "Main Tera Hero",
          "year": "2014",
          "rating": 6
        },
        {
          "path": "Make It Happen [2008].jpg",
          "name": "Make It Happen",
          "year": "2008",
          "rating": 4
        },
        {
          "path": "Manikarnika- The Queen of Jhansi (2019).jpg",
          "name": "Manikarnika- The Queen of Jhansi",
          "year": "2019",
          "rating": null
        },
        {
          "path": "Mardaani (2014).jpg",
          "name": "Mardaani",
          "year": "2014",
          "rating": null
        },
        {
          "path": "Margarita, with a Straw [2014].jpg",
          "name": "Margarita, with a Straw",
          "year": "2014",
          "rating": 6
        },
        {
          "path": "Matchstick Men.jpg",
          "name": "Matchst",
          "year": "k Me",
          "rating": 6
        },
        {
          "path": "Marley and Me.jpg",
          "name": "Marley",
          "year": "nd M",
          "rating": 6
        },
        {
          "path": "Men of Honor.jpg",
          "name": "Men o",
          "year": "Hono",
          "rating": 10
        },
        {
          "path": "Legend of the Guardians [].jpg",
          "name": "Legend of the Guard",
          "year": "ns [",
          "rating": 6
        },
        {
          "path": "Midnight in Paris (2011).jpg",
          "name": "Midnight in Paris",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "Milf [2010].jpg",
          "name": "Milf",
          "year": "2010",
          "rating": 4
        },
        {
          "path": "Minority Report [2002].jpg",
          "name": "Minority Report",
          "year": "2002",
          "rating": 10
        },
        {
          "path": "Moana (2016).jpg",
          "name": "Moana",
          "year": "2016",
          "rating": 8
        },
        {
          "path": "Mod [2011].jpg",
          "name": "Mod",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "Monsters vs Aliens [2009].jpg",
          "name": "Monsters vs Aliens",
          "year": "2009",
          "rating": 4
        },
        {
          "path": "Moonrise Kingdom [2012].jpg",
          "name": "Moonrise Kingdom",
          "year": "2012",
          "rating": 4
        },
        {
          "path": "Men in Black 3 [2012].jpg",
          "name": "Men in Black 3",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "Mowgli- Legend of the Jungle (2018).jpg",
          "name": "Mowgli- Legend of the Jungle",
          "year": "2018",
          "rating": 6
        },
        {
          "path": "Munich (2005).jpg",
          "name": "Munich",
          "year": "2005",
          "rating": null
        },
        {
          "path": "Mumbai Salsa [2007].jpg",
          "name": "Mumbai Salsa",
          "year": "2007",
          "rating": 8
        },
        {
          "path": "My Big Fat Greek Wedding [2002].jpg",
          "name": "My Big Fat Greek Wedding",
          "year": "2002",
          "rating": 6
        },
        {
          "path": "My Best Friend_s Girl [2008].jpg",
          "name": "My Best Friend_s Girl",
          "year": "2008",
          "rating": 6
        },
        {
          "path": "Million Dollar Baby [].jpg",
          "name": "Million Dollar ",
          "year": "by [",
          "rating": 6
        },
        {
          "path": "National Treasure 2-Book of Secrets.jpg",
          "name": "National Treasure 2-Book of ",
          "year": "cret",
          "rating": 10
        },
        {
          "path": "Neerja [2016].jpg",
          "name": "Neerja",
          "year": "2016",
          "rating": 8
        },
        {
          "path": "National Treasure.jpg",
          "name": "National T",
          "year": "asur",
          "rating": 10
        },
        {
          "path": "Nanny McPhee Returns [].jpg",
          "name": "Nanny McPhee Ret",
          "year": "ns [",
          "rating": 6
        },
        {
          "path": "Never Let Me Go [2010].jpg",
          "name": "Never Let Me Go",
          "year": "2010",
          "rating": 4
        },
        {
          "path": "Never Surrender [2009].jpg",
          "name": "Never Surrender",
          "year": "2009",
          "rating": 4
        },
        {
          "path": "Next [2007].jpg",
          "name": "Next",
          "year": "2007",
          "rating": 6
        },
        {
          "path": "New York, I Love You [2008].jpg",
          "name": "New York, I Love You",
          "year": "2008",
          "rating": 6
        },
        {
          "path": "Night at the Museum 2.jpg",
          "name": "Night at the M",
          "year": "eum ",
          "rating": 8
        },
        {
          "path": "Now You See Me [2013].jpg",
          "name": "Now You See Me",
          "year": "2013",
          "rating": 8
        },
        {
          "path": "Notting Hill.jpg",
          "name": "Notti",
          "year": " Hil",
          "rating": 8
        },
        {
          "path": "Nude Nuns with Big Guns [].jpg",
          "name": "Nude Nuns with Big ",
          "year": "ns [",
          "rating": 2
        },
        {
          "path": "Ocean_s 11.jpg",
          "name": "Oce",
          "year": "_s 1",
          "rating": 8
        },
        {
          "path": "Ocean_s 12 [2004].jpg",
          "name": "Ocean_s 12",
          "year": "2004",
          "rating": 6
        },
        {
          "path": "Ocean_s 13.jpg",
          "name": "Oce",
          "year": "_s 1",
          "rating": 10
        },
        {
          "path": "Okja (2017).jpg",
          "name": "Okja",
          "year": "2017",
          "rating": 6
        },
        {
          "path": "No Strings Attached [2011].jpg",
          "name": "No Strings Attached",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "Open House [2010].jpg",
          "name": "Open House",
          "year": "2010",
          "rating": 2
        },
        {
          "path": "One Night Stand (2016).jpg",
          "name": "One Night Stand",
          "year": "2016",
          "rating": null
        },
        {
          "path": "Orphan [2009].jpg",
          "name": "Orphan",
          "year": "2009",
          "rating": 8
        },
        {
          "path": "P.S. I Love You [2007].jpg",
          "name": "P.S. I Love You",
          "year": "2007",
          "rating": 10
        },
        {
          "path": "M I 4 - Ghost Protocol [2011].jpg",
          "name": "M I 4 - Ghost Protocol",
          "year": "2011",
          "rating": 8
        },
        {
          "path": "Our Idiot Brother [2011].jpg",
          "name": "Our Idiot Brother",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "OMG Oh My God! [2012].jpg",
          "name": "OMG Oh My God!",
          "year": "2012",
          "rating": 8
        },
        {
          "path": "Padmaavat (2018).jpg",
          "name": "Padmaavat",
          "year": "2018",
          "rating": null
        },
        {
          "path": "Pati Patni Aur Woh (2019).jpg",
          "name": "Pati Patni Aur Woh",
          "year": "2019",
          "rating": null
        },
        {
          "path": "Pacific Rim [2013].jpg",
          "name": "Pacific Rim",
          "year": "2013",
          "rating": 4
        },
        {
          "path": "Patiala House [].jpg",
          "name": "Patiala H",
          "year": "se [",
          "rating": 6
        },
        {
          "path": "Penguins of Madagascar [2014].jpg",
          "name": "Penguins of Madagascar",
          "year": "2014",
          "rating": 6
        },
        {
          "path": "Pete_s Dragon (2016).jpg",
          "name": "Pete_s Dragon",
          "year": "2016",
          "rating": null
        },
        {
          "path": "Piranha 3DD [2012].jpg",
          "name": "Piranha 3DD",
          "year": "2012",
          "rating": 4
        },
        {
          "path": "Pirates of the Caribbean - Dead Men Tell No Tales (2017).jpg",
          "name": "Pirates of the Caribbean - Dead Men Tell No Tales",
          "year": "2017",
          "rating": 8
        },
        {
          "path": "Piranha [].jpg",
          "name": "Pir",
          "year": "ha [",
          "rating": 6
        },
        {
          "path": "Pirates of the Caribbean - At Worlds End [].jpg",
          "name": "Pirates of the Caribbean - At Worlds",
          "year": "nd [",
          "rating": 10
        },
        {
          "path": "Pirates of the Caribbean - The Curse of the Black Pearl [].jpg",
          "name": "Pirates of the Caribbean - The Curse of the Black P",
          "year": "rl [",
          "rating": 10
        },
        {
          "path": "Pirates of the Caribbean - Dead Man_s Chest [].jpg",
          "name": "Pirates of the Caribbean - Dead Man_s C",
          "year": "st [",
          "rating": 10
        },
        {
          "path": "Pirates of the Caribbean-On Stranger Tides [2011].jpg",
          "name": "Pirates of the Caribbean-On Stranger Tides",
          "year": "2011",
          "rating": 10
        },
        {
          "path": "PK [2014].jpg",
          "name": "PK",
          "year": "2014",
          "rating": 8
        },
        {
          "path": "Predators [2010].jpg",
          "name": "Predators",
          "year": "2010",
          "rating": 4
        },
        {
          "path": "Pitch Perfect [2012].jpg",
          "name": "Pitch Perfect",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "Project Almanac [2015].jpg",
          "name": "Project Almanac",
          "year": "2015",
          "rating": 6
        },
        {
          "path": "Pretty Woman.jpg",
          "name": "Prett",
          "year": "Woma",
          "rating": 8
        },
        {
          "path": "Project X [2012].jpg",
          "name": "Project X",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "Prince of Persia - The Sands of Time.jpg",
          "name": "Prince of Persia - The Sands ",
          "year": " Tim",
          "rating": 8
        },
        {
          "path": "Puss in Boots  [2011].jpg",
          "name": "Puss in Boots ",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "Prometheus [2012].jpg",
          "name": "Prometheus",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "Prom Night in Mississippi [2009].jpg",
          "name": "Prom Night in Mississippi",
          "year": "2009",
          "rating": 2
        },
        {
          "path": "Race 2 [2013].jpg",
          "name": "Race 2",
          "year": "2013",
          "rating": 4
        },
        {
          "path": "Ra-One [2011].jpg",
          "name": "Ra-One",
          "year": "2011",
          "rating": 4
        },
        {
          "path": "Raajneeti.jpg",
          "name": "Ra",
          "year": "neet",
          "rating": 8
        },
        {
          "path": "Pyaar Ka Punchnama [].jpg",
          "name": "Pyaar Ka Punch",
          "year": "ma [",
          "rating": 8
        },
        {
          "path": "Race to Witch Mountain [2009].jpg",
          "name": "Race to Witch Mountain",
          "year": "2009",
          "rating": 2
        },
        {
          "path": "Ragini MMS 2 [2014].jpg",
          "name": "Ragini MMS 2",
          "year": "2014",
          "rating": 6
        },
        {
          "path": "Ready [].jpg",
          "name": "R",
          "year": "dy [",
          "rating": 6
        },
        {
          "path": "Rascals [2011].jpg",
          "name": "Rascals",
          "year": "2011",
          "rating": 4
        },
        {
          "path": "Red Riding Hood [].jpg",
          "name": "Red Riding ",
          "year": "od [",
          "rating": 6
        },
        {
          "path": "Real Steel [2011].jpg",
          "name": "Real Steel",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "Rango [2011].jpg",
          "name": "Rango",
          "year": "2011",
          "rating": 8
        },
        {
          "path": "Return to the Blue Lagoon [1991].jpg",
          "name": "Return to the Blue Lagoon",
          "year": "1991",
          "rating": 4
        },
        {
          "path": "RocknRolla [].jpg",
          "name": "RocknR",
          "year": "la [",
          "rating": 6
        },
        {
          "path": "Rio [2011].jpg",
          "name": "Rio",
          "year": "2011",
          "rating": 8
        },
        {
          "path": "Robin Hood.jpg",
          "name": "Rob",
          "year": " Hoo",
          "rating": 10
        },
        {
          "path": "Raiders of the Lost Ark [1981].jpg",
          "name": "Raiders of the Lost Ark",
          "year": "1981",
          "rating": 6
        },
        {
          "path": "Rockstar [2011].jpg",
          "name": "Rockstar",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "Room in Rome [2010].jpg",
          "name": "Room in Rome",
          "year": "2010",
          "rating": 4
        },
        {
          "path": "Saints and Soldiers [2003].jpg",
          "name": "Saints and Soldiers",
          "year": "2003",
          "rating": 2
        },
        {
          "path": "Sahara [2005].jpg",
          "name": "Sahara",
          "year": "2005",
          "rating": 6
        },
        {
          "path": "Rush [2013].jpg",
          "name": "Rush",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "Safe Haven [2013].jpg",
          "name": "Safe Haven",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "Sanju (2018).jpg",
          "name": "Sanju",
          "year": "2018",
          "rating": 6
        },
        {
          "path": "Salvage [2009].jpg",
          "name": "Salvage",
          "year": "2009",
          "rating": 4
        },
        {
          "path": "Sausage Party (2016).jpg",
          "name": "Sausage Party",
          "year": "2016",
          "rating": null
        },
        {
          "path": "Satyagraha [2013].jpg",
          "name": "Satyagraha",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "Scent of a Woman (1992).jpg",
          "name": "Scent of a Woman",
          "year": "1992",
          "rating": 6
        },
        {
          "path": "Saving Private Ryan.jpg",
          "name": "Saving Priva",
          "year": " Rya",
          "rating": 8
        },
        {
          "path": "Schindler_s List [1993].jpg",
          "name": "Schindler_s List",
          "year": "1993",
          "rating": 10
        },
        {
          "path": "Salt.jpg",
          "name": "",
          "year": "g",
          "rating": 6
        },
        {
          "path": "Scott Pilgrim vs. the World [2010].jpg",
          "name": "Scott Pilgrim vs. the World",
          "year": "2010",
          "rating": 4
        },
        {
          "path": "Secret of the Wings [2012].jpg",
          "name": "Secret of the Wings",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "Season of the Witch [].jpg",
          "name": "Season of the W",
          "year": "ch [",
          "rating": 6
        },
        {
          "path": "Seven Years in Tibet (1997).jpg",
          "name": "Seven Years in Tibet",
          "year": "1997",
          "rating": null
        },
        {
          "path": "Sex and Lucia [2001].jpg",
          "name": "Sex and Lucia",
          "year": "2001",
          "rating": 2
        },
        {
          "path": "Shadowland.jpg",
          "name": "Shad",
          "year": "land",
          "rating": 8
        },
        {
          "path": "Shallow Hal [2001].jpg",
          "name": "Shallow Hal",
          "year": "2001",
          "rating": 4
        },
        {
          "path": "Shattered [].jpg",
          "name": "Shatt",
          "year": "ed [",
          "rating": 8
        },
        {
          "path": "Sherlock Holmes - A Game of Shadows [2011].jpg",
          "name": "Sherlock Holmes - A Game of Shadows",
          "year": "2011",
          "rating": 10
        },
        {
          "path": "Seven Pounds [].jpg",
          "name": "Seven Po",
          "year": "ds [",
          "rating": 4
        },
        {
          "path": "She_s Out of My League [2010].jpg",
          "name": "She_s Out of My League",
          "year": "2010",
          "rating": 8
        },
        {
          "path": "Showgirls [1995].jpg",
          "name": "Showgirls",
          "year": "1995",
          "rating": 4
        },
        {
          "path": "Ship of Theseus [2013].jpg",
          "name": "Ship of Theseus",
          "year": "2013",
          "rating": 4
        },
        {
          "path": "Shrek the Third.jpg",
          "name": "Shrek th",
          "year": "Thir",
          "rating": 8
        },
        {
          "path": "Shuddh Desi Romance [2013].jpg",
          "name": "Shuddh Desi Romance",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "Shutter Island [2010].jpg",
          "name": "Shutter Island",
          "year": "2010",
          "rating": 8
        },
        {
          "path": "Shutter [].jpg",
          "name": "Shu",
          "year": "er [",
          "rating": 6
        },
        {
          "path": "Signs [2002].jpg",
          "name": "Signs",
          "year": "2002",
          "rating": 2
        },
        {
          "path": "Silver Linings Playbook (2012).jpg",
          "name": "Silver Linings Playbook",
          "year": "2012",
          "rating": null
        },
        {
          "path": "Singham [2011].jpg",
          "name": "Singham",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "Sinister [2012].jpg",
          "name": "Sinister",
          "year": "2012",
          "rating": 4
        },
        {
          "path": "Singh Is Bliing [2015].jpg",
          "name": "Singh Is Bliing",
          "year": "2015",
          "rating": 4
        },
        {
          "path": "Skin Deep.jpg",
          "name": "Sk",
          "year": " Dee",
          "rating": 6
        },
        {
          "path": "Skyfall [2012].jpg",
          "name": "Skyfall",
          "year": "2012",
          "rating": 8
        },
        {
          "path": "Slave [].jpg",
          "name": "S",
          "year": "ve [",
          "rating": 4
        },
        {
          "path": "Snow White and the Huntsman  [2012].jpg",
          "name": "Snow White and the Huntsman ",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "Sleepy Hollow [].jpg",
          "name": "Sleepy Ho",
          "year": "ow [",
          "rating": 6
        },
        {
          "path": "Sherlock Holmes [2009].jpg",
          "name": "Sherlock Holmes",
          "year": "2009",
          "rating": 10
        },
        {
          "path": "Source Code [2011].jpg",
          "name": "Source Code",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "Someone Like You... [2001].jpg",
          "name": "Someone Like You...",
          "year": "2001",
          "rating": 6
        },
        {
          "path": "Shrek Forever After [2010].jpg",
          "name": "Shrek Forever After",
          "year": "2010",
          "rating": 6
        },
        {
          "path": "Special 26 [2013].jpg",
          "name": "Special 26",
          "year": "2013",
          "rating": 10
        },
        {
          "path": "Spread [2009].jpg",
          "name": "Spread",
          "year": "2009",
          "rating": 6
        },
        {
          "path": "Stardust [2007].jpg",
          "name": "Stardust",
          "year": "2007",
          "rating": 8
        },
        {
          "path": "Step Up Revolution [2012].jpg",
          "name": "Step Up Revolution",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "Storks (2016).jpg",
          "name": "Storks",
          "year": "2016",
          "rating": 6
        },
        {
          "path": "Stree (2018).jpg",
          "name": "Stree",
          "year": "2018",
          "rating": 6
        },
        {
          "path": "Solomon Kane.jpg",
          "name": "Solom",
          "year": " Kan",
          "rating": 8
        },
        {
          "path": "Sully (2016).jpg",
          "name": "Sully",
          "year": "2016",
          "rating": null
        },
        {
          "path": "Survival Island [2005].jpg",
          "name": "Survival Island",
          "year": "2005",
          "rating": 6
        },
        {
          "path": "Sunshine [2007].jpg",
          "name": "Sunshine",
          "year": "2007",
          "rating": 4
        },
        {
          "path": "Superhero Movie [2008].jpg",
          "name": "Superhero Movie",
          "year": "2008",
          "rating": 2
        },
        {
          "path": "Taken 2 [2012].jpg",
          "name": "Taken 2",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "Tamasha [2015].jpg",
          "name": "Tamasha",
          "year": "2015",
          "rating": 6
        },
        {
          "path": "Tanu Weds Manu Returns [2015].jpg",
          "name": "Tanu Weds Manu Returns",
          "year": "2015",
          "rating": 8
        },
        {
          "path": "Tears of the Sun [2003].jpg",
          "name": "Tears of the Sun",
          "year": "2003",
          "rating": 8
        },
        {
          "path": "The 40 Year Old Virgin [2005].jpg",
          "name": "The 40 Year Old Virgin",
          "year": "2005",
          "rating": 6
        },
        {
          "path": "The Adventures of Tintin [2011].jpg",
          "name": "The Adventures of Tintin",
          "year": "2011",
          "rating": 8
        },
        {
          "path": "The A-Team.jpg",
          "name": "The",
          "year": "-Tea",
          "rating": 8
        },
        {
          "path": "Th Fall [].jpg",
          "name": "Th ",
          "year": "ll [",
          "rating": 4
        },
        {
          "path": "The Best Offer [2013].jpg",
          "name": "The Best Offer",
          "year": "2013",
          "rating": 8
        },
        {
          "path": "The Book Thief [2013].jpg",
          "name": "The Book Thief",
          "year": "2013",
          "rating": 8
        },
        {
          "path": "The Blue Lagoon [1980].jpg",
          "name": "The Blue Lagoon",
          "year": "1980",
          "rating": 4
        },
        {
          "path": "The Amazing Spider-Man [2012].jpg",
          "name": "The Amazing Spider-Man",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "The Captive [2014].jpg",
          "name": "The Captive",
          "year": "2014",
          "rating": 6
        },
        {
          "path": "The Campaign [2012].jpg",
          "name": "The Campaign",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "The Cabin in the Woods [2012].jpg",
          "name": "The Cabin in the Woods",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "The Conjuring 2 [2016].jpg",
          "name": "The Conjuring 2",
          "year": "2016",
          "rating": 8
        },
        {
          "path": "The Conjuring [2013].jpg",
          "name": "The Conjuring",
          "year": "2013",
          "rating": 10
        },
        {
          "path": "The Croods (2013).jpg",
          "name": "The Croods",
          "year": "2013",
          "rating": null
        },
        {
          "path": "The Curious Case of Benjamin Button [2008].jpg",
          "name": "The Curious Case of Benjamin Button",
          "year": "2008",
          "rating": 6
        },
        {
          "path": "The Dark Knight Rises [2012].jpg",
          "name": "The Dark Knight Rises",
          "year": "2012",
          "rating": 10
        },
        {
          "path": "The Departed [2006].jpg",
          "name": "The Departed",
          "year": "2006",
          "rating": 6
        },
        {
          "path": "Swordfish [2001].jpg",
          "name": "Swordfish",
          "year": "2001",
          "rating": 6
        },
        {
          "path": "The Descent - Part2 [2012].jpg",
          "name": "The Descent - Part2",
          "year": "2012",
          "rating": 8
        },
        {
          "path": "The Descent [2005].jpg",
          "name": "The Descent",
          "year": "2005",
          "rating": 8
        },
        {
          "path": "The Devil Wears Prada [2006].jpg",
          "name": "The Devil Wears Prada",
          "year": "2006",
          "rating": 6
        },
        {
          "path": "The Darjeeling Limited [2007].jpg",
          "name": "The Darjeeling Limited",
          "year": "2007",
          "rating": 6
        },
        {
          "path": "The Dictator [2012].jpg",
          "name": "The Dictator",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "The Dirty Picture [2011].jpg",
          "name": "The Dirty Picture",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "The DUFF (2015).jpg",
          "name": "The DUFF",
          "year": "2015",
          "rating": 6
        },
        {
          "path": "The Fate of the Furious (2017).jpg",
          "name": "The Fate of the Furious",
          "year": "2017",
          "rating": 6
        },
        {
          "path": "The Disappearance of Alice Creed [].jpg",
          "name": "The Disappearance of Alice C",
          "year": "ed [",
          "rating": 4
        },
        {
          "path": "The Fault in Our Stars (2014).jpg",
          "name": "The Fault in Our Stars",
          "year": "2014",
          "rating": 6
        },
        {
          "path": "The Fighter [2010].jpg",
          "name": "The Fighter",
          "year": "2010",
          "rating": 6
        },
        {
          "path": "The Girl With the Dragon Tattoo [2011].jpg",
          "name": "The Girl With the Dragon Tattoo",
          "year": "2011",
          "rating": 8
        },
        {
          "path": "The Girl Next Door [2004].jpg",
          "name": "The Girl Next Door",
          "year": "2004",
          "rating": 6
        },
        {
          "path": "The First Time [2012].jpg",
          "name": "The First Time",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "The Good Dinosaur (2015).jpg",
          "name": "The Good Dinosaur",
          "year": "2015",
          "rating": 8
        },
        {
          "path": "The Hangover Part 2 [2011].jpg",
          "name": "The Hangover Part 2",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "The Grand Budapest Hotel (2014).jpg",
          "name": "The Grand Budapest Hotel",
          "year": "2014",
          "rating": null
        },
        {
          "path": "The Hobbit - The Battle of the Five Armies [2014].jpg",
          "name": "The Hobbit - The Battle of the Five Armies",
          "year": "2014",
          "rating": 6
        },
        {
          "path": "The Hangover Part III [2013].jpg",
          "name": "The Hangover Part III",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "The Hobbit An - Unexpected Journey [2012].jpg",
          "name": "The Hobbit An - Unexpected Journey",
          "year": "2012",
          "rating": 8
        },
        {
          "path": "The Human Centipede [2009].jpg",
          "name": "The Human Centipede",
          "year": "2009",
          "rating": 2
        },
        {
          "path": "The Hunger Games [2012].jpg",
          "name": "The Hunger Games",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "The Hunt for Red October (1990).jpg",
          "name": "The Hunt for Red October",
          "year": "1990",
          "rating": 8
        },
        {
          "path": "The Huntsman- Winter_s War (2016).jpg",
          "name": "The Huntsman- Winter_s War",
          "year": "2016",
          "rating": 6
        },
        {
          "path": "The Hurt Locker.jpg",
          "name": "The Hurt",
          "year": "ocke",
          "rating": 6
        },
        {
          "path": "The Chronicles of Narnia - The Voyage of the Dawn Treader [2010].jpg",
          "name": "The Chronicles of Narnia - The Voyage of the Dawn Treader",
          "year": "2010",
          "rating": 6
        },
        {
          "path": "The Illusionist [2006].jpg",
          "name": "The Illusionist",
          "year": "2006",
          "rating": 8
        },
        {
          "path": "The Incredible Hulk [2008].jpg",
          "name": "The Incredible Hulk",
          "year": "2008",
          "rating": 8
        },
        {
          "path": "The Imitation Game (2014).jpg",
          "name": "The Imitation Game",
          "year": "2014",
          "rating": 8
        },
        {
          "path": "The Jacket [].jpg",
          "name": "The Ja",
          "year": "et [",
          "rating": 6
        },
        {
          "path": "The Intern [2015].jpg",
          "name": "The Intern",
          "year": "2015",
          "rating": 6
        },
        {
          "path": "The Ivory Game (2016).jpg",
          "name": "The Ivory Game",
          "year": "2016",
          "rating": null
        },
        {
          "path": "The Last House on the Left.jpg",
          "name": "The Last House on t",
          "year": " Lef",
          "rating": 6
        },
        {
          "path": "The Jungle Book [2016].jpg",
          "name": "The Jungle Book",
          "year": "2016",
          "rating": 10
        },
        {
          "path": "The Last Airbender [].JPG",
          "name": "The Last Airbe",
          "year": "er [",
          "rating": 6
        },
        {
          "path": "The Last Legion [2007].jpg",
          "name": "The Last Legion",
          "year": "2007",
          "rating": 4
        },
        {
          "path": "The Legend of Hercules (2014).jpg",
          "name": "The Legend of Hercules",
          "year": "2014",
          "rating": 2
        },
        {
          "path": "The King_s Speech [].jpg",
          "name": "The King_s Spe",
          "year": "h []",
          "rating": 6
        },
        {
          "path": "The Lego Movie [2014].jpg",
          "name": "The Lego Movie",
          "year": "2014",
          "rating": 4
        },
        {
          "path": "The Lone Ranger [2013].jpg",
          "name": "The Lone Ranger",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "The Lion King (2019).jpg",
          "name": "The Lion King",
          "year": "2019",
          "rating": null
        },
        {
          "path": "The Lord of the Rings -The Two Towers [].jpg",
          "name": "The Lord of the Rings -The Two To",
          "year": "rs [",
          "rating": 8
        },
        {
          "path": "The Love Guru [2008].jpg",
          "name": "The Love Guru",
          "year": "2008",
          "rating": 4
        },
        {
          "path": "The Lunchbox [2013].jpg",
          "name": "The Lunchbox",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "The Lord of the Rings- The Return of the King [].jpg",
          "name": "The Lord of the Rings- The Return of the ",
          "year": "ng [",
          "rating": 10
        },
        {
          "path": "The Martian [2015].jpg",
          "name": "The Martian",
          "year": "2015",
          "rating": 8
        },
        {
          "path": "The Lord of the Rings- The Fellowship of the Ring [].jpg",
          "name": "The Lord of the Rings- The Fellowship of the ",
          "year": "ng [",
          "rating": 6
        },
        {
          "path": "The Maze Runner [2014].jpg",
          "name": "The Maze Runner",
          "year": "2014",
          "rating": 6
        },
        {
          "path": "The Notebook.jpg",
          "name": "The N",
          "year": "eboo",
          "rating": 10
        },
        {
          "path": "The Mummy 3-Tomb Of The Dragon Emperor.jpg",
          "name": "The Mummy 3-Tomb Of The Dragon ",
          "year": "pero",
          "rating": 6
        },
        {
          "path": "The Mechanic [].jpg",
          "name": "The Mech",
          "year": "ic [",
          "rating": 6
        },
        {
          "path": "The Other Guys [2010].jpg",
          "name": "The Other Guys",
          "year": "2010",
          "rating": 4
        },
        {
          "path": "The Peacemaker.jpg",
          "name": "The Pea",
          "year": "make",
          "rating": 6
        },
        {
          "path": "The Pianist [].jpg",
          "name": "The Pia",
          "year": "st [",
          "rating": 8
        },
        {
          "path": "The Other End of the Line [2008].jpg",
          "name": "The Other End of the Line",
          "year": "2008",
          "rating": 8
        },
        {
          "path": "The Prestige [2006].jpg",
          "name": "The Prestige",
          "year": "2006",
          "rating": 8
        },
        {
          "path": "The Reader [2008].jpg",
          "name": "The Reader",
          "year": "2008",
          "rating": 6
        },
        {
          "path": "The Ring [2002].jpg",
          "name": "The Ring",
          "year": "2002",
          "rating": 8
        },
        {
          "path": "The Passion of the Christ  [].jpg",
          "name": "The Passion of the Chr",
          "year": "t  [",
          "rating": 6
        },
        {
          "path": "The Secret [].jpg",
          "name": "The Se",
          "year": "et [",
          "rating": 6
        },
        {
          "path": "The Shawshank Redemption [].jpg",
          "name": "The Shawshank Redemp",
          "year": "on [",
          "rating": 8
        },
        {
          "path": "The Sixth Sense.jpg",
          "name": "The Sixt",
          "year": "Sens",
          "rating": 6
        },
        {
          "path": "The Sorcerer_s Apprentice.jpg",
          "name": "The Sorcerer_s App",
          "year": "ntic",
          "rating": 6
        },
        {
          "path": "The Hobbit-The Desolation of Smaug [2013].jpg",
          "name": "The Hobbit-The Desolation of Smaug",
          "year": "2013",
          "rating": 8
        },
        {
          "path": "The Talented Mr. Ripley (1999).jpg",
          "name": "The Talented Mr. Ripley",
          "year": "1999",
          "rating": 8
        },
        {
          "path": "The Terminal [2004].jpg",
          "name": "The Terminal",
          "year": "2004",
          "rating": 8
        },
        {
          "path": "The Spy Next Door [2010].jpg",
          "name": "The Spy Next Door",
          "year": "2010",
          "rating": 6
        },
        {
          "path": "The Theory of Everything (2014).jpg",
          "name": "The Theory of Everything",
          "year": "2014",
          "rating": 6
        },
        {
          "path": "The Tourist [].jpg",
          "name": "The Tou",
          "year": "st [",
          "rating": 6
        },
        {
          "path": "The Thing [2011].jpg",
          "name": "The Thing",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "The Time Travelers Wife [2009].jpg",
          "name": "The Time Travelers Wife",
          "year": "2009",
          "rating": 6
        },
        {
          "path": "The Ugly Truth [2009].jpg",
          "name": "The Ugly Truth",
          "year": "2009",
          "rating": 6
        },
        {
          "path": "The Trouble with Romance.jpg",
          "name": "The Trouble with ",
          "year": "manc",
          "rating": 6
        },
        {
          "path": "The Town.jpg",
          "name": "T",
          "year": " Tow",
          "rating": 8
        },
        {
          "path": "The Way Back [].jpg",
          "name": "The Way ",
          "year": "ck [",
          "rating": 8
        },
        {
          "path": "The Wolf of Wall Street (2013).jpg",
          "name": "The Wolf of Wall Street",
          "year": "2013",
          "rating": 8
        },
        {
          "path": "The Social Network.jpg",
          "name": "The Social ",
          "year": "twor",
          "rating": 10
        },
        {
          "path": "Tinker Bell and The Great Fairy Rescue.jpg",
          "name": "Tinker Bell and The Great Fairy",
          "year": "escu",
          "rating": 6
        },
        {
          "path": "The Wolverine [2013].jpg",
          "name": "The Wolverine",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "Tinker Bell and the Lost Treasure.jpg",
          "name": "Tinker Bell and the Lost T",
          "year": "asur",
          "rating": 8
        },
        {
          "path": "Too Big to Fail (2011).jpg",
          "name": "Too Big to Fail",
          "year": "2011",
          "rating": 8
        },
        {
          "path": "Titanic 3D [2012].jpg",
          "name": "Titanic 3D",
          "year": "2012",
          "rating": 10
        },
        {
          "path": "Transformers - Age of Extinction [2014].jpg",
          "name": "Transformers - Age of Extinction",
          "year": "2014",
          "rating": 8
        },
        {
          "path": "Tinker Bell.jpg",
          "name": "Tink",
          "year": " Bel",
          "rating": 6
        },
        {
          "path": "Transformers 3 - Dark of the Moon [2011].jpg",
          "name": "Transformers 3 - Dark of the Moon",
          "year": "2011",
          "rating": 8
        },
        {
          "path": "The Waterboy [1998].jpg",
          "name": "The Waterboy",
          "year": "1998",
          "rating": 4
        },
        {
          "path": "Tropic Thunder [2008].jpg",
          "name": "Tropic Thunder",
          "year": "2008",
          "rating": 4
        },
        {
          "path": "Trouble with the Curve [2012].jpg",
          "name": "Trouble with the Curve",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "Turistas [2006].jpg",
          "name": "Turistas",
          "year": "2006",
          "rating": 6
        },
        {
          "path": "Troy [2004].jpg",
          "name": "Troy",
          "year": "2004",
          "rating": 10
        },
        {
          "path": "Ugly [2014].jpg",
          "name": "Ugly",
          "year": "2014",
          "rating": 6
        },
        {
          "path": "Ujda Chaman (2019).jpg",
          "name": "Ujda Chaman",
          "year": "2019",
          "rating": null
        },
        {
          "path": "Udta Punjab [2016].jpg",
          "name": "Udta Punjab",
          "year": "2016",
          "rating": 6
        },
        {
          "path": "Unbroken [2015].jpg",
          "name": "Unbroken",
          "year": "2015",
          "rating": 6
        },
        {
          "path": "Unfaithful [2002].jpg",
          "name": "Unfaithful",
          "year": "2002",
          "rating": 8
        },
        {
          "path": "Underworld -Awakening [2012].jpg",
          "name": "Underworld -Awakening",
          "year": "2012",
          "rating": 6
        },
        {
          "path": "UP.jpg",
          "name": "",
          "year": "jpg",
          "rating": 10
        },
        {
          "path": "Up in the Air [2009].jpg",
          "name": "Up in the Air",
          "year": "2009",
          "rating": 6
        },
        {
          "path": "Uri- The Surgical Strike (2019).jpg",
          "name": "Uri- The Surgical Strike",
          "year": "2019",
          "rating": 10
        },
        {
          "path": "Valentine_s Day [2010].jpg",
          "name": "Valentine_s Day",
          "year": "2010",
          "rating": 6
        },
        {
          "path": "Van Wilder 2 - The Rise of Taj [2006].jpg",
          "name": "Van Wilder 2 - The Rise of Taj",
          "year": "2006",
          "rating": 6
        },
        {
          "path": "Van Wilder-  Freshman Year [2009].jpg",
          "name": "Van Wilder-  Freshman Year",
          "year": "2009",
          "rating": 6
        },
        {
          "path": "Van Wilder [2002].jpg",
          "name": "Van Wilder",
          "year": "2002",
          "rating": 6
        },
        {
          "path": "Varsity Blues.jpg",
          "name": "Varsit",
          "year": "Blue",
          "rating": 6
        },
        {
          "path": "Veronica Mars [2014].jpg",
          "name": "Veronica Mars",
          "year": "2014",
          "rating": 6
        },
        {
          "path": "View from the Top [2003].jpg",
          "name": "View from the Top",
          "year": "2003",
          "rating": 6
        },
        {
          "path": "Veer [2010].jpg",
          "name": "Veer",
          "year": "2010",
          "rating": 4
        },
        {
          "path": "WALL·E (2008).jpg",
          "name": "WALL·E",
          "year": "2008",
          "rating": null
        },
        {
          "path": "Vicky Donor [2012].jpg",
          "name": "Vicky Donor",
          "year": "2012",
          "rating": 10
        },
        {
          "path": "War Horse [2011].jpg",
          "name": "War Horse",
          "year": "2011",
          "rating": 8
        },
        {
          "path": "Welcome Back [2015].jpg",
          "name": "Welcome Back",
          "year": "2015",
          "rating": 4
        },
        {
          "path": "Water for Elephants (2011).jpg",
          "name": "Water for Elephants",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "We are Family [2010].jpg",
          "name": "We are Family",
          "year": "2010",
          "rating": 2
        },
        {
          "path": "We_re the Millers [2013].jpg",
          "name": "We_re the Millers",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "Wet Hot American Summer [2001].jpg",
          "name": "Wet Hot American Summer",
          "year": "2001",
          "rating": 2
        },
        {
          "path": "What_s Your Number [2011].jpg",
          "name": "What_s Your Number",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "What Happens in Vegas.jpg",
          "name": "What Happens i",
          "year": "Vega",
          "rating": 6
        },
        {
          "path": "What Women Want [2000].jpg",
          "name": "What Women Want",
          "year": "2000",
          "rating": 6
        },
        {
          "path": "Who_s Your Daddy [2003].jpg",
          "name": "Who_s Your Daddy",
          "year": "2003",
          "rating": 6
        },
        {
          "path": "Wild Karnataka (2020).jpg",
          "name": "Wild Karnataka",
          "year": "2020",
          "rating": null
        },
        {
          "path": "Winter_s Bone [].jpg",
          "name": "Winter_s ",
          "year": "ne [",
          "rating": 4
        },
        {
          "path": "Wild Things Foursome.jpg",
          "name": "Wild Things F",
          "year": "rsom",
          "rating": 6
        },
        {
          "path": "Wonder Woman (2017).jpg",
          "name": "Wonder Woman",
          "year": "2017",
          "rating": 6
        },
        {
          "path": "When In Rome [].jpg",
          "name": "When In ",
          "year": "me [",
          "rating": 6
        },
        {
          "path": "Wrath of the Titans [2012].jpg",
          "name": "Wrath of the Titans",
          "year": "2012",
          "rating": 4
        },
        {
          "path": "Wrong Turn 5-Bloodlines [2012].jpg",
          "name": "Wrong Turn 5-Bloodlines",
          "year": "2012",
          "rating": 4
        },
        {
          "path": "Wrong Turn 4 [2011].jpg",
          "name": "Wrong Turn 4",
          "year": "2011",
          "rating": 6
        },
        {
          "path": "X-Men - Days of Future Past [2014].jpg",
          "name": "X-Men - Days of Future Past",
          "year": "2014",
          "rating": 8
        },
        {
          "path": "X-Men - Apocalypse [2016].jpg",
          "name": "X-Men - Apocalypse",
          "year": "2016",
          "rating": 6
        },
        {
          "path": "Wrong Turn 3-Left for Dead [2009].JPG",
          "name": "Wrong Turn 3-Left for Dead",
          "year": "2009",
          "rating": 6
        },
        {
          "path": "Yaariyan [2014].jpg",
          "name": "Yaariyan",
          "year": "2014",
          "rating": 4
        },
        {
          "path": "X-Men Origins - Wolverine.jpg",
          "name": "X-Men Origins - Wo",
          "year": "erin",
          "rating": 8
        },
        {
          "path": "Yeh Jawaani Hai Deewani [2013].jpg",
          "name": "Yeh Jawaani Hai Deewani",
          "year": "2013",
          "rating": 6
        },
        {
          "path": "Yes Man.jpg",
          "name": "",
          "year": "s Ma",
          "rating": 10
        },
        {
          "path": "X-Men - First Class [2011].jpg",
          "name": "X-Men - First Class",
          "year": "2011",
          "rating": 10
        },
        {
          "path": "You Again [2010].jpg",
          "name": "You Again",
          "year": "2010",
          "rating": 6
        },
        {
          "path": "Year One [2009].jpg",
          "name": "Year One",
          "year": "2009",
          "rating": 4
        },
        {
          "path": "Yours, Mine and Ours [2005].jpg",
          "name": "Yours, Mine and Ours",
          "year": "2005",
          "rating": 4
        },
        {
          "path": "Zindagi Na Milegi Dobara (2011).jpg",
          "name": "Zindagi Na Milegi Dobara",
          "year": "2011",
          "rating": 10
        },
        {
          "path": "Zack and Miri Make a Porno [].jpg",
          "name": "Zack and Miri Make a P",
          "year": "no [",
          "rating": 4
        },
        {
          "path": "Zootopia (2016).jpg",
          "name": "Zootopia",
          "year": "2016",
          "rating": 8
        },
        {
          "path": "TRON - Legacy [2010].jpg",
          "name": "TRON - Legacy",
          "year": "2010",
          "rating": 2
        }
      ];

      movies.forEach(function(obj) {
        db.collection("movies").add({
            path: obj.path,
            name: obj.name,
            year: obj.year,
            rating: obj.rating
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    });