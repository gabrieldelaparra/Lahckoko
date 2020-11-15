using System.Collections.Generic;

namespace Lahckoko.Core.Scale
{

    public class LinearScale : BaseLinearScale<double>
    {
        public LinearScale(IReadOnlyList<double> domain, IReadOnlyList<double> range) : base(domain, range) { }
        public override double ToDouble(double value)
        {
            return value;
        }
    }
}