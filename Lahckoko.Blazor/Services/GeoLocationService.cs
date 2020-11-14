using System;
using System.Threading.Tasks;
using Lahckoko.Blazor.Models;
using Microsoft.JSInterop;

namespace Lahckoko.Blazor.Services
{
    public class GeoLocationService //: IGeoLocationService
    {
        private readonly IJSRuntime _jSRuntime;

        public GeoLocationService(IJSRuntime jSRuntime)
        {
            _jSRuntime = jSRuntime;
        }
        public static Action<Location> OnLocationReceived { get; set; }

        public async Task RequestGeoLocation()
        {
            await _jSRuntime.InvokeVoidAsync("geoLocationServiceJS.getLocation");
        }

        [JSInvokable]
        public static void ReceiveGeoLocation(decimal latitude, decimal longitude, decimal accuracy) {
            var location = new Location {
                Latitude = latitude,
                Longitude = longitude,
                Accuracy = accuracy,
            };
            OnLocationReceived?.Invoke(location);
        }
    }

    //public class MockGeoLocationService : IGeoLocationService
    //{
    //    public Action<Location> OnLocationReceived { get; set; }
    //    public void ReceiveGeoLocation(decimal latitude, decimal longitude, decimal accuracy)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public Task RequestGeoLocation()
    //    {
    //        OnLocationReceived?.Invoke(new Location {
    //            Latitude = 10,
    //            Longitude = 20,
    //            Accuracy = 30,
    //        });
    //        return null;
    //    }
    //}

    //public interface IGeoLocationService
    //{
    //    static Action<Location> OnLocationReceived { get; set; }

    //    [JSInvokable]
    //    void ReceiveGeoLocation(decimal latitude, decimal longitude, decimal accuracy);
    //    Task RequestGeoLocation();
    //}
}