import React from 'react';

import ScreenSaver from '../../../../components/ScreenSaver';

function ScreenSaverExercise({ params }) {
  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={params.colorName} />
    </main>
  );
}

export default ScreenSaverExercise;
