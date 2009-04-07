(function() {
  function Set(initial) {
    this.length = 0;
    this.entries = {};

    initial = initial || [];
    var i = initial.length;
    while(i--) { this.push(initial[i]); }
  };

  function push(item) {
    if (!this.entries[item]) {
      this.entries[item] = true;
      this.length++;
    }
    return this;
  }

  function remove(item) {
    if (this.entries[item]) {
      delete(this.entries[item]);
      this.length--;
      return this;
    } else {
      return null;
    }
  }

  Set.prototype.add = push;
  Set.prototype.push = push;

  Set.prototype.del = remove;
  Set.prototype.remove = remove;

  Set.prototype.toArray = function toArray() {
    var res = [];
    for (item in this.entries) {
      res.push(item);
    }; return res;
  }

  Set.prototype.include = function include(item) {
    return this.entries[item];
  }

  window.Set = Set;
})(this);
