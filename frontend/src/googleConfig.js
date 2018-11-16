const googleConfig = () => {
  console.log(process.env.REACT_APP_GOOGLE_MAPS_API);
  var head = document.getElementsByTagName("head").item(0);
  var script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API}`);
  head.appendChild(script);

  return new Promise((res) => {
    script.addEventListener('load', () => res())
  })
}

export default googleConfig;