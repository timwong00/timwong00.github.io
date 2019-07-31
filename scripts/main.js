const routes = {
  "/": landing,
  "/projects": projects,
  "/contact": contact
};

const contentContainer = document.getElementById("contentContainer");

const onNavigate = pathname => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  contentContainer.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  contentContainer.innerHTML = routes[window.location.pathname];
};
