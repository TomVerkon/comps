import React, { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

const ModalPage = () => {

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };

  const actionBar = <div><Button primary rounded onClick={onClose}>I accept!</Button></div>;

  const modal = <Modal onClose={onClose} actionBar={actionBar}>
    <p>Here is some important information you should review!</p>
  </Modal>;

  return (
    <div>
      <Button primary rounded onClick={handleClick}>Open Modal</Button>
      {showModal && modal}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu pharetra erat. Pellentesque tristique auctor feugiat. Etiam eu nulla sem. Aliquam metus neque, posuere vel sapien non, venenatis commodo ex. Donec faucibus, tortor eu pulvinar lacinia, leo tortor efficitur quam, ut placerat lorem dolor vel neque. Integer consequat ac nisl sit amet finibus. Sed rutrum, magna quis posuere ullamcorper, massa velit auctor est, et dictum turpis mi non elit. Nam rutrum lobortis diam quis ornare. Sed eu enim vel purus tristique interdum in non nisi. Nullam euismod lacus ac nisi dapibus porta. In ac porta nunc. Phasellus porttitor tincidunt ipsum, in auctor urna pretium in. Maecenas a nunc justo. Vestibulum sit amet pulvinar mauris. Etiam ligula ligula, dictum id nibh quis, faucibus porttitor est. Vivamus feugiat, lacus sit amet ullamcorper porta, felis diam lacinia urna, sed ultrices ligula mi quis augue.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu pharetra erat. Pellentesque tristique auctor feugiat. Etiam eu nulla sem. Aliquam metus neque, posuere vel sapien non, venenatis commodo ex. Donec faucibus, tortor eu pulvinar lacinia, leo tortor efficitur quam, ut placerat lorem dolor vel neque. Integer consequat ac nisl sit amet finibus. Sed rutrum, magna quis posuere ullamcorper, massa velit auctor est, et dictum turpis mi non elit. Nam rutrum lobortis diam quis ornare. Sed eu enim vel purus tristique interdum in non nisi. Nullam euismod lacus ac nisi dapibus porta. In ac porta nunc. Phasellus porttitor tincidunt ipsum, in auctor urna pretium in. Maecenas a nunc justo. Vestibulum sit amet pulvinar mauris. Etiam ligula ligula, dictum id nibh quis, faucibus porttitor est. Vivamus feugiat, lacus sit amet ullamcorper porta, felis diam lacinia urna, sed ultrices ligula mi quis augue.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu pharetra erat. Pellentesque tristique auctor feugiat. Etiam eu nulla sem. Aliquam metus neque, posuere vel sapien non, venenatis commodo ex. Donec faucibus, tortor eu pulvinar lacinia, leo tortor efficitur quam, ut placerat lorem dolor vel neque. Integer consequat ac nisl sit amet finibus. Sed rutrum, magna quis posuere ullamcorper, massa velit auctor est, et dictum turpis mi non elit. Nam rutrum lobortis diam quis ornare. Sed eu enim vel purus tristique interdum in non nisi. Nullam euismod lacus ac nisi dapibus porta. In ac porta nunc. Phasellus porttitor tincidunt ipsum, in auctor urna pretium in. Maecenas a nunc justo. Vestibulum sit amet pulvinar mauris. Etiam ligula ligula, dictum id nibh quis, faucibus porttitor est. Vivamus feugiat, lacus sit amet ullamcorper porta, felis diam lacinia urna, sed ultrices ligula mi quis augue.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu pharetra erat. Pellentesque tristique auctor feugiat. Etiam eu nulla sem. Aliquam metus neque, posuere vel sapien non, venenatis commodo ex. Donec faucibus, tortor eu pulvinar lacinia, leo tortor efficitur quam, ut placerat lorem dolor vel neque. Integer consequat ac nisl sit amet finibus. Sed rutrum, magna quis posuere ullamcorper, massa velit auctor est, et dictum turpis mi non elit. Nam rutrum lobortis diam quis ornare. Sed eu enim vel purus tristique interdum in non nisi. Nullam euismod lacus ac nisi dapibus porta. In ac porta nunc. Phasellus porttitor tincidunt ipsum, in auctor urna pretium in. Maecenas a nunc justo. Vestibulum sit amet pulvinar mauris. Etiam ligula ligula, dictum id nibh quis, faucibus porttitor est. Vivamus feugiat, lacus sit amet ullamcorper porta, felis diam lacinia urna, sed ultrices ligula mi quis augue.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu pharetra erat. Pellentesque tristique auctor feugiat. Etiam eu nulla sem. Aliquam metus neque, posuere vel sapien non, venenatis commodo ex. Donec faucibus, tortor eu pulvinar lacinia, leo tortor efficitur quam, ut placerat lorem dolor vel neque. Integer consequat ac nisl sit amet finibus. Sed rutrum, magna quis posuere ullamcorper, massa velit auctor est, et dictum turpis mi non elit. Nam rutrum lobortis diam quis ornare. Sed eu enim vel purus tristique interdum in non nisi. Nullam euismod lacus ac nisi dapibus porta. In ac porta nunc. Phasellus porttitor tincidunt ipsum, in auctor urna pretium in. Maecenas a nunc justo. Vestibulum sit amet pulvinar mauris. Etiam ligula ligula, dictum id nibh quis, faucibus porttitor est. Vivamus feugiat, lacus sit amet ullamcorper porta, felis diam lacinia urna, sed ultrices ligula mi quis augue.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu pharetra erat. Pellentesque tristique auctor feugiat. Etiam eu nulla sem. Aliquam metus neque, posuere vel sapien non, venenatis commodo ex. Donec faucibus, tortor eu pulvinar lacinia, leo tortor efficitur quam, ut placerat lorem dolor vel neque. Integer consequat ac nisl sit amet finibus. Sed rutrum, magna quis posuere ullamcorper, massa velit auctor est, et dictum turpis mi non elit. Nam rutrum lobortis diam quis ornare. Sed eu enim vel purus tristique interdum in non nisi. Nullam euismod lacus ac nisi dapibus porta. In ac porta nunc. Phasellus porttitor tincidunt ipsum, in auctor urna pretium in. Maecenas a nunc justo. Vestibulum sit amet pulvinar mauris. Etiam ligula ligula, dictum id nibh quis, faucibus porttitor est. Vivamus feugiat, lacus sit amet ullamcorper porta, felis diam lacinia urna, sed ultrices ligula mi quis augue.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu pharetra erat. Pellentesque tristique auctor feugiat. Etiam eu nulla sem. Aliquam metus neque, posuere vel sapien non, venenatis commodo ex. Donec faucibus, tortor eu pulvinar lacinia, leo tortor efficitur quam, ut placerat lorem dolor vel neque. Integer consequat ac nisl sit amet finibus. Sed rutrum, magna quis posuere ullamcorper, massa velit auctor est, et dictum turpis mi non elit. Nam rutrum lobortis diam quis ornare. Sed eu enim vel purus tristique interdum in non nisi. Nullam euismod lacus ac nisi dapibus porta. In ac porta nunc. Phasellus porttitor tincidunt ipsum, in auctor urna pretium in. Maecenas a nunc justo. Vestibulum sit amet pulvinar mauris. Etiam ligula ligula, dictum id nibh quis, faucibus porttitor est. Vivamus feugiat, lacus sit amet ullamcorper porta, felis diam lacinia urna, sed ultrices ligula mi quis augue.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu pharetra erat. Pellentesque tristique auctor feugiat. Etiam eu nulla sem. Aliquam metus neque, posuere vel sapien non, venenatis commodo ex. Donec faucibus, tortor eu pulvinar lacinia, leo tortor efficitur quam, ut placerat lorem dolor vel neque. Integer consequat ac nisl sit amet finibus. Sed rutrum, magna quis posuere ullamcorper, massa velit auctor est, et dictum turpis mi non elit. Nam rutrum lobortis diam quis ornare. Sed eu enim vel purus tristique interdum in non nisi. Nullam euismod lacus ac nisi dapibus porta. In ac porta nunc. Phasellus porttitor tincidunt ipsum, in auctor urna pretium in. Maecenas a nunc justo. Vestibulum sit amet pulvinar mauris. Etiam ligula ligula, dictum id nibh quis, faucibus porttitor est. Vivamus feugiat, lacus sit amet ullamcorper porta, felis diam lacinia urna, sed ultrices ligula mi quis augue.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu pharetra erat. Pellentesque tristique auctor feugiat. Etiam eu nulla sem. Aliquam metus neque, posuere vel sapien non, venenatis commodo ex. Donec faucibus, tortor eu pulvinar lacinia, leo tortor efficitur quam, ut placerat lorem dolor vel neque. Integer consequat ac nisl sit amet finibus. Sed rutrum, magna quis posuere ullamcorper, massa velit auctor est, et dictum turpis mi non elit. Nam rutrum lobortis diam quis ornare. Sed eu enim vel purus tristique interdum in non nisi. Nullam euismod lacus ac nisi dapibus porta. In ac porta nunc. Phasellus porttitor tincidunt ipsum, in auctor urna pretium in. Maecenas a nunc justo. Vestibulum sit amet pulvinar mauris. Etiam ligula ligula, dictum id nibh quis, faucibus porttitor est. Vivamus feugiat, lacus sit amet ullamcorper porta, felis diam lacinia urna, sed ultrices ligula mi quis augue.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu pharetra erat. Pellentesque tristique auctor feugiat. Etiam eu nulla sem. Aliquam metus neque, posuere vel sapien non, venenatis commodo ex. Donec faucibus, tortor eu pulvinar lacinia, leo tortor efficitur quam, ut placerat lorem dolor vel neque. Integer consequat ac nisl sit amet finibus. Sed rutrum, magna quis posuere ullamcorper, massa velit auctor est, et dictum turpis mi non elit. Nam rutrum lobortis diam quis ornare. Sed eu enim vel purus tristique interdum in non nisi. Nullam euismod lacus ac nisi dapibus porta. In ac porta nunc. Phasellus porttitor tincidunt ipsum, in auctor urna pretium in. Maecenas a nunc justo. Vestibulum sit amet pulvinar mauris. Etiam ligula ligula, dictum id nibh quis, faucibus porttitor est. Vivamus feugiat, lacus sit amet ullamcorper porta, felis diam lacinia urna, sed ultrices ligula mi quis augue.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu pharetra erat. Pellentesque tristique auctor feugiat. Etiam eu nulla sem. Aliquam metus neque, posuere vel sapien non, venenatis commodo ex. Donec faucibus, tortor eu pulvinar lacinia, leo tortor efficitur quam, ut placerat lorem dolor vel neque. Integer consequat ac nisl sit amet finibus. Sed rutrum, magna quis posuere ullamcorper, massa velit auctor est, et dictum turpis mi non elit. Nam rutrum lobortis diam quis ornare. Sed eu enim vel purus tristique interdum in non nisi. Nullam euismod lacus ac nisi dapibus porta. In ac porta nunc. Phasellus porttitor tincidunt ipsum, in auctor urna pretium in. Maecenas a nunc justo. Vestibulum sit amet pulvinar mauris. Etiam ligula ligula, dictum id nibh quis, faucibus porttitor est. Vivamus feugiat, lacus sit amet ullamcorper porta, felis diam lacinia urna, sed ultrices ligula mi quis augue.</p>
    </div>
  );
};

export default ModalPage;