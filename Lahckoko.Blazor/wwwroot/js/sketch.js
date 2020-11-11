//Config


var _height;
var _width;

//var _temps = [30, 29, 28, 28, 17, 14, 13, 12, 10, 6, 8, 11, 15, 20, 23];

var offset;
let weatherData = [{
  "dt": 1595451600,
  "main": {
    "temp": 297.72,
    "feels_like": 299.3,
    "temp_min": 297.72,
    "temp_max": 299.07,
    "pressure": 1013,
    "sea_level": 1013,
    "grnd_level": 993,
    "humidity": 77,
    "temp_kf": -1.35
  },
  "weather": [{
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10d"
  }],
  "clouds": {
    "all": 83
  },
  "wind": {
    "speed": 3.21,
    "deg": 193
  },
  "visibility": 10000,
  "pop": 0.71,
  "rain": {
    "3h": 1.17
  },
  "sys": {
    "pod": "d"
  },
  "dt_txt": "2020-07-22 21:00:00"
}, {
  "dt": 1595462400,
  "main": {
    "temp": 298.13,
    "feels_like": 300.17,
    "temp_min": 298.13,
    "temp_max": 298.6,
    "pressure": 1012,
    "sea_level": 1012,
    "grnd_level": 993,
    "humidity": 74,
    "temp_kf": -0.47
  },
  "weather": [{
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10d"
  }],
  "clouds": {
    "all": 85
  },
  "wind": {
    "speed": 2.38,
    "deg": 230
  },
  "visibility": 10000,
  "pop": 0.91,
  "rain": {
    "3h": 2.98
  },
  "sys": {
    "pod": "d"
  },
  "dt_txt": "2020-07-23 00:00:00"
}, {
  "dt": 1595473200,
  "main": {
    "temp": 297.07,
    "feels_like": 299.61,
    "temp_min": 297.07,
    "temp_max": 297.11,
    "pressure": 1013,
    "sea_level": 1013,
    "grnd_level": 994,
    "humidity": 78,
    "temp_kf": -0.04
  },
  "weather": [{
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10n"
  }],
  "clouds": {
    "all": 7
  },
  "wind": {
    "speed": 1.55,
    "deg": 258
  },
  "visibility": 10000,
  "pop": 0.91,
  "rain": {
    "3h": 2.4
  },
  "sys": {
    "pod": "n"
  },
  "dt_txt": "2020-07-23 03:00:00"
}, {
  "dt": 1595484000,
  "main": {
    "temp": 295.62,
    "feels_like": 297.63,
    "temp_min": 295.61,
    "temp_max": 295.62,
    "pressure": 1013,
    "sea_level": 1013,
    "grnd_level": 993,
    "humidity": 81,
    "temp_kf": 0.01
  },
  "weather": [{
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "01n"
  }],
  "clouds": {
    "all": 1
  },
  "wind": {
    "speed": 1.78,
    "deg": 338
  },
  "visibility": 10000,
  "pop": 0.92,
  "sys": {
    "pod": "n"
  },
  "dt_txt": "2020-07-23 06:00:00"
}, {
  "dt": 1595494800,
  "main": {
    "temp": 294.61,
    "feels_like": 296.23,
    "temp_min": 294.61,
    "temp_max": 294.61,
    "pressure": 1013,
    "sea_level": 1013,
    "grnd_level": 993,
    "humidity": 84,
    "temp_kf": 0
  },
  "weather": [{
    "id": 803,
    "main": "Clouds",
    "description": "broken clouds",
    "icon": "04n"
  }],
  "clouds": {
    "all": 71
  },
  "wind": {
    "speed": 2.08,
    "deg": 330
  },
  "visibility": 10000,
  "pop": 0,
  "sys": {
    "pod": "n"
  },
  "dt_txt": "2020-07-23 09:00:00"
}, {
  "dt": 1595505600,
  "main": {
    "temp": 294.74,
    "feels_like": 295.67,
    "temp_min": 294.74,
    "temp_max": 294.74,
    "pressure": 1014,
    "sea_level": 1014,
    "grnd_level": 995,
    "humidity": 81,
    "temp_kf": 0
  },
  "weather": [{
    "id": 802,
    "main": "Clouds",
    "description": "scattered clouds",
    "icon": "03d"
  }],
  "clouds": {
    "all": 43
  },
  "wind": {
    "speed": 2.77,
    "deg": 337
  },
  "visibility": 10000,
  "pop": 0,
  "sys": {
    "pod": "d"
  },
  "dt_txt": "2020-07-23 12:00:00"
}, {
  "dt": 1595516400,
  "main": {
    "temp": 297.1,
    "feels_like": 298.1,
    "temp_min": 297.1,
    "temp_max": 297.1,
    "pressure": 1015,
    "sea_level": 1015,
    "grnd_level": 995,
    "humidity": 71,
    "temp_kf": 0
  },
  "weather": [{
    "id": 801,
    "main": "Clouds",
    "description": "few clouds",
    "icon": "02d"
  }],
  "clouds": {
    "all": 15
  },
  "wind": {
    "speed": 2.79,
    "deg": 344
  },
  "visibility": 10000,
  "pop": 0.03,
  "sys": {
    "pod": "d"
  },
  "dt_txt": "2020-07-23 15:00:00"
}, {
  "dt": 1595527200,
  "main": {
    "temp": 299.19,
    "feels_like": 299.96,
    "temp_min": 299.19,
    "temp_max": 299.19,
    "pressure": 1015,
    "sea_level": 1015,
    "grnd_level": 996,
    "humidity": 62,
    "temp_kf": 0
  },
  "weather": [{
    "id": 801,
    "main": "Clouds",
    "description": "few clouds",
    "icon": "02d"
  }],
  "clouds": {
    "all": 23
  },
  "wind": {
    "speed": 3.01,
    "deg": 341
  },
  "visibility": 10000,
  "pop": 0.05,
  "sys": {
    "pod": "d"
  },
  "dt_txt": "2020-07-23 18:00:00"
}, {
  "dt": 1595538000,
  "main": {
    "temp": 300,
    "feels_like": 300.53,
    "temp_min": 300,
    "temp_max": 300,
    "pressure": 1015,
    "sea_level": 1015,
    "grnd_level": 995,
    "humidity": 57,
    "temp_kf": 0
  },
  "weather": [{
    "id": 801,
    "main": "Clouds",
    "description": "few clouds",
    "icon": "02d"
  }],
  "clouds": {
    "all": 13
  },
  "wind": {
    "speed": 2.99,
    "deg": 5
  },
  "visibility": 10000,
  "pop": 0.13,
  "sys": {
    "pod": "d"
  },
  "dt_txt": "2020-07-23 21:00:00"
}, {
  "dt": 1595548800,
  "main": {
    "temp": 298.35,
    "feels_like": 299.04,
    "temp_min": 298.35,
    "temp_max": 298.35,
    "pressure": 1016,
    "sea_level": 1016,
    "grnd_level": 996,
    "humidity": 60,
    "temp_kf": 0
  },
  "weather": [{
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "01d"
  }],
  "clouds": {
    "all": 9
  },
  "wind": {
    "speed": 2.34,
    "deg": 11
  },
  "visibility": 10000,
  "pop": 0.13,
  "sys": {
    "pod": "d"
  },
  "dt_txt": "2020-07-24 00:00:00"
}, {
  "dt": 1595559600,
  "main": {
    "temp": 295.22,
    "feels_like": 294.53,
    "temp_min": 295.22,
    "temp_max": 295.22,
    "pressure": 1017,
    "sea_level": 1017,
    "grnd_level": 997,
    "humidity": 67,
    "temp_kf": 0
  },
  "weather": [{
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "01n"
  }],
  "clouds": {
    "all": 1
  },
  "wind": {
    "speed": 3.64,
    "deg": 350
  },
  "visibility": 10000,
  "pop": 0,
  "sys": {
    "pod": "n"
  },
  "dt_txt": "2020-07-24 03:00:00"
}, {
  "dt": 1595570400,
  "main": {
    "temp": 294.39,
    "feels_like": 294.45,
    "temp_min": 294.39,
    "temp_max": 294.39,
    "pressure": 1018,
    "sea_level": 1018,
    "grnd_level": 998,
    "humidity": 71,
    "temp_kf": 0
  },
  "weather": [{
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "01n"
  }],
  "clouds": {
    "all": 0
  },
  "wind": {
    "speed": 2.62,
    "deg": 24
  },
  "visibility": 10000,
  "pop": 0,
  "sys": {
    "pod": "n"
  },
  "dt_txt": "2020-07-24 06:00:00"
}, {
  "dt": 1595581200,
  "main": {
    "temp": 294.02,
    "feels_like": 293.42,
    "temp_min": 294.02,
    "temp_max": 294.02,
    "pressure": 1018,
    "sea_level": 1018,
    "grnd_level": 998,
    "humidity": 65,
    "temp_kf": 0
  },
  "weather": [{
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "01n"
  }],
  "clouds": {
    "all": 0
  },
  "wind": {
    "speed": 2.68,
    "deg": 37
  },
  "visibility": 10000,
  "pop": 0,
  "sys": {
    "pod": "n"
  },
  "dt_txt": "2020-07-24 09:00:00"
}, {
  "dt": 1595592000,
  "main": {
    "temp": 294.48,
    "feels_like": 293.54,
    "temp_min": 294.48,
    "temp_max": 294.48,
    "pressure": 1020,
    "sea_level": 1020,
    "grnd_level": 1000,
    "humidity": 61,
    "temp_kf": 0
  },
  "weather": [{
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "01d"
  }],
  "clouds": {
    "all": 0
  },
  "wind": {
    "speed": 2.9,
    "deg": 41
  },
  "visibility": 10000,
  "pop": 0,
  "sys": {
    "pod": "d"
  },
  "dt_txt": "2020-07-24 12:00:00"
}, {
  "dt": 1595602800,
  "main": {
    "temp": 298.13,
    "feels_like": 297.4,
    "temp_min": 298.13,
    "temp_max": 298.13,
    "pressure": 1020,
    "sea_level": 1020,
    "grnd_level": 1000,
    "humidity": 49,
    "temp_kf": 0
  },
  "weather": [{
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "01d"
  }],
  "clouds": {
    "all": 0
  },
  "wind": {
    "speed": 2.62,
    "deg": 85
  },
  "visibility": 10000,
  "pop": 0,
  "sys": {
    "pod": "d"
  },
  "dt_txt": "2020-07-24 15:00:00"
}, {
  "dt": 1595613600,
  "main": {
    "temp": 299.8,
    "feels_like": 298.71,
    "temp_min": 299.8,
    "temp_max": 299.8,
    "pressure": 1019,
    "sea_level": 1019,
    "grnd_level": 1000,
    "humidity": 46,
    "temp_kf": 0
  },
  "weather": [{
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "01d"
  }],
  "clouds": {
    "all": 4
  },
  "wind": {
    "speed": 3.39,
    "deg": 112
  },
  "visibility": 10000,
  "pop": 0,
  "sys": {
    "pod": "d"
  },
  "dt_txt": "2020-07-24 18:00:00"
}, {
  "dt": 1595624400,
  "main": {
    "temp": 299.53,
    "feels_like": 298.49,
    "temp_min": 299.53,
    "temp_max": 299.53,
    "pressure": 1018,
    "sea_level": 1018,
    "grnd_level": 999,
    "humidity": 47,
    "temp_kf": 0
  },
  "weather": [{
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "01d"
  }],
  "clouds": {
    "all": 3
  },
  "wind": {
    "speed": 3.36,
    "deg": 126
  },
  "visibility": 10000,
  "pop": 0,
  "sys": {
    "pod": "d"
  },
  "dt_txt": "2020-07-24 21:00:00"
}];

