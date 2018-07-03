export class Hash {
  private routes = {};

  constructor() {
    window.addEventListener("hashchange", this.onHashChange);
  }

  private onHashChange = () => {
    const cb = this.routes[location.hash];
    if (cb) {
      cb();
    }
  };

  route = (url: string, cb: () => void) => {
    this.routes[url] = cb;
  };

  goto = (url: string) => {
    location.hash = url;
  };
}
