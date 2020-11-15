using Lahckoko.Core.Models.Base;

namespace Lahckoko.Core.Models
{
    public class Point2D : BasePoint2D<double, double>
    {
        public Point2D() { }
        public Point2D(double x, double y) : base(x, y) { }
    }
}
