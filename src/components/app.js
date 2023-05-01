import keys from './key';

export default class App {
  output() {
    Object.keys(keys).forEach(keyName => {
      const keyData = keys[keyName];
      console.log(keyName, keyData);
    });
  }
}