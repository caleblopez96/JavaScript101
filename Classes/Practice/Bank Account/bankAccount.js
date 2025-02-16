// Create a BankAccount class that allows the user to enter their account number and account name.

// then create instance methods to deposit and withdraw

class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`You deposited $${amount}. New balance is: ${this.balance}.`);
    } else {
      console.log(`Can't deposit a negative amount.`);
    }
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Insufficient Funds`);
    } else {
      this.balance -= amount;
      console.log(
        `You withdrew $${amount}. Your new balance is $${this.balance}.`
      );
    }
  }
}

const a = new BankAccount("123", "James Dean");

console.log(a); // BankAccount {accountHolder: James Dean, accountNumber: 123}
a.deposit(200);
console.log(a); // BankAccount {accountHolder: James Dean, accountNumber: 123, balance: 200}
a.withdraw(100);
console.log(a); // BankAccount {accountHolder: James Dean, accountNumber: 123, balance: 100}
