import Head from 'next/head'
import React from 'react';

import Bar, {Schedule} from '../components/Bar';

export default function Home() {
  const shared = [
    {start: 10 * 60, duration: 15, icon: '🍌', title: 'Morning Snack', color: 'peachpuff'},
    {start: 12 * 60 + 15, duration: 45, icon: '🥪', title: 'Lunch', color: 'peachpuff'},
    {start: 15 * 60, duration: 15, icon: '🥨', title: 'Afternoon Snack', color: 'peachpuff'}
  ];

  return (
    <div>
      <Head>
        <title>Daily Schedule</title>
      </Head>

      <main>
        <Bar startTime={7 * 60} endTime={17 * 60} view={[8 * 60 + 30, 15 * 60]}>
          <Schedule>
            {[
              {start: 8 * 60 + 45, duration: 15, icon: '📝', title: 'Morning Meeting', color: 'cornflowerblue'},
              {start: 9 * 60, duration: 30, icon: '📚', title: 'Literacy - Whole Group', color: 'cornflowerblue'},
              {start: 9 * 60 + 30, duration: 30, icon: '📚', title: 'Literacy - Small Group', color: 'cornflowerblue'},
              {start: 10 * 60 + 30, duration: 15, icon: '📚', title: 'Lexia', color: 'lightorange'},
              {start: 13 * 60 + 30, duration: 15, icon: '🔸', title: 'Pattern Blocks', color: 'lightorange'},
              {start: 13 * 60, duration: 30, icon: '🧘‍♀️', title: 'Specials - M&M', color: 'cornflowerblue'},
              ...shared
            ]}
          </Schedule>
          <Schedule>
            {[
              {start: 8 * 60 + 45, duration: 15, icon: '📝', title: 'Morning Meeting', color: 'cornflowerblue'},
              {start: 9 * 60, duration: 15, icon: '📚', title: 'Whole Group', color: 'cornflowerblue'},
              {start: 9 * 60 + 15, duration: 25, icon: '📚', title: 'Small Group', color: 'cornflowerblue'},
              {start: 10 * 60 + 15, duration: 30, icon: '🧘‍♀️', title: 'Specials - M&M', color: 'cornflowerblue'},
              {start: 11 * 60 + 10, duration: 30, icon: '📚', title: 'Whole Group', color: 'cornflowerblue'},
              {start: 13 * 60, duration: 15, icon: '📝', title: 'Afternoon Meeting', color: 'cornflowerblue'},
              {start: 13 * 60 + 15, duration: 45, icon: '📝', title: 'Health / Grammar', color: 'cornflowerblue'},
              ...shared
            ]}
          </Schedule>
        </Bar>
      </main>
    </div>
  )
}
