import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from './Button';

function App() {

  const handleClick = () => {
    console.log('Clicked');
  };
  return (
    <div>
      <div>
        <Button primary outline rounded onClick={handleClick}>
          <GoBell />
          Primary!
        </Button>
      </div>
      <div>
        <Button secondary outline className='mb-2' >
          <GoCloudDownload />
          Secondary!
        </Button>
      </div>
      <div>
        <Button success outline onClick={handleClick}>
          <GoDatabase />
          Success!
        </Button>
      </div>
      <div>
        <Button warning outline >
          Warning!
        </Button>
      </div>
      <div>
        <Button danger outline rounded>
          Danger!
        </Button>
      </div>
      <div>
        <Button>
          Standard!
        </Button>
      </div>
    </div>
  );
}

export default App;
