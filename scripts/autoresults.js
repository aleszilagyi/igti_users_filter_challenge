const updateState = (
  { initialState, inputElement, component, template, fetchData },
  ...btnElement
) => {
  const newState = (usersStatistics, searchResult) => {
    return template(
      usersStatistics,
      templateUsersInfo(usersStatistics),
      templateUsersFound(searchResult)
    );
  };

  const render = (newState) => {
    component.innerHTML = newState;
  };

  const onInput = async (event) => {
    try {
      const rawData = await fetchData();

      setData(rawData, event, render, newState);
    } catch (err) {
      console.log("Error when trying to connect with server" + err);
    }
  };

  btnElement.forEach((btn) => {
    btn.addEventListener("click", () => inputElement.value = "")
    btn.addEventListener("click", debounce(onInput, 500));
  });
  inputElement.addEventListener("input", debounce(onInput, 500));
  window.addEventListener("load", render(initialState));
};
