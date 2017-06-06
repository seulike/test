class math {
  constructor() { //构造函数
    math.PI = 3.12;
  };
  static Instance() {
    if (!math.instance) math.instance = new math();
    return math.instance;
  }
  add(a, b) {
    return (a + b) * math.PI;
  }
};
module.exports = math;