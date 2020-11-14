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

    //getLocationModel: function () {
    //    if (navigator.geolocation) {
    //        navigator.geolocation.getCurrentPosition(function (location) {
    //            return "asdasd";
    //            //console.log(refLocation);
    //            //refLocation.Accuracy = location.coords.accuracy;
    //            //refLocation.Latitude = location.coords.latitude;
    //            //refLocation.Longitude = location.coords.longitude;
    //            //var value = {
    //            //    "Accuracy": location.coords.accuracy,
    //            //    "Latitude": location.coords.latitude,
    //            //    "Longitude": location.coords.longitude,
    //            //};
    //            //return refLocation;
    //        });
    //    } else {
    //        //TODO: Implement, maybe xd
    //        //DotNet.invokeMethodAsync('Lahckoko.Blazor', 'ReceiveError', 'Geolocation is not supported by this browser.');
    //    }
    //}
};