using System.Collections.Generic;
using System.Linq;

namespace Lahckoko.Core.Scale
{
    public abstract class BaseLinearScale<TDomain> : IScale<TDomain, double>
    {
        //public TDomain[] Domain { get; set; }
        //public double[] Range { get; set; }
        private readonly double _domainMin;
        private readonly double _domainMax;
        private readonly double _rangeMin;
        private readonly double _rangeMax;

        protected BaseLinearScale(IReadOnlyList<TDomain> domain, IReadOnlyList<double> range)
        {
            if (domain.Count.Equals(2)) {
                _domainMin = ToDouble(domain[0]);
                _domainMax = ToDouble(domain[1]);
            }
            else {
                _domainMin = ToDouble(domain.Min());
                _domainMax = ToDouble(domain.Max());
            }

            if (range.Count.Equals(2)) {
                _rangeMin = range[0];
                _rangeMax = range[1];
            }
            else {
                _rangeMin = range.Min();
                _rangeMax = range.Max();
            }
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