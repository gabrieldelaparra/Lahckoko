namespace Lahckoko.Core.Scale
{
    public class DoubleLinearScale : BaseLinearScale<double>
    {
        public DoubleLinearScale(double[] domain, double[] range) : base(domain, range) { }
        public override double ToDouble(double value)
        {
            return value;
        }
    }
}