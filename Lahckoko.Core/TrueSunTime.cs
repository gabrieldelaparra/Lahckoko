using System;

namespace Lahckoko.Core
{
    public class TrueSunTime
    {
        public const double LatSantiago = -33.4691199;
        public const double LonSantiago = -70.641997;

        public double LongitudeToDegrees(double longitude) => (longitude + 360) % 360;
            

        public double FractionalYear(int dayOfTheYear, int hour, bool isLeapYear) {
            if (isLeapYear)
            {
                return Math.PI * 2 / 365 * (dayOfTheYear - 1 + (hour - 12) / 24);
            }
            else {
                return Math.PI * 2 / 366 * (dayOfTheYear - 1 + (hour - 12) / 24);
            }
        }

        public double EquationOfTime(double fractionalYear) => (
            229.18 * (0.000075 + 0.001868 * Math.Cos(fractionalYear)
            - 0.032077 * Math.Sin(fractionalYear)
            - 0.014615 * Math.Cos(2* fractionalYear)
            - 0.040849 * Math.Sin(2* fractionalYear) ));
        public double Declination(double fractionalYear) {
            return 0.006918
               - 0.399912 * Math.Cos(fractionalYear)
               + 0.070257 * Math.Sin(fractionalYear)
               - 0.006758 * Math.Cos(2 * fractionalYear)
               + 0.000907 * Math.Sin(2 * fractionalYear)
               - 0.002697 * Math.Cos(3 * fractionalYear)
               + 0.00148 * Math.Sin(3 * fractionalYear);
        }
        public double TimeOffset(double equationOfTime, double longitude, double timezone) {
            //            where eqtime is in minutes, longitude is in degrees(positive to the east of the Prime Meridian),
            //timezone is in hours from UTC(U.S.Mountain Standard Time = –7 hours).
            return equationOfTime + 4 * longitude - 60 * timezone;
        }
        public double TrueSolarTime(double hour, double minute, double seconds, double timeOffset) {
            return hour * 60 + minute + seconds / 60 + timeOffset;
        }
        public double SolarHourAngle(double trueSolarTime) {
            return trueSolarTime / 4 - 180;
        }

    }
}
