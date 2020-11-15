using System;
using System.Collections.Generic;

namespace Lahckoko.Core.Scale
{
    public class DateTimeLinearScale : BaseLinearScale<DateTime>
    {
        public DateTimeLinearScale(IReadOnlyList<DateTime> domain, IReadOnlyList<double> range) : base(domain, range) { }
        public override double ToDouble(DateTime value)
        {
            return value.ToOADate();
        }
    }
}