let colors = {
  "temp": "#354565"
};

let currentDt;
let todayDate = new Date(Date.now()) / 1000;
let sunriseDt = Date.parse(new Date("2019-04-16 08:00:00")) / 1000;
let sunsetDt = Date.parse(new Date("2019-04-15 18:00:00")) / 1000;

let endDayDt = todayDate + 24 * 60 * 60; //Date.parse(new Date("2019-04-16 " + todayDate.getHours() + ":" + todayDate.getMinutes() + ":" + todayDate.getSeconds())) / 1000;

function preload() {
  //let url = "weather_data.json";
  //weatherData = loadJSON(url);
}

function mouseDragged() {
  currentDt += (mouseX - pmouseX) * 100;
}

function doubleClicked() {
  //TODO change to click without drag
  currentDt = Date.now() / 1000;
}

function getDates() {
  sunriseDt = Date.parse(new Date("2019-04-16 08:00:00")) / 1000;
  sunsetDt = Date.parse(new Date("2019-04-15 18:00:00")) / 1000;
  //endDayDt = todayDate + 24 * 60 * 60;
  todayDate = new Date(Date.now());
  // currentDt = Date.now() / 1000 + millis() * 6;
  endDayDt = currentDt + 24 * 60 * 60;
  // endDayDt = Date.parse(new Date("2019-04-16 " + todayDate.getHours() + ":" + todayDate.getMinutes() + ":" + todayDate.getSeconds())) / 1000;
}

