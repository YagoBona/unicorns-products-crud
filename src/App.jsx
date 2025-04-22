import UnicornsModule from './layouts/unicorns';
import { UnicornProvider } from './layouts/unicorns/context/UnicornContext';
import ObjectsModule from './layouts/objetos';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <UnicornProvider>
        <UnicornsModule />
      </UnicornProvider>
      <ObjectsModule />
    </Fragment>
  );
}

export default App;
