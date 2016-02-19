DeviceId = function() {};

DeviceIds = new Mongo.Collection("DeviceIds");

_.extend(DeviceId, {
  DeviceIds: DeviceIds
})

// Only allow access through method calls
DeviceIds.allow({
  insert: function() {
    return false;
  },
  update: function() {
    return false;
  },
  remove: function() {
    return false;
  }
});
