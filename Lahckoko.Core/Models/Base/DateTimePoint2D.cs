using System;

namespace Lahckoko.Core.Models.Base
{
    public abstract class DateTimePoint2D<TY> : BasePoint2D<DateTime, TY>
    {
        protected DateTimePoint2D() { }
        protected DateTimePoint2D(DateTime x, TY y) : base(x, y) { }
    }


}
