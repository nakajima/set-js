Screw.Unit(function() {
  describe("Set", function() {
    var set;

    before(function() {
      set = new Set();
    })

    it("exists", function() {
      expect(Set).to_not(be_undefined);
    });

    it("starts at zero", function() {
      expect(set.length).to(equal, 0);
    });

    it("accepts default values", function() {
      set = new Set(['hello', 'world']);
      expect(set.length).to(equal, 2);
      expect(set.include('hello')).to(be_true);
      expect(set.include('world')).to(be_true);
    });

    it("is incremented when items are added", function() {
      set.add('hello');
      expect(set.length).to(equal, 1);
    });

    it("returns itself after add", function() {
      expect(set.add('hello')).to(equal, set);
    });

    it("is decremented when items are removed", function() {
      set.add('hello');
      set.remove('hello');
      expect(set.length).to(equal, 0);
    });

    it("returns itself after successful remove", function() {
      set.add('hello');
      expect(set.remove('hello')).to(equal, set);
    });

    it("returns null after unsuccessful remove", function() {
      expect(set.remove('hello')).to(be_null);
    });

    it("does not increment when item already in set", function() {
      set.add('hello');
      set.add('hello');
      expect(set.length).to(equal, 1);
    });

    it("does not decrement when item not in set", function() {
      set.remove('hello');
      expect(set.length).to(equal, 0);
    });

    it("does not destroy data", function() {
      var a = 'hello';
      set.add(a);
      set.remove(a);
      expect(a).to(equal, 'hello');
    });

    it("knows if item is included", function() {
      expect(set.include('hello')).to(be_false);
      set.add('hello');
      expect(set.include('hello')).to(be_true);
    });

    it("converts to array", function() {
      set.add('hello');
      set.add('world');
      expect(set.toArray()).to(equal, ['hello', 'world']);
    });
  });
});
