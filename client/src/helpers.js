const calendar = () => {
  const calendar = document.querySelector("#calendar");

  for (let day = 0; day <=6; day++) {
    var date = new Date();

    date.setDate(date.getDate() + day);

    const options = { weekday: "short" };
    const dayName = new Intl.DateTimeFormat("en-US", options).format(date);

    calendar.insertAdjacentHTML("beforeend", `<div class="day"><div class="name">${dayName}</div></div>`);
  }

  // testing logic for how to dynamically render a dogwalker's scheduled walks

  // const test = document.getElementsByClassName("day");
  // for (var j = 0; j < test.length; j++) {
  // if (test[j].innerText === "Sat") {
  //     test[j].insertAdjacentHTML("beforeend", `<div>2:00pm</div>`)
  // }
  // }

  /*
  iterate through each day of the week
    iterate through each appointment in the array of appointments per user
      if the inner text is equal to the day of the appontment
        insert adjacent HTML > a div with the {time} (div will have a click-handler to render modal with location, owner/walker name, dog name, duration of walk, and services)
  */
};

export {calendar}