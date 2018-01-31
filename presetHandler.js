// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (request, presetsIndex, newPresetArray) => {

  if (presetsIndex > 3 || presetsIndex < 0) {
    return [404];
  }

//  if (request !== 'GET' || request !== 'PUT') {
//    return ['400'];
//  }

  switch (request) {
    case 'GET':
      return [200, presets[presetsIndex]];
      break;
    case 'PUT':
      presets[presetsIndex] = newPresetArray;
      return [200, presets[presetsIndex]];
      break;
    default:
      return [400];
      break;
  }


};



// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
