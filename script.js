const tableAssignments = {
  "Diana Chang": "Table 1",
  "Johnny Chu": "Table 1",
  "Vivian Zhao": "Table 1",
  "George Chang": "Table 1",
  "Betty Chang": "Table 1",
  "Kevin Leu": "Table 1",
  "Christine Chang": "Table 1",
  "Pam Isaacson": "Table 1",
  "Amy Wong": "Table 1",
  "Daniel Wong": "Table 1",
  "Terry Su": "Table 2",
  "Hanker Su": "Table 2",
  "Michael Su": "Table 2",
  "Claudia Yuen": "Table 2",
  "King Su Chang": "Table 2",
  "Chin Hsien Chang": "Table 2",
  "Walter Su": "Table 2",
  "Julie Su": "Table 2",
  "Izen Su": "Table 2",
  "Milo": "Table 2",
  "Eva Kwok": "Table 3",
  "David Kwok": "Table 3",
  "Amy Lee": "Table 3",
  "Kenneth Kwok": "Table 3",
  "Susanna Lee": "Table 3",
  "Wilson Kwok": "Table 3",
  "Joseph Kwok": "Table 3",
  "Angela Bao": "Table 3",
  "Thomas Chan": "Table 3",
  "Valerie Pun": "Table 4",
  "Susan Lam": "Table 4",
  "Wende Lam": "Table 4",
  "Nicholas Lam": "Table 4",
  "David Ho": "Table 4",
  "Martha Ho": "Table 4",
  "Duncan Lam": "Table 4",
  "Donald Lam": "Table 4",
  "Suki Lee": "Table 4",
  "Daniel Pun": "Table 4",
  "Warren Wong": "Table 5",
  "Christine Wong": "Table 5",
  "Johnny Kwan": "Table 5",
  "Evelyn Kwan": "Table 5",
  "Jinhee Trone": "Table 5",
  "May Leung": "Table 5",
  "Kenneth Leung": "Table 5",
  "Polly Wong": "Table 5",
  "Alan Wong": "Table 5",
  "Isabel Lin": "Table 6",
  "Yvonne Lin": "Table 6",
  "Robert Bowley": "Table 6",
  "Davonna Krall": "Table 6",
  "Jenny Liao": "Table 6",
  "Yann Lin": "Table 6",
  "Jessica Wang": "Table 6",
  "John Fu": "Table 6",
  "Geraldine Su": "Table 6",
  "Mike Fu": "Table 6",
  "Wen-Fan Lin": "Table 7",
  "Virginia Su": "Table 7",
  "Biing-Ming Su": "Table 7",
  "Cindy Su": "Table 7",
  "Wen-Yu Lin": "Table 7",
  "Hsing-Luan Su": "Table 7",
  "Karl Su": "Table 7",
  "Shiu-Fong Su": "Table 7",
  "Gabby Lin": "Table 8",
  "Maurice Lin": "Table 8",
  "Patricia Huang": "Table 8",
  "Mitchel Lin": "Table 8",
  "Mabel Lin": "Table 8",
  "Estelle Lin": "Table 8",
  "Leo Lin": "Table 8",
  "Margaret Su": "Table 8",
  "Ben Goldsmith": "Table 8",
  "Tessa Goldsmith": "Table 8",
  "Elise Goldsmith": "Table 8",
  "Dennis Chan": "Table 9",
  "Stephen Chan": "Table 9",
  "Toni Mak": "Table 9",
  "Peter Wang": "Table 9",
  "Serene Wang": "Table 9",
  "Wilfred Kam": "Table 9",
  "Valerie Tang": "Table 9",
  "Anna Phong": "Table 9",
  "Justin Wong": "Table 10",
  "Janet Wang": "Table 10",
  "Kimberly Green": "Table 10",
  "Darin Green": "Table 10",
  "Philip Kwan": "Table 10",
  "James Wong": "Table 10",
  "June Wong": "Table 10",
  "Carter Green": "Table 10",
  "Nolan Green": "Table 10",
  "Aidan Kwan": "Table 10",
  "Candice Tzeng": "Table 10",
  "Yun Dao": "Table 11",
  "Sophia Wong": "Table 11",
  "Kevin Wong (Sophia's Husband)": "Table 11",
  "Trang Dinh": "Table 11",
  "Minh Nguyen": "Table 11",
  "Vivian So": "Table 11",
  "Benny Tran": "Table 11",
  "Maryyah Trodep": "Table 11",
  "Bianca Talakua": "Table 11",
  "Anna Tran": "Table 11",
  "Jimmy Nguyen": "Table 12",
  "Mei Nguyen": "Table 12",
  "Tina Kim": "Table 12",
  "Sunny Kim": "Table 12",
  "Robbie Choi": "Table 12",
  "Susie Choi": "Table 12",
  "Brandon Hadi": "Table 12",
  "Kevin Penaloza": "Table 12",
  "Kevin Wong (Kim's Fiance)": "Table 12",
  "Kim Chau": "Table 12",
  "Xavier Kalilikane": "Table 13",
  "Angelesa Kalilikane": "Table 13",
  "Oaklyn Kalilikane": "Table 13",
  "Dylan Chu": "Table 13",
  "Audrey Yeh": "Table 13",
  "Brandon Leu": "Table 13",
  "Chris Leu": "Table 13",
  "Amanda Kalilikane": "Table 13",
  "Sebatian Kalilikane": "Table 13",
  "James Fu": "Table 13",
  "Brittaney Fu": "Table 13",
  "Will Fujitaki": "Table 14",
  "Nicoleen Lebita": "Table 14",
  "Steven Liu": "Table 14",
  "Dean Ohashi": "Table 14",
  "Megan Ohashi": "Table 14",
  "Athena Shea": "Table 14",
  "Brandon Yeh": "Table 14",
  "Steve Chang": "Table 14",
  "Brandyn Lee": "Table 14",
  "Grace Hsieh": "Table 15",
  "Amanda Sie": "Table 15",
  "Ryan Carelli": "Table 15",
  "Kirstyn Leung": "Table 15",
  "Jeremiah Yang": "Table 15",
  "Justin Bu": "Table 15",
  "Joyce Chen": "Table 15",
  "Adrian Lam": "Table 15",
  "Kritika Pugalia": "Table 15",
  "Cody Ng": "Table 16",
  "Michael Kwan": "Table 16",
  "Camellia Ho": "Table 16",
  "Katie Overholt": "Table 16",
  "Steve Overholt": "Table 16",
  "Grace Howell": "Table 16",
  "Jared Howell": "Table 16",
  "Sora Yi": "Table 16",
  "Alec Jen": "Table 16",
  "Ivan Lam": "Table 16",
  "Ryan Ho": "Table 16",
  "Kenzi Oates": "Table 17",
  "Dennis Caldwell": "Table 17",
  "Kalena Wold": "Table 17",
  "Taylor Knott": "Table 17",
  "Linsy Miller": "Table 17",
  "Annie Dumond": "Table 17",
  "Chasen Gardner": "Table 17",
  "Alycia Gardner": "Table 17",
  "Emily Su": "Sweetheart Table",
  "Jeff Kwok": "Sweetheart Table",
};

