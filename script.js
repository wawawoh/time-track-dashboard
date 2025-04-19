jsonObject = JSON.parse(`[
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]`);

aFunction = () => {
  allCards.forEach((element, number) => {
    console.log(element);
    current = element.querySelector("h3");
    previous = element.querySelector("p");

    current.textContent =
      jsonObject[number].timeframes[timeframe].current + "hrs";

    previous.textContent =
      said_timeframe +
      jsonObject[number].timeframes[timeframe].previous +
      "hrs";
  });
};

const cardContainer = document.querySelector(".cards");
buttonList = document.querySelectorAll("nav button");

jsonObject.forEach((element, number) => {
  card = document.createElement("div");
  card.classList.add("card-class");
  card.innerHTML = `<h2> ${jsonObject[number].title} </h2>`;
  card.setAttribute("id", `${jsonObject[number].title}`);
  cardContainer.appendChild(card);
});

allCards = cardContainer.querySelectorAll(".card-class");
allCards.forEach((element) => {
  hoursContainer = document.createElement("div");
  hoursContainer.classList.add("hour-container");
  currentTime = document.createElement("h3");
  previousTime = document.createElement("p");
  hoursContainer.append(currentTime, previousTime);

  element.append(hoursContainer);
});

let said_timeframe;
let timeframe = "daily";
aFunction();
// button
buttonList.forEach((element) => {
  element.addEventListener("click", (e) => {
    buttonList.forEach((button) => {
      button.classList.remove("active");
    });
    e.target.classList.add("active");

    timeframe = e.target.textContent.toLowerCase();
    console.log(timeframe);

    switch (timeframe) {
      case "daily":
        said_timeframe = "yesterday: ";
        break;
      case "monthly":
        said_timeframe = "last month: ";
        break;
      case "weekly":
        said_timeframe = "last week: ";
        break;
    }
    aFunction();
  });
});
