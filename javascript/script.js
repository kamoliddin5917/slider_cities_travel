window.addEventListener("DOMContentLoaded", () => {
  const myCity = document.querySelectorAll(".city");
  const myBtnBox = document.querySelector(".btns");
  const myBtns = document.querySelectorAll(".btn");

  const classOrg = () => {
    myCity.forEach((item) => {
      item.classList.add("none");
      item.classList.remove("active", "animatsiya");
    });
    myBtns.forEach((item) => {
      item.classList.remove("btn--active");
    });
  };

  const classAdd = (i = 0) => {
    myCity[i].classList.remove("none");
    myCity[i].classList.add("active", "animatsiya");
    myBtns[i].classList.add("btn--active");
  };

  classOrg();
  classAdd();

  myBtnBox.addEventListener("click", (event) => {
    myBtns.forEach((item, i) => {
      if (event.target == item) {
        classOrg();
        classAdd(i);
      }
    });
  });
});
