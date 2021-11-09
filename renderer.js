// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

let  _window = null;
document.getElementById("onw").onclick = () => {
	if( _window ) _window.close();

	_window = window.open("./index-second.html", "some-title", 'top=100,left=100,width=640,height=480,_RCVAuxiliaryWindow=true');
}

