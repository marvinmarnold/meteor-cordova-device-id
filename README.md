Facilitates anonymous data collection by allowing client to generate random ID and store on device through Cordova

Android only.

## Installation
meteor add marvin:cordova-device-id

## Usage

### Client
// get new Random.id() that does not already exist server side.
// saves to server
Meteor.call('deviceId/gen', function(error, deviceId) {

})

// save id to server side storage.
Meteor.call('deviceId/store', deviceId, function(error, insertSuccessful) {

})

// returns true if deviceId already stored on server
Meteor.call('deviceId/isClaimed', function(error, isClaimed) {

})

### Cordova
// save id to local storage. synchronous.
DeviceId.store(deviceId)

// Generate a new deviceId, store locally and on server
DeviceId.genAndStore(function(error, deviceId) {

})
