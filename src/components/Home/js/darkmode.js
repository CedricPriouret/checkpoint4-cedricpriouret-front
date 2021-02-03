const switchThemeBtn = document.querySelector(".changeTheme");
let toggleTheme = 0;

switchThemeBtn.addEventListener("click", () => {
  if (toggleTheme === 0) {
    document.documentElement.style.setProperty(
      "--background-darkmode",
      "#262626"
    );
    document.documentElement.style.setProperty(
      "--background-navbar-darkmode",
      "#353535"
    );
    document.documentElement.style.setProperty(
      "--background-logo-darkmode",
      "#202020"
    );
    document.documentElement.style.setProperty(
      "--icon-color-darkmode",
      "#f2f2f2"
    );
    document.documentElement.style.setProperty(
      "--text-color-darkmode",
      "#f2f2f2"
    );
    document.documentElement.style.setProperty(
      "--icon-moon-color-darkmode",
      "#f2f2f2"
    );
    document.documentElement.style.setProperty(
      "--item-hovered-color-darkmode",
      "#c0c0c0"
    );
    document.documentElement.style.setProperty("--primary-color", "#202020");

    toggleTheme++;
  } else {
    document.documentElement.style.setProperty(
      "--background-darkmode",
      "#f80040"
    );
    document.documentElement.style.setProperty(
      "--background-navbar-darkmode",
      "#f2f2f2"
    );
    document.documentElement.style.setProperty(
      "--background-logo-darkmode",
      "#dddbdf"
    );
    document.documentElement.style.setProperty(
      "--icon-color-darkmode",
      "#150941"
    );
    document.documentElement.style.setProperty(
      "--text-color-darkmode",
      "#150941"
    );
    document.documentElement.style.setProperty(
      "--icon-moon-color-darkmode",
      "#150941"
    );
    document.documentElement.style.setProperty(
      "--item-hovered-color-darkmode",
      "#f80040"
    );
    document.documentElement.style.setProperty("--primary-color", "#c0c0c0");

    toggleTheme--;
  }
});
