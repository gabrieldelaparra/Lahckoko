window.exampleJsFunctions = {
    getLocation: function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (location) {
                DotNet.invokeMethodAsync('Lahckoko.Blazor', 'ReceiveGeoLocation', location.coords.latitude, location.coords.longitude, location.coords.accuracy)
            });
        } else {
            //TODO: Implement, maybe xd.
            //DotNet.invokeMethodAsync('Lahckoko.Blazor', 'ReceiveError', 'Geolocation is not supported by this browser.');
        }
    }
};