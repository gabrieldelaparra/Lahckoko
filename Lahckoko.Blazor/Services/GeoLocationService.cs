using System;
using System.Threading.Tasks;
using Lahckoko.Blazor.Models;
using Microsoft.JSInterop;

namespace Lahckoko.Blazor.Services
{
    public class GeoLocationService
    {
        private readonly IJSRuntime _jSRuntime;

        public GeoLocationService(IJSRuntime jSRuntime)
        {
            _jSRuntime = jSRuntime;
        }
        public static Action<Location> OnLocationReceived { get; set; }

        public async Task RequestGeoLocation()
        {
            await _jSRuntime.InvokeVoidAsync("exampleJsFunctions.getLocation");
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
}