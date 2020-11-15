using System;
using Lahckoko.Core.Models.Base;

namespace Lahckoko.Core.Models
{
    public class TemperaturePoint2D : DateTimePoint2D<double> {
        public TemperaturePoint2D() { }
        public TemperaturePoint2D(DateTime x, double y) : base(x, y) { }
    }
}
