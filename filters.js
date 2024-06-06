// Add event listener to coresponding item selected by its id and do something on change
document.querySelector("#filter-marketing").addEventListener("change", filterMarketing);
document.querySelector("#filter-programming").addEventListener("change", filterProgramming);
document.querySelector("#filter-design").addEventListener("change", filterDesign);

// Function to hide all cards
function hideAllProjects() {
  var allProjects = document.querySelectorAll(".cards");

  allProjects.forEach((project) => {
    project.style.display = "none";
  });
}

// Function to show all cards
function showAllProjects() {
  var allProjects = document.querySelectorAll(".cards");

  allProjects.forEach((project) => {
    project.style.display = "block";
  });
}

// Function to remove active class
function removeActive() {
  document.querySelector(".filter-marketing").classList.remove("active");
  document.querySelector(".filter-programming").classList.remove("active");
  document.querySelector(".filter-design").classList.remove("active");
}

// Function to filter only marketing cards
function filterMarketing() {
  // First hide all projects
  hideAllProjects();

  // if the filter marketing checkbox is checked display marketing cards
  if (document.querySelector("#filter-marketing").checked) {
    var marketingProjects = document.querySelectorAll(".marketing");
    marketingProjects.forEach((marketingProject) => {
      marketingProject.style.display = "block";
    });
    // removes active class if something else is checked
    removeActive();
    // then adds active class just to the marketing checkbox
    document.querySelector(".filter-marketing").classList.add("active");

    // and we make sure other checkboxes are off
    document.querySelector("#filter-programming").checked = false;
    document.querySelector("#filter-design").checked = false;
  } else {
    // remove classes and shows all cards
    removeActive();
    showAllProjects();
  }
}

// Same goes here as the function for filtering marketing (same concept)
function filterProgramming() {
  hideAllProjects();

  if (document.querySelector("#filter-programming").checked) {
    var programmingProjects = document.querySelectorAll(".programming");
    programmingProjects.forEach((programmingProject) => {
      programmingProject.style.display = "block";
    });
    removeActive();
    document.querySelector(".filter-programming").classList.add("active");

    document.querySelector("#filter-marketing").checked = false;
    document.querySelector("#filter-design").checked = false;
  } else {
    removeActive();
    showAllProjects();
  }
}

function filterDesign() {
  hideAllProjects();

  if (document.querySelector("#filter-design").checked) {
    var designProjects = document.querySelectorAll(".design");
    designProjects.forEach((designProject) => {
      designProject.style.display = "block";
    });
    removeActive();
    document.querySelector(".filter-design").classList.add("active");

    document.querySelector("#filter-marketing").checked = false;
    document.querySelector("#filter-programming").checked = false;
  } else {
    removeActive();
    showAllProjects();
  }
}