function setup() {
  var myCanvas = createCanvas(600, 600);
  myCanvas.parent("canvasDiv");
  //currentDt = Date.parse(new Date("2019-04-15 " + todayDate.getHours() + ":" + todayDate.getMinutes() + ":" + todayDate.getSeconds())) / 1000;
  currentDt = Date.now() / 1000;
  _height = 600;
  _width = 600;
}

function dtToRadians(dt) {
  return 3 * HALF_PI + (dt - currentDt) * TWO_PI / (24 * 60 * 60);
}

function draw() {

  getDates();
  //currentDt = Date.parse(new Date("2019-04-15 " + todayDate.getHours() + ":" + todayDate.getMinutes() + ":" + todayDate.getSeconds())) / 1000;
  background(155, 237, 255);
  // p = currentTime.getSeconds();
  //noStroke();
  stroke(201, 104, 150);
  fill(201, 104, 150);
  drawTemperature();

  fill(26, 159, 219);
  //stroke(100, 100, 200);
  noStroke();
  drawRain();


  //stroke(26, 159, 219);
  fill(250, 250, 250, 160);
  drawClouds();

  fill(162, 216, 250, 80);
  // stroke(162, 216, 250, 5);
  drawNight();
  // strokeWeight(1);
  stroke(140);
  line(_width / 2, _height / 2, _width / 2, 0);
}

