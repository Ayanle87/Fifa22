// Nassim code
//cristiano
let cristiano = fetch(
  "https://soccer.sportmonks.com/api/v2.0/players/580?api_token=pQXodf4AFlvVE1CgwTqcKIIXNk8iiN6KxB8NjtrLuy6dVmQGGPGarnYQhhKq&include=stats&season=19734"
)
  .then((response) => response.json())
  .then((resultcr) => {
    let appearences = resultcr.data.stats.data[0].appearences;
    let goals = resultcr.data.stats.data[0].goals;
    let name = resultcr.data.display_name;
    let assists = resultcr.data.stats.data[0].assists;
    let nationalteam = resultcr.data.nationality;
    let yellowcard = resultcr.data.stats.data[0].yellowcards;
    let redcard = resultcr.data.stats.data[0].yellowred;
    let minutesplayed = resultcr.data.stats.data[0].minutes;
    document.getElementById("cr7matcher").textContent = appearences;
    document.getElementById("cr7mål").textContent = goals;
    document.getElementById("cr7assists").textContent = assists;
    document.getElementById("cr7minuter").textContent = minutesplayed;
    document.getElementById("cr7gul").textContent = yellowcard;
    document.getElementById("cr7röd").textContent = redcard;
    document.getElementById("nationalteamcr").textContent = nationalteam;
    document.getElementById("cr7namn").textContent = name;
  });

//messi
let messi = fetch(
  "https://soccer.sportmonks.com/api/v2.0/players/184798?api_token=pQXodf4AFlvVE1CgwTqcKIIXNk8iiN6KxB8NjtrLuy6dVmQGGPGarnYQhhKq&include=stats&season=19745"
)
  .then((response) => response.json())
  .then((messi) => {
    let appearences = messi.data.stats.data[0].appearences;
    let goals = messi.data.stats.data[0].goals;
    let assists = messi.data.stats.data[0].assists;
    let nationalteam = messi.data.nationality;
    let yellowcard = messi.data.stats.data[0].yellowcards;
    let redcard = messi.data.stats.data[0].yellowred;
    let minutesplayed = messi.data.stats.data[0].minutes;
    document.getElementById("messimatcher").textContent = appearences;
    document.getElementById("messimål").textContent = goals;
    document.getElementById("messiassist").textContent = assists;
    document.getElementById("messiminuter").textContent = minutesplayed;
    document.getElementById("messigul").textContent = yellowcard;
    document.getElementById("messiröd").textContent = redcard;
    document.getElementById("nationalteammessi").textContent = nationalteam;
  });
//benz

let benzema = fetch(
  "https://soccer.sportmonks.com/api/v2.0/players/93948?api_token=pQXodf4AFlvVE1CgwTqcKIIXNk8iiN6KxB8NjtrLuy6dVmQGGPGarnYQhhKq&include=stats&season=19799"
)
  .then((response) => response.json())
  .then((result) => {
    let appearences = result.data.stats.data[0].appearences;
    let goals = result.data.stats.data[0].goals;
    let name = result.data.display_name;
    let assists = result.data.stats.data[0].assists;
    let nationalteam = result.data.nationality;
    let yellowcard = result.data.stats.data[0].yellowcards;
    let redcard = result.data.stats.data[0].yellowred;
    let minutesplayed = result.data.stats.data[0].minutes;
    document.getElementById("benzmatcher").textContent = appearences;
    document.getElementById("benzmål").textContent = goals;
    document.getElementById("benzassist").textContent = assists;
    document.getElementById("benzminuter").textContent = minutesplayed;
    document.getElementById("benzgul").textContent = yellowcard;
    document.getElementById("benzröd").textContent = redcard;
    document.getElementById("nationalteambenz").textContent = nationalteam;
    document.getElementById("benznamn").textContent = name;
  });

//mbappe

