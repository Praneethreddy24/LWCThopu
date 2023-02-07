import { LightningElement } from 'lwc';
let onion = document.getElementById('onion');
let chopButton = document.getElementById('chop-button');

chopButton.addEventListener('click', function() {
  onion.src = "chopped_onion.png";
});


export default class OnionChopping extends LightningElement {}