using System.Threading.Tasks;
using Lahckoko.Blazor.Models;

namespace Lahckoko.Blazor.Services.GeoLocation
{
    public interface IGeoLocationService
    {
        ValueTask<Location> GetGeoLocationAsync();
    }
}