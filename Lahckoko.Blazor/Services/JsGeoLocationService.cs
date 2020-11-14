using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lahckoko.Blazor.Models;
using Microsoft.JSInterop;

namespace Lahckoko.Blazor.Services
{
    public class JsGeoLocationService : IGeoLocationService
    {
        private readonly IJSRuntime _jSRuntime;
        private static readonly IDictionary<Guid, TaskCompletionSource<Location>> PendingRequests = new Dictionary<Guid, TaskCompletionSource<Location>>();

        public JsGeoLocationService(IJSRuntime jSRuntime)
        {
            _jSRuntime = jSRuntime;
        }

        public async ValueTask<Location> GetGeoLocationAsync()
        {
            var tcs = new TaskCompletionSource<Location>();
            var requestId = Guid.NewGuid();

            PendingRequests.Add(requestId, tcs);

            await _jSRuntime.InvokeVoidAsync("geoLocationServiceJS.getLocation", requestId);
            return await tcs.Task;
        }

        [JSInvokable]
        public static void ReceiveGeoLocation(string requestId, decimal latitude, decimal longitude, decimal accuracy)
        {
            var idVal = Guid.Parse(requestId);
            var pendingTask = PendingRequests.First(x => x.Key == idVal).Value;

            var location = new Location
            {
                Latitude = latitude,
                Longitude = longitude,
                Accuracy = accuracy,
            };
            pendingTask.SetResult(location);
        }
    }
}