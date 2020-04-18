function clickedDashboard(id) {
  //console.log("Dashboard pressed");

  navButtonPressed(id, "dashboard");
}

function clickedPerson(id) {
  //console.log("Person pressed");

  navButtonPressed(id, "person");
}

function clickedDevices(id) {
  //console.log("Devices pressed");

  navButtonPressed(id, "devices");
}

function clickedSettings(id) {
  //console.log("Settings pressed");

  navButtonPressed(id, "settings");
}

function navButtonPressed(id, contentToShow) {
  // remove the active class from other buttons
  let navElements = document.getElementsByClassName("nav__link-active");
  navElements[0].classList.remove("nav__link-active");

  // Hide content
  hideContent();

  // Add the active class to the pressed button
  id.classList.add("nav__link-active");

  // Show the content
  showContent(contentToShow);
}

function showContent(contentName) {
  let contentElement = document.getElementsByClassName(
    `content__${contentName}`
  );
  contentElement[0].classList.add("content-active");
}

function hideContent() {
  let contentElementDashboard = document.getElementsByClassName(
    "content__dashboard"
  );
  contentElementDashboard[0].classList.remove("content-active");

  let contentElementPerson = document.getElementsByClassName("content__person");
  contentElementPerson[0].classList.remove("content-active");

  let contentElementDevices = document.getElementsByClassName(
    "content__devices"
  );
  contentElementDevices[0].classList.remove("content-active");

  let contentElementSettings = document.getElementsByClassName(
    "content__settings"
  );
  contentElementSettings[0].classList.remove("content-active");
}
