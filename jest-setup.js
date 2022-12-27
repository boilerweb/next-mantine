// Date
const _Date = Date;
global.Date = class extends _Date {
  constructor(...args) {
    if (args.length > 0) {
      return new _Date(...args);
    }

    // NOTE: test内部で new Date したときは暗黙的に2021/01/01 00:00:00(JST)になるようにする
    return new _Date('2021-01-01T00:00:00+009:00');
  }
};