let mbappe = fetch(
  "https://soccer.sportmonks.com/api/v2.0/players/96611?api_token=pQXodf4AFlvVE1CgwTqcKIIXNk8iiN6KxB8NjtrLuy6dVmQGGPGarnYQhhKq&include=stats&season=19745"
)
  .then((response) => response.json())
  .then((result) => {
    let appearences = result.data.stats.data[0].appearences;
    let goals = result.data.stats.data[0].goals;
    let name = result.data.display_name;
    let assists = result.data.stats.data[0].assists;
    let nationalteam = result.data.nationality;
    let yellowcard = result.data.stats.data[0].yellowcards;
    let redcard = result.data.stats.data[0].yellowred;
    let minutesplayed = result.data.stats.data[0].minutes;
    document.getElementById("kylianmatcher").textContent = appearences;
    document.getElementById("kylianmål").textContent = goals;
    document.getElementById("kylianassist").textContent = assists;
    document.getElementById("kylianminuter").textContent = minutesplayed;
    document.getElementById("kyliangul").textContent = yellowcard;
    document.getElementById("kylianröd").textContent = redcard;
    document.getElementById("nationalteamkylian").textContent = nationalteam;
    document.getElementById("kyliannamn").textContent = name;
  });

//neymar

let neymar = fetch(
  "https://soccer.sportmonks.com/api/v2.0/players/186320?api_token=pQXodf4AFlvVE1CgwTqcKIIXNk8iiN6KxB8NjtrLuy6dVmQGGPGarnYQhhKq&include=stats&season=19745"
)
  .then((response) => response.json())
  .then((result) => {
    let appearences = result.data.stats.data[0].appearences;
    let goals = result.data.stats.data[0].goals;
    let name = result.data.display_name;
    let assists = result.data.stats.data[0].assists;
    let nationalteam = result.data.nationality;
    let yellowcard = result.data.stats.data[0].yellowcards;
    let redcard = result.data.stats.data[0].yellowred;
    let minutesplayed = result.data.stats.data[0].minutes;
    document.getElementById("neymarmatcher").textContent = appearences;
    document.getElementById("neymarmål").textContent = goals;
    document.getElementById("neymarassist").textContent = assists;
    document.getElementById("neymarminuter").textContent = minutesplayed;
    document.getElementById("neymargul").textContent = yellowcard;
    document.getElementById("neymarröd").textContent = redcard;
    document.getElementById("nationalteamneymar").textContent = nationalteam;
    document.getElementById("neymarnamn").textContent = name;
  });

///Nasssim code

