window.geoLocationServiceJS = {
    getLocation: function (requestId) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (location) {
                DotNet.invokeMethodAsync('Lahckoko.Blazor', 'ReceiveGeoLocation', requestId, location.coords.latitude, location.coords.longitude, location.coords.accuracy)
            });
        } else {
            //TODO: Implement, maybe xd
            //DotNet.invokeMethodAsync('Lahckoko.Blazor', 'ReceiveError', 'Geolocation is not supported by this browser.');
        }
    },
};