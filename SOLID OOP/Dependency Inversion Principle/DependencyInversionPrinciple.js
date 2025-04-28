// High-level modules (main application logic) should not depend directly
// on low-level modules (like specific tools or libraries)

// Both should depend on abstractions (interfaces or general ideas)

// EXAMPLE:
// imagine you build an app where users can sign in. Initially, users sign in using a username and password.
// but in the future, you might want to allow sign-in using gmail, phone number,
// or even third-party providers like Google

// if you tightly couple your authentication mechanism to a specific method,
// every time you want to introduce a new method, you'll end up rewriting
// a significant part of your code

class UsernamePasswordAuth {
  constructor(username, password) {
    // logic to authenticate using username and password
  }

  authenticate(username, password) {
    // logic for username/password authentication
    console.log(`Authenticating user ${username} with password ${password}`);
  }
}

class User {
  // login method that calls authenticate only handles one way to log in
  // if i wanted to add google auth or github auth id have to edit this class
  login(username, password) {
    const auth = new UsernamePasswordAuth();
    return auth.authenticate(username, password);
  }
}

// Following dependency inversion principle, we can create abstract auth method class
// and ensure the main user class depends on that abstraction, not a specific implementation

// EXAMPLE: adhering to DIP
// An abstract class is just a class that contains methods that you expect other people to override
// it's kinda like saying every class that extends this class has to have these methods, but doesn't define those methods inside of the abstract method
class AuthMethod {
  authenticate(credentials) {
    throw new Error("This method should be overridden by subclasses.");
  }
}

class UsernamePasswordAuth extends AuthMethod {
  authenticate({ username, password }) {
    // logic to authenticate the username and password
    console.log(`Authenticating ${username} with password ${password}`);
  }
}

class EmailAuth extends AuthMethod {
  authenticate({ username, password }) {
    // logic to authenticate using email and a token sent to the email
    console.log(
      `Authenticating ${username} with email and password ${password}`
    );
  }
}

class User {
  // The login method now depends on the abstraction, not a specific implementation.
  login(authMethod, credentials) {
    return authMethod.authenticate(credentials);
  }
}

// Usage
const user = new User();

// Username/Password login
const usernamePasswordAuth = new UsernamePasswordAuth();
user.login(usernamePasswordAuth, { username: "user1", password: "password" });

// Email login
const emailAuth = new EmailAuth();
user.login(emailAuth, { username: "user1", password: "password" });

// By using DIP in the authentication example, the User class doesnt need to
// change every time we introduce a new way to authenticate.
// We just create a new class extending AuthMethod and pass it to the User class.
// This asbtraction ensures that our main logic remains stable and unaffected by changes
// in lower-level modules (different authetication mechanisms)
