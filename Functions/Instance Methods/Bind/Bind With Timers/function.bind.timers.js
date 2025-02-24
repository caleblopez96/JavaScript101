class Counter {
  constructor(count = 0, incrementAmt = 1, interval) {
    this.count = count;
    this.incrementAmt = incrementAmt;
    this.interval = null;
  }

  start() {
    interval = setInterval(() => {
      console.log(this.count);
      this.count += this.incrementAmt;
    }, 1000);
  }

  end() {
    clearInterval(interval);
  }
}

const counter = new Counter();
counter.start();
