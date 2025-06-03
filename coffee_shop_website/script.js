  const asideNavigaton = document.querySelector(".aside-navigation");
  const barBtn = document.querySelector(".bar-btn");

  const toggleAsideNavigation = () => {
    asideNavigaton.classList.toggle("active");
  };

  barBtn.addEventListener("click", toggleAsideNavigation);

  const asideNavigatonLinks = document.querySelectorAll(".aside-navigation a");
  asideNavigatonLinks.forEach(link => {
    link.addEventListener("click", () => {
      asideNavigaton.classList.remove("active");
    });
  });

  const asideCart = document.querySelector(".aside-cart");
  const cartBtn = document.querySelector(".cart-btn");

  const toggleAsideCart =() => {
    asideCart.classList.toggle("active");
  }

  cartBtn.addEventListener("click", toggleAsideCart);

  const asideSearch = document.querySelector(".aside-search");
  const searchBtn = document.querySelector(".search-btn");

  const toggleAsdeSearch = () => {
    asideSearch.classList.toggle("active");
  }

  searchBtn.addEventListener("click", toggleAsdeSearch);