import React from 'react';

import Link from 'next/link';

function ScreenSaverIndexPage() {
  return (
    <main>
      <p>Choose your color:</p>
      <ul>
        <li>
          <Link href="/exercises/01-screensaver/mistyrose">Mistyrose</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/goldenrod">Goldenrod</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/rebeccapurple">
            Rebecca Purple
          </Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverIndexPage;
