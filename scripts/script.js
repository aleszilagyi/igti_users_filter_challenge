const apiUrl =
  "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo";
const userDataDiv = document.querySelector("#userData");
const inputElement = document.querySelector("#userInput");
const btnElement = document.querySelector("#btn");
const clrElement = document.querySelector("#btnClear");

const preventFormSubmit = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmit);
};

const fetchData = async () => {
  const response = await fetch(apiUrl);
  const userData = await response.json();
  const { results } = userData;
  const usersArr = results.map((user) => {
    return (user = {
      name: `${user.name.first} ${user.name.last}`,
      age: user.dob.age,
      gender: user.gender,
      picture: user.picture.thumbnail,
    });
  });
  return usersArr;
};

const setData = (rawData, event, render, newState) => {
  let searchResult = [];
  const search = new RegExp(event.target.value, "i", "g");
  let usersStatistics = {
    total: 0,
    male: 0,
    fem: 0,
    totalAge: 0,
    avgAge: 0,
  };

  searchResult = rawData.filter((user) => {
    return user.name.match(search);
  });
  const maleCount = searchResult.filter((user) => {
    return user.gender.toLowerCase().match(new RegExp("^male", "i", "g"));
  }).length;
  const femCount = searchResult.filter((user) => {
    return user.gender.toLowerCase().match(new RegExp("^female", "i", "g"));
  }).length;
  const totalAge = searchResult.reduce((acc, curr) => {
    return acc + curr.age;
  }, 0);

  searchResult.sort((a, b) => {
    if (a.name.normalize("NFD") < b.name.normalize("NFD")) {
      return -1;
    }
    if (a.name.normalize("NFD") > b.name.normalize("NFD")) {
      return 1;
    }
    return 0;
  });

  usersStatistics = {
    total: searchResult.length,
    male: maleCount,
    fem: femCount,
    totalAge,
    avgAge: (totalAge / searchResult.length).toFixed(2),
  };

  const state = (validation) => {
    if (!validation) return initialState;
    else return newState(usersStatistics, searchResult);
  };

  const validationInput =
    event.type === "input" ? event.target.value.replace(/\s/g, "").length : 0;

  if (event.type === "click") {
    if (event.target.textContent === "LIMPAR") {
      render(state((false)));
    } else {
      render(state(true));
    }
  } else if (validationInput === 0) {
    render(state(false));
  } else {
    render(state(true));
  }
};

const initialState = `
<div class="row" id="userData">
  <h1 id="initText">Nenhum usuário a ser exibido</h1>
</div>
`;

const templateUsersFound = (users) => {
  const elements = users.map((user) => {
    return `
    <div class="row">
      <img src="${user.picture}" class="circle responsive-img col s1"/>
      <p class="valign-wrapper left-align col col s11">${user.name}, ${user.age}</p>
    </div>`;
  });
  return elements.join("");
};

const templateUsersInfo = (usersStatistics) => {
  return `
  <h6 class="valign-wrapper left-align col s3">Sexo masculino: ${usersStatistics.male}</h6>
  <h6 class="valign-wrapper left-align col s3">Sexo feminino: ${usersStatistics.fem}</h6>
  <h6 class="valign-wrapper left-align col s3">Soma das idades: ${usersStatistics.totalAge}</h6>
  <h6 class="valign-wrapper left-align col s3">Média das idades: ${usersStatistics.avgAge}</h6>
  `;
};

const template = (usersStatistics, templateUsersInfo, templateUsersFound) => {
  return `
  <div class="row card">
    <div class="valign-wrapper">
      <h3 class="row center-align">Estatísticas</h1>
    </div>
    <div class="row">
      ${templateUsersInfo}
    </div>
  </div>
    
  <div class="row card">
    <div class="valign-wrapper">
      <h3 class="row center-align">${usersStatistics.total} usuário(s) encontrado(s)</h1>
    </div>
    <div class="row">
      ${templateUsersFound}
    </div>
  </div>
  `;
};

updateState(
  {
    initialState,
    inputElement,
    component: userDataDiv,
    template,
    fetchData,
  },
  btnElement,
  clrElement
);

preventFormSubmit();
btnElement.addEventListener("click", () => inputElement.value = "")
clrElement.addEventListener("click", () => inputElement.value = "")