// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";
import { initAutocomplete } from '../plugins/init_autocomplete.js';


// Internal imports, e.g:
import { hideFooter } from '../channels/footer.js';
import { addEventListenerToEditButtom, addClickEventListerToJudgeButton, addClickEventListenerToSaveButton , addClickEventListenerToCancelButton} from '../pages/needs/show.js';
import { addClickEventToTabLink } from '../components/tab.js';
import { initMapbox } from '../plugins/init_mapbox';
import {addEventListenerToSearchForm} from '../pages/needs/search.js';


document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  addEventListenerToEditButtom();

  addClickEventListerToJudgeButton();
  addClickEventListenerToSaveButton();
  addClickEventListenerToCancelButton();
  hideFooter();
  addClickEventToTabLink();
  initMapbox();
  initAutocomplete();
  addEventListenerToSearchForm();
});


