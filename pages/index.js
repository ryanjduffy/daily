import Head from 'next/head'
import React from 'react';

import Bar from '../components/Bar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Bar startTime={7 * 60} endTime={17 * 60} view={[8 * 60 + 30, 15 * 60]}>
          {[
            {start: 8 * 60 + 45, duration: 15, icon: '📝', title: 'Morning Meeting', color: 'cornflowerblue'},
            {start: 9 * 60, duration: 45, icon: '📚', title: 'Literacy Meeting', color: 'cornflowerblue'},
            {start: 10 * 60, duration: 15, icon: '🍌', title: 'Snack Time', color: 'peachpuff'},
          ]}
        </Bar>
      </main>
    </div>
  )
}
