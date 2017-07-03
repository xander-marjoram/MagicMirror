/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "UK Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/UK-Holidays.ics"
					}
				]
			}
		},
		// {
		// 	module: "compliments",
		// 	position: "lower_third"
		// },
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Bristol",
				locationID: "2654675",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "32877c08025ec9198892d3bdb69197c9"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Bristol",
				locationID: "2654675",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "32877c08025ec9198892d3bdb69197c9"
			}
		},
		// {
		// 	module: "newsfeed",
		// 	position: "bottom_bar",
		// 	config: {
		// 		feeds: [
		// 			{
		// 				title: "New York Times",
		// 				url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
		// 			}
		// 		],
		// 		showSourceTitle: true,
		// 		showPublishDate: true
		// 	}
		// },
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
