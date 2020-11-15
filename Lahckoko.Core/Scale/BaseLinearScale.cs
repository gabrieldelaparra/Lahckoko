using System.Linq;

namespace Lahckoko.Core.Scale
{
    public abstract class BaseLinearScale<TDomain> : IScale<TDomain, double>
    {
        public TDomain[] Domain { get; set; }
        public double[] Range { get; set; }
        private readonly double _domainMin;
        private readonly double _domainMax;
        private readonly double _rangeMin;
        private readonly double _rangeMax;

        protected BaseLinearScale(TDomain[] domain, double[] range)
        {
            Domain = domain;
            Range = range;
            _domainMin = ToDouble(Domain.Min());
            _domainMax = ToDouble(Domain.Max());
            _rangeMin = Range.Min();
            _rangeMax = Range.Max();
        }

        public abstract double ToDouble(TDomain value);

        public double Scale(TDomain domainValue)
        {
            var value = ToDouble(domainValue);

            var scale = (float)(_rangeMax - _rangeMin) / (float)(_domainMax - _domainMin);
            var offset = _rangeMin - _domainMin * scale;
            var result = value * scale + offset;
            return result;
        }
    }
}