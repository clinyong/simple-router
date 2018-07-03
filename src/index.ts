import { Hash } from "./Hash";
import { History } from "./History";

type Mode = "hash" | "history";

interface IRouter {
  route: (url: string, cb: () => void) => void;
  goto: (url: string) => void;
}

function formatURL(url: string): string {
  return url.startsWith("/") ? url : `/${url}`;
}

export class Router {
  private router: IRouter;

  constructor(mode: Mode) {
    if (mode === "hash") {
      this.router = new Hash();
    } else {
      this.router = new History();
    }
  }

  goto(url: string) {
    this.router.goto(formatURL(url));
  }

  route(url: string, cb: () => void) {
    this.router.route(formatURL(url), cb);
  }
}
