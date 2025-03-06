// The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin;
// the stored data is saved across browser sessions.

// SYNTAX:
// localStorage.setItem("key", "value")
// localStorage.getItem("key") // returns value associated with key
// localStorage.removeItem("key") // give key of item to remove
// localStorage.clear() // clears localStorage

// EXAMPLE:

// setItem()
localStorage.setItem("myDog", "B's");

// getItem()
localStorage.getItem("myDog"); // B's

// removeItem()
localStorage.removeItem("myDog"); //

// clear()
localStorage.clear();
