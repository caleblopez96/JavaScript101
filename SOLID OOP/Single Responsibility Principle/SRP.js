// SRP states a class should only have one reason to change.
// It means that a class should only have one job or responsibility

// Before:
class user {
  constructor(name) {
    this.name = name;
  }
  toJSON() {
    return JSON.stringify(this);
  }
}

// After SRP:
class SRPuser {
  constructor(name) {
    this.name = name;
  }
}

class UserSerializer {
  static toJSON(user) {
    return JSON.stringify(user);
  }
}
