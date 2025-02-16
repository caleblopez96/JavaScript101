// static initialization blocks are useful if you need some code to run at least once, once the class is loaded

// EXAMPLE:
class DatabaseConnection {
  static connection;
  static {
    if (process.env.NODE_ENV === "Production") {
      this.connection = this.loadProductionConnection();
    } else {
      this.connection = this.loadDevelopmentConnection();
    }
  }
  static loadDevelopmentConnection() {}
  static loadProductionConnection() {}
}