const welcomeMessages = [
    "We can't wait to celebrate with you!",
    "So excited to have you join our special day!",
    "Thank you for being part of our love story!",
    "Your presence means the world to us!",
    "So grateful you're here to celebrate with us!",
    "Let the celebration begin!",
    "Time to party and make memories!",
    "Cheers to love and friendship!",
    "Looking forward to an unforgettable evening!",
    "So happy you could be here!",
];

const nameInput = document.getElementById("nameInput");
const resultDiv = document.getElementById("result");

function searchTable() {
  const inputName = nameInput.value.trim();

  if (!inputName) {
    showResult(
      "Welcome! Please enter your name above to find your table assignment.",
      "empty"
    );
    return;
  }

  const lowerInput = inputName.toLowerCase();
  let matches = [];

  // Find all partial matches
  for (const [name, tableNum] of Object.entries(tableAssignments)) {
    const lowerName = name.toLowerCase();

    // Check if input matches any part of the name
    if (lowerName.includes(lowerInput)) {
      matches.push({ name, table: tableNum });
    }

    // Also check if any word in the name matches
    const nameWords = lowerName.split(" ");
    const inputWords = lowerInput.split(" ");

    for (const inputWord of inputWords) {
      if (inputWord.length >= 2) {
        // Only match words with 2+ characters
        for (const nameWord of nameWords) {
          if (nameWord.startsWith(inputWord) || nameWord.includes(inputWord)) {
            if (!matches.find((match) => match.name === name)) {
              matches.push({ name, table: tableNum });
            }
          }
        }
      }
    }
  }

  if (matches.length === 1) {
    // Single match found
    showResult(
      `<div class="table-info">${matches[0].name}</div>
               <div class="table-info">You're seated at ${matches[0].table}</div>
               <div class="welcome-msg">${getRandomMessage()}</div>`,
      "success"
    );
  } else if (matches.length > 1) {
    // Multiple matches found - show clickable options
    let matchButtons = matches
      .map(
        (match) =>
          `<button class="match-item" onclick="selectGuest('${match.name}', '${match.table}')">
                  <span class="match-name">${match.name}</span>
                  <span class="match-table">${match.table}</span>
              </button>`
      )
      .join("");

    showResult(
      `<div class="matches-header">Multiple guests found — please select your name:</div>
               <div class="matches-list">${matchButtons}</div>`,
      "error"
    );
  } else {
    // No matches found
    showResult(
      `We couldn't find "${inputName}" on our guest list. Please check the spelling or contact us if you believe this is an error.`,
      "error"
    );
  }
}

function selectGuest(name, table) {
  nameInput.value = name;
  showResult(
    `<div class="table-info">${name}</div>
           <div class="table-info">You're seated at ${table}</div>
           <div class="welcome-msg">${getRandomMessage()}</div>`,
    "success"
  );
}

function showResult(message, type) {
  resultDiv.innerHTML = message;
  resultDiv.className = `result ${type}`;
}

function getRandomMessage() {
    return welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
}

// Search as user types (with small delay)
let searchTimeout;
nameInput.addEventListener("input", () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(searchTable, 300);
});

// Also search on Enter key
nameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    clearTimeout(searchTimeout);
    searchTable();
  }
});

// Focus on input when page loads
window.addEventListener("load", () => {
  nameInput.focus();
});
