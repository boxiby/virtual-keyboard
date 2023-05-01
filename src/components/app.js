import keys from './key';

export default class App {
  output() {
    const keyboardContainer = document.createElement('div');
    keyboardContainer.classList.add('keyboard');
    const textareaWrapper = document.createElement('div');
    textareaWrapper.classList.add('textarea-wrapper');
    const textarea = document.createElement('textarea');
    textareaWrapper.appendChild(textarea);
    keyboardContainer.appendChild(textareaWrapper);

    Object.keys(keys).forEach(keyName => {
      const keyData = keys[keyName];
      console.log(keyName, keyData);
    });
    document.body.appendChild(keyboardContainer);
  }
}