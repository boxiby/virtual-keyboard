import keys from './key';

export default class App {
  output() {
    const keyboardContainer = document.createElement('div');
    keyboardContainer.classList.add('keyboard');
    const textareaWrapper = document.createElement('div');
    textareaWrapper.classList.add('textarea-wrapper');
    const textarea = document.createElement('textarea');
    textareaWrapper.appendChild(textarea);
    document.body.appendChild(textareaWrapper);

    Object.keys(keys).forEach(keyName => {
      const keyData = keys[keyName];
      const keyElement = document.createElement('div');
      keyElement.classList.add('key');
      keyElement.dataset.key = keyName;
      keyElement.dataset.layout = 'EN';

      const position = keyData.position.split('*');
      const row = position[0];
      const coll = position[1];
      const length = position[2];

      keyElement.style.gridRow = row;
      keyElement.style.gridColumn = `${coll} / span ${length}`;

      if (keyData.value && keyData.value.EN) {
        keyElement.textContent = keyData.value.EN;
      } else {
        console.error(`Missing EN value property for key ${keyName}`);
      }

      console.log(keyName, keyData);
      keyboardContainer.appendChild(keyElement);
    });
    document.body.appendChild(keyboardContainer);
  }
}