using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;
using Lahckoko.Core.Models;

namespace Lahckoko.Blazor.Services.Temperature
{
    public class MockTemperatureService : ITemperatureService
    {
        public ValueTask<TemperaturePoint2D[]> GetTemperatureAsync()
        {
            var en = new CultureInfo("en-US");
            var list = new List<TemperaturePoint2D> {
                new TemperaturePoint2D(DateTime.ParseExact("20201107T0000", "yyyyMMdd'T'HHmm", en), 8.540529),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T0100", "yyyyMMdd'T'HHmm", en), 8.150529),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T0200", "yyyyMMdd'T'HHmm", en), 8.180529),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T0300", "yyyyMMdd'T'HHmm", en), 7.9405284),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T0400", "yyyyMMdd'T'HHmm", en), 6.6405287),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T0500", "yyyyMMdd'T'HHmm", en), 5.8605285),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T0600", "yyyyMMdd'T'HHmm", en), 5.1805286),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T0700", "yyyyMMdd'T'HHmm", en), 4.9105287),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T0800", "yyyyMMdd'T'HHmm", en), 5.4405284),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T0900", "yyyyMMdd'T'HHmm", en), 7.8805285),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T1000", "yyyyMMdd'T'HHmm", en), 10.450529),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T1100", "yyyyMMdd'T'HHmm", en), 12.960529),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T1200", "yyyyMMdd'T'HHmm", en), 14.560529),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T1300", "yyyyMMdd'T'HHmm", en), 15.430529),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T1400", "yyyyMMdd'T'HHmm", en), 16.45053),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T1500", "yyyyMMdd'T'HHmm", en), 16.830528),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T1600", "yyyyMMdd'T'HHmm", en), 16.420528),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T1700", "yyyyMMdd'T'HHmm", en), 14.780529),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T1800", "yyyyMMdd'T'HHmm", en), 11.830529),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T1900", "yyyyMMdd'T'HHmm", en), 9.940529),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T2000", "yyyyMMdd'T'HHmm", en), 9.110529),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T2100", "yyyyMMdd'T'HHmm", en), 9.690529),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T2200", "yyyyMMdd'T'HHmm", en), 10.370529),
                new TemperaturePoint2D(DateTime.ParseExact("20201107T2300", "yyyyMMdd'T'HHmm", en), 11.280529),
            };
            return ValueTask.FromResult(list.ToArray());
        }
    }
}