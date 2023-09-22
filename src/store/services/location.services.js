import Geolocation from '@react-native-community/geolocation';

export const locationServices = {
    startTracking,
    stopTracking,
}

function startTracking(onLocationUpdated) {
  const watchId = Geolocation.watchPosition(
    position => {
      onLocationUpdated(position)
    },
    error => {
      console.log(error);
    },
    {
      distanceFilter: 10, // Minimum distance (in meters) to update the location
      interval: 900000, // Update interval (in milliseconds), which is 15 minutes
      fastestInterval: 300000, // Fastest update interval (in milliseconds)
      accuracy: {
        android: 'highAccuracy',
        ios: 'best',
      },
      showsBackgroundLocationIndicator: true,
      pausesLocationUpdatesAutomatically: false,
      activityType: 'fitness', // Specify the activity type (e.g., 'fitness' or 'other')
      useSignificantChanges: false,
      deferredUpdatesInterval: 0,
      deferredUpdatesDistance: 0,
      foregroundService: {
        notificationTitle: 'Tracking your location',
        notificationBody: 'Enable location tracking to continue', // Add a notification body
      },
    }
  );
  return Promise.resolve(watchId);
}

function stopTracking(watchId) {
  Geolocation.clearWatch(watchId);
  return Promise.resolve(true);
}