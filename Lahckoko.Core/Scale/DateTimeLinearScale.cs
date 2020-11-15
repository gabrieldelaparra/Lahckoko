using System;

namespace Lahckoko.Core.Scale
{
    public class DateTimeLinearScale : BaseLinearScale<DateTime>
    {
        public DateTimeLinearScale(DateTime[] domain, double[] range) : base(domain, range) { }
        public override double ToDouble(DateTime value)
        {
            return value.ToOADate();
        }
    }
}