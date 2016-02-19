var storedName = "___deviceId"

_.extend(DeviceId, {
  get() {
    return window.localStorage.getItem(storedName);
  },

  store(deviceId) {
    window.localStorage.setItem(storedName, deviceId)
  },

  gen(callback) {
    Meteor.call('deviceId/gen', function(error, deviceId) {
      if(error)
        callback(error);

      DeviceId.store(deviceId);
      callback(undefined, deviceId);
    })
  }
})
