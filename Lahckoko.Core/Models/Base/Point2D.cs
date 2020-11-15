namespace Lahckoko.Core.Models.Base
{
    public abstract class Point2D<TX, TY>
    {
        protected Point2D()  { }
        protected Point2D(TX x, TY y)
        {
            X = x;
            Y = y;
        }

        public TX X {get;set;}
        public TY Y {get;set;}
    }
}