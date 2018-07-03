export class History {
  private routes = {};

  constructor() {
    window.addEventListener("popstate", this.onStateChange);
  }

  private onStateChange = (ev: PopStateEvent) => {
    const cb = this.routes[ev.state];
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
