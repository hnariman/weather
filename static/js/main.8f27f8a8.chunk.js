(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),i=a(4),o=a(5),u=a(6),s=a(7),m=(a(2),function(e){var t=e.city_name,a=e.country_code;return l.a.createElement("div",{className:"title"},l.a.createElement("h1",null," ",t," city"),l.a.createElement("h2",null," ",a))}),d=function(e){var t=e.max_temp,a=e.min_temp,n=e.temp,r=(e.datetime,e.wind_cdir_full),c=e.sunrise_ts,i=e.sunset_ts,o=e.ts,u=new Date(1e3*i).toLocaleTimeString("en-US",{hour12:!1,hour:"numeric",minute:"2-digit"}),s=new Date(1e3*c).toLocaleTimeString("en-US",{hour12:!1,hour:"numeric",minute:"2-digit"});return l.a.createElement("div",{className:"weather"},l.a.createElement("ul",{className:"time"},l.a.createElement("li",null,new Date(1e3*o).toLocaleString("en-US",{weekday:"long"})),l.a.createElement("li",null,"Sunrise: ",s),l.a.createElement("li",null,"Sunset: ",u)),l.a.createElement("ul",{className:"temp"},l.a.createElement("li",null,"Max:",t," \u2103"),l.a.createElement("li",null," Temp: ",n," \u2103"),l.a.createElement("li",null," Min: ",a," \u2103")),l.a.createElement("ul",{className:"wind"},l.a.createElement("li",null," Wind: "),l.a.createElement("li",null," ",r.toUpperCase()," ")))},h=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={data:[],loading:!0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),navigator.geolocation.getCurrentPosition((function(t){var a=t.coords.latitude,n=t.coords.longitude;fetch("https://api.weatherbit.io/v2.0/forecast/daily?lat=".concat(a,"&lon=").concat(n,"&days=5&key=").concat("225a713f3a21409c916a8cace794e454")).then((function(e){return e.json()})).then((function(t){e.setState({data:t,loading:!1}),t.data.map((function(e){return console.log(e)}))})).catch((function(e){return e}))}))}},{key:"render",value:function(){return l.a.createElement("section",{className:"App"},l.a.createElement(m,this.state.data),this.state.loading&&l.a.createElement(p,null),this.state.loading||this.state.data.data.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement(d,e))})))}}]),a}(l.a.Component),p=function(){return l.a.createElement("h1",null," DATA IS LOADING ")},E=h;c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root"))},2:function(e,t,a){},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.8f27f8a8.chunk.js.map