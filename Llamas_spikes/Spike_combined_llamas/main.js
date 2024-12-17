//* 1 fetching the data...
// console.log("navigator :>> ", navigator);
// console.log("api URL", API_KEY);
const apiUrl = `https://www.scorebat.com/video-api/v3/feed/?token=${API_KEY}`;

const getGames = () => {
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log("result :>> ", result.response);
      const games = result.response;
      // createHtmlTable(games);
      // createDropDown(games);
      controller(games);
    })
    .catch((error) => {
      console.log("error :>> ", error);
      // handleError(error)
    });
};

//* 2 function for creating table and dropdown
const createHtmlTable = (games) => {
  const table = document.getElementById("table");
  table.innerText = "";

  games.forEach((game, i) => {
    if (isInDropdown(game) && isInDatePicker(game)) {
      let row = document.createElement("tr");
      table.appendChild(row);

      let column = document.createElement("td");
      column.innerText = game.title;
      row.appendChild(column);

      let column2 = document.createElement("td");
      column2.innerText = game.competition;
      row.appendChild(column2);

      let column3 = document.createElement("td");
      //* reformat date
      const formatedDate = new Date(game.date).toLocaleString("de-DE", {
        day: "2-digit",
        month: "long",
        year: "2-digit",
      });
      // console.log("date :>> ", date);
      column3.innerText = formatedDate;
      row.appendChild(column3);
    }
  });
};

//* 3 generate Dropdown options
const createDropDown = (games) => {
  const dropdown = document.getElementById("leagueDropdown");
  // console.log("games :>> ", games);

  const competitions = games.map((game) => {
    return game.competition;
  });
  const setOfCompetitions = new Set(competitions);
  const uniqueCompetitionsArray = [...setOfCompetitions];
  // console.log("uniqueCompetitionsArray :>> ", uniqueCompetitionsArray);

  for (let i = 0; i < uniqueCompetitionsArray.length; i++) {
    const option = document.createElement("option");
    option.innerText = uniqueCompetitionsArray[i];
    option.value = uniqueCompetitionsArray[i];
    dropdown.appendChild(option);
  }
};

//* 4 make controller function

function controller(games) {
  //get the data
  //
  // build table with all data
  createHtmlTable(games);
  //generate DropDown filter options
  createDropDown(games);
  //create filter functions
  setEventListeners(games);
  // set event listeners
}

//*5 add event listeners
const setEventListeners = (games) => {
  const datePicker = document.querySelector("#date");

  datePicker.addEventListener("change", function () {
    // console.log("Date selected");
    // filterByDate(games);
    // combinedFilters(games);
    createHtmlTable(games);
  });

  const competitionDropdown = document.querySelector("#leagueDropdown");
  competitionDropdown.addEventListener("change", () => {
    // console.log("competition selected");
    // filterByDropDown(games);
    // combinedFilters(games);
    createHtmlTable(games);
  });
  // competitionDropdown.addEventListener("change", filterByDropDown);

  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  // console.log("checkboxes :>> ", checkboxes);
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      combinedFilters(games);
    });
  });
};

//* 6 fiter by dropdown
const filterByDropDown = (games) => {
  // console.log("games in Filter :>> ", games);

  // get dropdown value
  const selectedCompetition = document.querySelector("#leagueDropdown").value;
  console.log("selectedCompetition :>> ", selectedCompetition);
  // Filter
  // const filteredGames2 = games.map((game) => {
  //   if (selectedCompetition === "all") {
  //     return "option selected is all";
  //   }
  //   if (selectedCompetition !== "all") {
  //     if (selectedCompetition === game.competition) {
  //       return "some competition";
  //     }
  //   }
  // });
  // console.log("filteredGames2 :>> ", filteredGames2);

  const filteredGames = games.filter((game) => {
    return (
      selectedCompetition === game.competition || selectedCompetition === "all"
    );
    //same thing done with IF conditions
    // if (selectedCompetition === "all") {
    //   return true;
    // }
    // if (selectedCompetition !== "all") {
    //   return selectedCompetition === game.competition;
    // }
  });
  console.log("filteredGames :>> ", filteredGames);
  createHtmlTable(filteredGames);
};

//* 7 fiter by date
const filterByDate = (games) => {
  // get date value
  const selectedDate = document.querySelector("#date").value;
  console.log("selectedDate :>> ", selectedDate);
  const formatedSelectedDate = new Date(selectedDate).setHours(0, 0, 0, 0);
  // console.log("formatedSelectedDate :>> ", formatedSelectedDate);

  const filteredGames = games.filter((game) => {
    const formatedGameDate = new Date(game.date).setHours(0, 0, 0, 0);
    // console.log("formatedGameDate :>> ", formatedGameDate);

    return formatedSelectedDate === formatedGameDate || !selectedDate;
  });
  console.log("filteredGames :>> ", filteredGames);
  createHtmlTable(filteredGames);
};

const combinedFilters = (games) => {
  //find out which checkboxes i have selected
  const checkboxes = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  console.log("checkboxes :>> ", checkboxes);
  const checkboxesArray = Array.from(checkboxes);
  console.log("checkboxesArray :>> ", checkboxesArray);
  const checkboxesValues = checkboxesArray.map((checkbox) => {
    return checkbox.value;
  });
  console.log("checkboxesValues :>> ", checkboxesValues);

  const selectedCompetition = document.querySelector("#leagueDropdown").value;
  const selectedDate = document.querySelector("#date").value;
  // console.log("selectedDate :>> ", selectedDate);
  const formatedSelectedDate = new Date(selectedDate).setHours(0, 0, 0, 0);

  const filteredGames = games.filter((game) => {
    const formatedGameDate = new Date(game.date).setHours(0, 0, 0, 0);
    return (
      (selectedCompetition === game.competition ||
        selectedCompetition === "all") &&
      (formatedSelectedDate === formatedGameDate || !selectedDate) &&
      (checkboxesValues.includes(game.competition) || checkboxes.length < 1)
    );
  });
  createHtmlTable(filteredGames);
};

getGames();
//for you guys :
//9 combine filters

// Helper functions

const isInDropdown = (game) => {
  const selectedCompetition = document.querySelector("#leagueDropdown").value;

  // if (
  //   selectedCompetition === game.competition ||
  //   selectedCompetition === "all"
  // ) {
  //   return true;
  // } else {
  //   false;
  // }

  //? with ternary operator
  const result =
    selectedCompetition === game.competition || selectedCompetition === "all"
      ? true
      : false;
  return result;
};

const isInDatePicker = (game) => {
  const selectedDate = document.querySelector("#date").value;

  const formatedSelectedDate = new Date(selectedDate).setHours(0, 0, 0, 0);
  const formatedGameDate = new Date(game.date).setHours(0, 0, 0, 0);

  const result =
    formatedSelectedDate === formatedGameDate || !selectedDate ? true : false;
  return result;
};
