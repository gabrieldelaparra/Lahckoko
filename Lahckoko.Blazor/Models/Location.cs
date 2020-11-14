namespace Lahckoko.Blazor.Models
{
    public class Location
    {
        public Location()
        {
            
        }
        public Location(decimal latitude, decimal longitude, decimal accuracy)
        {
            Latitude = latitude;
            Longitude = longitude;
            Accuracy = accuracy;
        }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public decimal Accuracy { get; set; }

        public override string ToString()
        {
            return $"Location: ({Latitude}, {Longitude}) with accuracy {Accuracy}";
        }
    }
}
