namespace Lahckoko.Core.Scale
{
    public interface IScale<TDomain, TRange>
    {
        //TDomain[] Domain { get; set; }
        //TRange[] Range { get; set; }
        TRange Scale(TDomain domainValue);
    }
}
