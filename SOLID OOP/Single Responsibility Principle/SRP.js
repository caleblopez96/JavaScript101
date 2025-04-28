// SRP states a class should only have one reason to change.
// It means that a class should only have one job or responsibility

// Before: this class creates a user with a name and also has a method to serialize the user object to JSON
// This violates the SRP because the class has two responsibilities: creating a user and serializing it to JSON
class user {
  constructor(name) {
    this.name = name;
  }
  toJSON() {
    return JSON.stringify(this);
  }
}

// After appyling SRP: this class only creates a user with a name and has no other responsibilities
// The serialization responsibility is moved to a separate class called UserSerializer
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
