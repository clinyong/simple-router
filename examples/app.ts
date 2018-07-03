import { Router } from "../src";

function start() {
  // or const router = new Router("history");
  const router = new Router("hash");

  router.route("login", () => {
    alert("In login page.");
  });

  router.route("register", () => {
    alert("In register page.");
  });

  const menu = document.getElementById("menu");

  menu.addEventListener("click", e => {
    const target: HTMLElement = e.target as any;

    if (target.dataset.href) {
      router.goto(target.dataset.href);
    }
  });
}

start();
