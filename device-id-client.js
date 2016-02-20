var storedName = "___deviceId"

_.extend(DeviceId, {
  isSet(callback) {
    if(!DeviceId.get())
      return callback(undefined, false);

    // Make sure present on server too
    Meteor.call('deviceId/isClaimed', this.get(), callback)
  },

  get() {
    return window.localStorage.getItem(storedName);
  },

  store(deviceId) {
    window.localStorage.setItem(storedName, deviceId)
  },

  gen(callback) {
    this.isSet(function(error, isSet) {
      if(!isSet) {
        Meteor.call('deviceId/gen', function(error, deviceId) {
          if(error)
            return callback(error);

          DeviceId.store(deviceId);
          return callback(undefined, deviceId);
        })
      }

      callback(undefined, DeviceId.get());
    })
  },

  simpleGen() {
    DeviceId.gen(function(e, d) { });
  }
})
