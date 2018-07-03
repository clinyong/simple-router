export class History {
  private routes = {};

  constructor() {
    window.addEventListener("popstate", this.onStateChange);
    window.addEventListener("load", this.init);
  }

  private onURLChange = (url: string) => {
    const cb = this.routes[url];
    if (cb) {
      cb();
    }
  };

  private init = () => {
    this.onURLChange(location.pathname);
  };

  private onStateChange = (ev: PopStateEvent) => {
    this.onURLChange(ev.state.url);
  };

  route = (url: string, cb: () => void) => {
    this.routes[url] = cb;
  };

  goto = (url: string) => {
    if (url !== location.pathname) {
      history.pushState(
        {
          url
        },
        null,
        url
      );
      this.onURLChange(url);
    }
  };
}
