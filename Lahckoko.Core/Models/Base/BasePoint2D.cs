namespace Lahckoko.Core.Models.Base
{
    public abstract class BasePoint2D<TX, TY>
    {
        protected BasePoint2D()  { }
        protected BasePoint2D(TX x, TY y)
        {
            X = x;
            Y = y;
        }

        public TX X {get;set;}
        public TY Y {get;set;}
    }
}