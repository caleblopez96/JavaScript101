class Counter {
  constructor(startingNum = 0, incrementAmt = 1) {
    this.count = startingNum;
    this.incrementAmt = incrementAmt;
    this.interval = null;
  }
  start() {
    this.interval = setInterval(this.incrementAndPrint.bind(this), 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  incrementAndPrint() {
    console.log(this.count);
    this.count += this.incrementAmt;
  }
}
// create a counter starting at 10, incremented by 2
let counter = new Counter(10, 2);

// start the counter for 5 seconds
counter.start();
setTimeout(() => {
  counter.stop();
}, 5000);

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40713578#overview
