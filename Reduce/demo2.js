class Component {
  _data = { name: '' };
  pending = false;
  constructor() {
    this.data = new Proxy(this._data, {
      set: (target, key, value) => {
        target[key] = value;
        if (!this.pending) {
          this.pending = true;
          Promise.resolve().then(() => {
            this.pending = false;
            this.render();
          });
        }
      },
    });
  }
  render() {
    console.log(this._data.name);
  }
}

const com = new Component();
com.data.name = '1';
com.data.name = '2';
com.data.name = '3';
setTimeout(() => {
  com.data.name = 'xxx';
}, 100);
