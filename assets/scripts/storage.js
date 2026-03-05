const Storage = {
  prefix: "ulti_portfolio_",

  set(key, value) {
    localStorage.setItem(this.prefix + key, JSON.stringify(value));
  },

  get(key, defaultValue = null) {
    const data = localStorage.getItem(this.prefix + key);
    return data ? JSON.parse(data) : defaultValue;
  },

  remove(key) {
    localStorage.removeItem(this.prefix + key);
  },

  clearAll() {
    Object.keys(localStorage)
      .filter(k => k.startsWith(this.prefix))
      .forEach(k => localStorage.removeItem(k));
  }
};
