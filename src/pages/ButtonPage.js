import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from './../components/Button';

function ButtonPage() {

  const handleClick = () => { };

  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick}>
          <GoBell />
          Primary!
        </Button>
      </div>
      <div>
        <Button secondary className='mb-2' >
          <GoCloudDownload />
          Secondary!
        </Button>
      </div>
      <div>
        <Button success onClick={handleClick}>
          <GoDatabase />
          Success!
        </Button>
      </div>
      <div>
        <Button warning outline>
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

export default ButtonPage;