function drawNight() {

  beginShape(TRIANGLE_FAN);
  vertex(_width / 2, _height / 2);
  for (i = 0; i <= 8; i++) {
    let radians = dtToRadians(lerp(sunsetDt, sunriseDt, i / 8));
    var x = _width / 2 + cos(radians) * _height * 2;
    var y = _height / 2 + sin(radians) * _height * 2;
    vertex(x, y);
  }
  endShape();
}

function FtoC(temp) {
  return round((temp - 273.0) * 10) / 10;
}

function drawTemperature(scale = 3, offset = 30) {
  beginShape(TRIANGLE_FAN);
  vertex(_width / 2, _height / 2);
  for (i = 0; i < weatherData.length; i++) {

    if (weatherData[i].dt < currentDt - 3 * 60 * 60 || weatherData[i].dt > endDayDt + 3 * 60 * 60) {
      continue;
    }

    // First record
    if (weatherData[i].dt < currentDt && weatherData.length > i + 1) {
      //TODO check array bounds      
      let temp1 = FtoC(weatherData[i].main.temp);
      let temp2 = FtoC(weatherData[i + 1].main.temp);

      let temp = lerp(temp1, temp2, (currentDt - weatherData[i].dt) / (weatherData[i + 1].dt - weatherData[i].dt)) * scale + offset;

      var x = _width / 2;
      var y = _height / 2 - temp;
      vertex(x, y);
      continue;
    }
    // Last one     
    if (weatherData[i].dt > endDayDt && i > 0) {
      //TODO check array bounds
      let temp1 = FtoC(weatherData[i - 1].main.temp);
      let temp2 = FtoC(weatherData[i].main.temp);

      let temp = lerp(temp1, temp2, (endDayDt - weatherData[i - 1].dt) / (weatherData[i].dt - weatherData[i - 1].dt)) * scale + offset;

      var x = _width / 2;
      var y = _height / 2 - temp;
      vertex(x, y);
      continue;
    }

    let radians = dtToRadians(weatherData[i].dt);
    let temp = FtoC(weatherData[i].main.temp) * scale + offset;
    //console.log(temp);
    var x = _width / 2 + cos(radians) * temp;
    var y = _height / 2 + sin(radians) * temp;
    vertex(x, y);
  }
  endShape();
}


