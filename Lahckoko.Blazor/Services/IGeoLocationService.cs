using System.Threading.Tasks;
using Lahckoko.Blazor.Models;

namespace Lahckoko.Blazor.Services
{
    public interface IGeoLocationService
    {
        ValueTask<Location> GetGeoLocationAsync();
    }
}