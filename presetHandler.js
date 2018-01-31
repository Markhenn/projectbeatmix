// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (request, presetsIndex, newPresetArray) => {

  if (presetsIndex > 3 || presetsIndex < 0) {
    return ['404'];
  }

//  if (request !== 'GET' || request !== 'PUT') {
//    return ['400'];
//  }

  switch (request) {
    case 'GET':
      return [200, presetsIndex];
      break;
    case 'PUT':
      return [200, presetsIndex, newPresetArray];
      break;
    default:
      return [400];
      break;
  }


};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;


//  If the index was valid, presetHandler should also return a second element in the array. for 'GET' requests, that element should be the preset array at that array index. For 'PUT' requests, it should save the newPresetArray to that index and then also return it as the second element.

//  If you are testing presets with the app itself, you will need to stop and re-start your server to see the changes you write in presetHandler.js take effect.