function drawRain(top = 150, scale = 4) {
  beginShape(TRIANGLE_STRIP);
  // vertex(_width / 2, _height / 2);
  //let top = 100;
  for (i = 0; i < weatherData.length; i++) {

    if (weatherData[i].dt < currentDt - 3 * 60 * 60 || weatherData[i].dt > endDayDt + 3 * 60 * 60) {
      continue;
    }
    if (weatherData[i].dt < currentDt && weatherData.length > i + 1) {
      let temp, temp1, temp2 = top;
      if (weatherData[i]["rain"]) {
        temp1 = top - weatherData[i]["rain"]["3h"] * scale;
      }
      if (weatherData[i + 1]["rain"]) {
        temp2 = top - weatherData[i + 1]["rain"]["3h"] * scale;
      }
      temp = lerp(temp1, temp2, (currentDt - weatherData[i].dt) / (weatherData[i + 1].dt - weatherData[i].dt));
      var _x = _width / 2;
      var _y = _height / 2 - top;

      var x = _width / 2;
      var y = _height / 2 - temp;

      vertex(_x, _y);
      vertex(x, y);

      continue;
    }
    // Last one     

    if (weatherData[i].dt > endDayDt && i > 0) {

      let temp, temp1, temp2 = top;
      if (weatherData[i - 1]["rain"]) {
        temp1 = top - weatherData[i - 1]["rain"]["3h"] * scale;
      }
      if (weatherData[i]["rain"]) {
        temp2 = top - weatherData[i]["rain"]["3h"] * scale;
      }
      temp = lerp(temp1, temp2, (endDayDt - weatherData[i - 1].dt) / (weatherData[i].dt - weatherData[i - 1].dt));
      var _x = _width / 2;
      var _y = _height / 2 - top;

      var x = _width / 2;
      var y = _height / 2 - temp;
      vertex(_x, _y);
      vertex(x, y);
      continue;

    }
    let radians = dtToRadians(weatherData[i].dt);
    let dataPoint = top;
    if (weatherData[i]["rain"]) {
      dataPoint = top - weatherData[i]["rain"]["3h"] * scale;
    }

    var _x = _width / 2 + cos(radians) * top;
    var _y = _height / 2 + sin(radians) * top;

    var x = _width / 2 + cos(radians) * dataPoint;
    var y = _height / 2 + sin(radians) * dataPoint;

    vertex(_x, _y);
    vertex(x, y);

  }
  endShape();
}

function drawClouds(top = 150, scale = 0.25) {
  beginShape(TRIANGLE_STRIP);
  //vertex(_width / 2, _height / 2);
  //let top = 100;
  for (i = 0; i < weatherData.length; i++) {

    if (weatherData[i].dt < currentDt - 3 * 60 * 60 || weatherData[i].dt > endDayDt + 3 * 60 * 60) {
      continue;
    }
    if (weatherData[i].dt < currentDt && weatherData.length > i + 1) {
      let temp, temp1, temp2 = top;
      if (weatherData[i].clouds["all"]) {
        temp1 = top - weatherData[i].clouds["all"] * scale;
      }
      if (weatherData[i + 1].clouds["all"]) {
        temp2 = top - weatherData[i + 1].clouds["all"] * scale;
      }
      temp = lerp(temp1, temp2, (currentDt - weatherData[i].dt) / (weatherData[i + 1].dt - weatherData[i].dt));
      var _x = _width / 2;
      var _y = _height / 2 - top;

      var x = _width / 2;
      var y = _height / 2 - temp;

      vertex(x, y);
      vertex(_x, _y);
      continue;
    }
    // Last one     
    if (weatherData[i].dt > endDayDt && i > 0) {
      //TODO check array bounds
      let temp, temp1, temp2 = top;
      if (weatherData[i - 1].clouds["all"]) {
        temp1 = top - weatherData[i - 1].clouds["all"] * scale;
      }
      if (weatherData[i].clouds["all"]) {
        temp2 = top - weatherData[i].clouds["all"] * scale;
      }
      temp = lerp(temp1, temp2, (endDayDt - weatherData[i - 1].dt) / (weatherData[i].dt - weatherData[i - 1].dt));
      var _x = _width / 2;
      var _y = _height / 2 - top;

      var x = _width / 2;
      var y = _height / 2 - temp;

      vertex(x, y);
      vertex(_x, _y);
      continue;

    }
    let radians = dtToRadians(weatherData[i].dt);
    let dataPoint = top - weatherData[i].clouds["all"] * scale;

    var _x = _width / 2 + cos(radians) * top;
    var _y = _height / 2 + sin(radians) * top;

    var x = _width / 2 + cos(radians) * dataPoint;
    var y = _height / 2 + sin(radians) * dataPoint;

    vertex(x, y);
    vertex(_x, _y);


  }
  endShape();
}

function windowResized() {
  // resizeCanvas(windowWidth, windowHeight);
}