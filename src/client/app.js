import 'babel-polyfill';
import Dog from '../shared/dog';

const browserToby = new Dog('Browser Toby');

document.querySelecter('.app').innerText = browserToby.bark();
