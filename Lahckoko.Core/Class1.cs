using System;

namespace Lahckoko.Core
{
    public class Point2D<TX, TY>
    {
        public Point2D()  { }
        public Point2D(TX x, TY y)
        {
            X = x;
            Y = y;
        }

        public TX X {get;set;}
        public TY Y {get;set;}
    }

    public class DateTimePoint2D<TY> : Point2D<DateTime, TY>
    {

    }


}
