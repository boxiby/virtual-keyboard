import './scss/style.scss';
import App from './components/app';

const app = new App();

window.onload = () => {
  app.output();
};