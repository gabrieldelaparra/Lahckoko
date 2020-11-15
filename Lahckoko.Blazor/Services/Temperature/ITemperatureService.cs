using Lahckoko.Core.Models;
using System.Threading.Tasks;

namespace Lahckoko.Blazor.Services.Temperature
{
    public interface ITemperatureService
    {
        ValueTask<TemperaturePoint2D[]> GetTemperatureAsync();
    }
}
