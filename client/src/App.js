import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faReact} from '@fortawesome/free-brands-svg-icons'
import Fileupload from './components/FileUpload'

function App() {
  return (
    <div className="container mt-4">
      <h4 className="display-4 text-center mt-4">
        <FontAwesomeIcon icon={faReact}/> React File Upload
      </h4>

      <Fileupload />
    </div>
  );
}

export default App;