/// countdown
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector(".days");
  const hoursSpan = clock.querySelector(".hours");
  const minutesSpan = clock.querySelector(".minutes");
  const secondsSpan = clock.querySelector(".seconds");
  function updateClock() {
    const t = getTimeRemaining(endtime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}
const deadline = new Date(Date.parse(new Date()) + 8 * 23 * 56 * 70 * 1000);
initializeClock("clockdiv", deadline);
///countdown

/// Ayanle code match schema
function fetchData() {
  fetch(
    "https://soccer.sportmonks.com/api/v2.0/seasons/18017?api_token=z4ZkB12UAwagtBERZTJOHhx7mmQpkKIW0HBFwbTEgaRcSzontmqMZdIRcLd6&include=stages.fixtures.localTeam,stages.fixtures.visitorTeam"
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      games = result.data.stages.data[5].fixtures.data;

      console.log(games[0]);

      games.forEach((element) => {
        let gamecontainer = document.querySelector(".container");

        let titlebox = document.createElement("div");
        let hemmadiv = document.createElement("div");
        let bortadiv = document.createElement("div");
        let goalbox = document.createElement("div");
        let goals = document.createElement("p");
        let homeName = document.createElement("p");
        let awayName = document.createElement("p");
        let matchstart = document.createElement("p");
        let homeLogo = document.createElement("img");
        let awayLogo = document.createElement("img");

        hemmadiv.appendChild(homeName);
        hemmadiv.appendChild(homeLogo);
        goalbox.appendChild(matchstart);
        bortadiv.appendChild(awayName);
        bortadiv.appendChild(awayLogo);

        titlebox.appendChild(hemmadiv);
        titlebox.appendChild(goalbox);
        titlebox.appendChild(bortadiv);

        titlebox.classList.add("titlebox");
        goals.classList.add("resultat");
        matchstart.classList.add("start");
        hemmadiv.classList.add("hemmadiv");
        bortadiv.classList.add("bortadiv");
        homeName.classList.add("teamnames");
        goalbox.classList.add("goalbox");
        awayName.classList.add("teamnames");
        awayLogo.classList.add("awaylogo");
        homeLogo.classList.add("homelogo");

        console.log(element);
        hemmadiv.appendChild(homeName).textContent =
          element.localTeam.data.name;
        bortadiv.appendChild(awayName).textContent =
          element.visitorTeam.data.name;
        homeLogo.setAttribute("src", element.localTeam.data.logo_path);
        hemmadiv.appendChild(homeLogo);
        awayLogo.setAttribute("src", element.visitorTeam.data.logo_path);
        bortadiv.appendChild(awayLogo);

        goalbox.appendChild(goals).textContent =
          element.scores.localteam_score +
          " - " +
          element.scores.visitorteam_score;
        goalbox.appendChild(matchstart).textContent =
          element.time.starting_at.date_time;
        gamecontainer.appendChild(titlebox);
        console.log(element.length);

        homeLogo.style.display = "none";
        awayLogo.style.display = "none";
        goals.style.display = "none";
        matchstart.style.display = "none";

        function myFunction() {
          setTimeout(() => {
            homeLogo.style.display = "block";
            awayLogo.style.display = "block";
            goals.style.display = "block";

            matchstart.style.display = "block";
            titlebox.style.height = "400px";
            titlebox.style.transition = "1s ease all";
          }, "100");
        }
        titlebox.addEventListener("mouseover", myFunction);

        function myFunction2() {
          setTimeout(() => {
            homeLogo.style.display = "none";
            awayLogo.style.display = "none";
            goals.style.display = "none";
            goals.style.display = "none";
            matchstart.style.display = "none";
            titlebox.style.height = "50px";
            titlebox.style.transition = "1s ease all";
          }, "100");
        }
        titlebox.addEventListener("mouseout", myFunction2);
      });
    });
}
fetchData();
////ayanle code

function addCartData(data, id) {
  divId = id;
  dataHtml = `<tr >
                
    <td id="name">${data.team_name}</td>
    <td id="p" >0</td>
    <td id="w">0</td>
    <td id="d">0</td>
    <td id="l">0</td>
    <td id="gf">0</td>
    <td id="ga">0</td>
    <td id="pts">0</td>
  </tr>`;

  const groupDiv = document.getElementById(divId);
  groupDiv.innerHTML += dataHtml;
}

function addCard(item) {
  const cartHtml = `<div class="costumCard">
    <div class="head">
        ${item.name}
    </div>
    <div class="cardBody">
        <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">P</th>
                <th scope="col">W</th>
                <th scope="col">D</th>
                <th scope="col">L</th>
                <th scope="col">GF</th>
                <th scope="col">GA</th>
                <th scope="col">Pts</th>
              </tr>
            </thead>
            <tbody id="${item.id}">
              
            </tbody>
          </table>
    </div>
</div>`;

  console.log(item.id);

  const groupDiv = document.getElementById("groups-divs");
  groupDiv.innerHTML += cartHtml;

  Array.from(item.standings.data).forEach((i) => {
    addCartData(i, item.id);
  });

  console.log(item.standings.data);
}

async function Groupdata() {
  let response = await fetch(
    "https://soccer.sportmonks.com/api/v2.0/standings/season/18017?api_token=z4ZkB12UAwagtBERZTJOHhx7mmQpkKIW0HBFwbTEgaRcSzontmqMZdIRcLd6"
  );
  let data = await response.json();

  var dataArray = data.data;

  dataArray.forEach((obj) => {
    addCard(obj);
  });
}

console.log(addCard);

Groupdata();
