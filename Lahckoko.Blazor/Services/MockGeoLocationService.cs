using System.Threading.Tasks;
using Lahckoko.Blazor.Models;

namespace Lahckoko.Blazor.Services
{
    public class MockGeoLocationService : IGeoLocationService
    {
        public ValueTask<Location> GetGeoLocationAsync()
        {
            var location = new Location
            {
                Latitude = 59,
                Longitude = 16,
                Accuracy = 300,
            };
            return ValueTask.FromResult(location);
        }
    }
}