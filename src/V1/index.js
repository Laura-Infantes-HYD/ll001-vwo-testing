import './style.scss';
import pollForEl from '../helpers/pollForEl';
import qaCookieExists from '../helpers/qaCookieExists';
import _onLoad from './components/_onLoad';
import pollForTrue from '../helpers/pollForTrue';


const testName = "ll001" // add test name here



pollForTrue(()=>{return qaCookieExists(testName)}).then(()=>{pollForEl('body').then(init)})

//pollForEl('body').then(init);

function init() {
    const testAlreadyLoaded = document.body.classList.contains(testName)
    const errorMsg = "Test already loaded"

    if (testAlreadyLoaded) { console.warn(errorMsg); return }

    document.body.classList.add(testName);
    _onLoad()

}



