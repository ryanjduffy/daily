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
              {start: 13 * 60 + 30, duration: 15, day: [1, 4], icon: '🔸', title: 'Pattern Blocks', color: 'lightorange'},
              {start: 13 * 60 + 30, duration: 15, day: 2, icon: '🎨', title: 'Create Something', color: 'lightorange'},
              {start: 13 * 60 + 30, duration: 15, day: 3, icon: '🧩', title: '35-Piece Puzzle', color: 'lightorange'},
              {start: 13 * 60 + 30, duration: 15, day: 5, icon: '📖', title: 'Read a book', color: 'lightorange'},
              {start: 13 * 60, duration: 30, day: 1, icon: '🧘‍♀️', title: 'Specials - M&M', color: 'cornflowerblue'},
              {start: 13 * 60, duration: 30, day: 2, icon: '🧘‍♀️', title: 'Specials - PE', color: 'cornflowerblue'},
              {start: 13 * 60, duration: 30, day: 3, icon: '🧘‍♀️', title: 'Specials - Music', color: 'cornflowerblue'},
              {start: 13 * 60, duration: 30, day: 4, icon: '🧘‍♀️', title: 'Specials - Library', color: 'cornflowerblue'},
              {start: 13 * 60, duration: 30, day: 5, icon: '🧘‍♀️', title: 'Specials - Art', color: 'cornflowerblue'},
              ...shared
            ]}
          </Schedule>
          <Schedule>
            {[
              {start: 8 * 60 + 45, duration: 15, icon: '📝', title: 'Morning Meeting', color: 'cornflowerblue'},
              {start: 9 * 60, duration: 15, day: [1, 5], icon: '📚', title: 'Whole Group - Reading', color: 'cornflowerblue'},
              {start: 9 * 60, duration: 15, day: [2, 4], icon: '📚', title: 'Whole Group - Math', color: 'cornflowerblue'},
              {start: 9 * 60, duration: 15, day: 3, icon: '📚', title: 'Whole Group - Writing', color: 'cornflowerblue'},
              {start: 9 * 60 + 15, duration: 25, icon: '📚', title: 'Small Group', color: 'cornflowerblue'},
              {start: 10 * 60 + 15, duration: 30, day: 1, icon: '🧘‍♀️', title: 'Specials - Library', color: 'cornflowerblue'},
              {start: 10 * 60 + 15, duration: 30, day: 2, icon: '🧘‍♀️', title: 'Specials - Art', color: 'cornflowerblue'},
              {start: 10 * 60 + 15, duration: 30, day: 3, icon: '🧘‍♀️', title: 'Specials - M&M', color: 'cornflowerblue'},
              {start: 10 * 60 + 15, duration: 30, day: 4, icon: '🧘‍♀️', title: 'Specials - PE', color: 'cornflowerblue'},
              {start: 10 * 60 + 15, duration: 30, day: 5, icon: '🧘‍♀️', title: 'Specials - Music', color: 'cornflowerblue'},
              {start: 11 * 60 + 10, duration: 30, icon: '📚', title: 'Whole Group', color: 'cornflowerblue'},
              {start: 13 * 60, duration: 15, day: [1, 2, 4, 5], icon: '📝', title: 'Afternoon Meeting', color: 'cornflowerblue'},
              {start: 13 * 60 + 15, duration: 45, day: 1, icon: '🩺', title: 'Health', color: 'cornflowerblue'},
              {start: 13 * 60 + 15, duration: 45, day: [2, 4], icon: '📝', title: 'Grammar', color: 'cornflowerblue'},
              ...shared
            ]}
          </Schedule>
          <Schedule>
            {[
              {start: 8 * 60 + 45, duration: 15, icon: '📝', title: 'Morning Meeting', color: 'cornflowerblue'},
              {start: 9 * 60 + 15, duration: 25, day: [1, 3, 5], icon: '📚', title: 'Whole Group - Literacy/SS', color: 'cornflowerblue'},
              {start: 9 * 60 + 15, duration: 25, day: [2, 4], icon: '📚', title: 'Whole Group - Math', color: 'cornflowerblue'},
              {start: 9 * 60 + 50, duration: 20, day: [1, 3, 5], icon: '📚', title: 'Small Group - Literacy/SS', color: 'cornflowerblue'},
              {start: 9 * 60 + 50, duration: 20, day: [2, 4], icon: '📚', title: 'Small Group - Math', color: 'cornflowerblue'},
              {start: 11 * 60 + 15, duration: 13, icon: '🏃‍♂️', title: 'Break', color: 'cornflowerblue'},
              {start: 14 * 60 + 30, duration: 30, day: 1, icon: '🧘‍♀️', title: 'Specials - M&M', color: 'cornflowerblue'},
              {start: 14 * 60 + 30, duration: 30, day: 2, icon: '🧘‍♀️', title: 'Specials - PE', color: 'cornflowerblue'},
              {start: 14 * 60 + 30, duration: 30, day: 3, icon: '🧘‍♀️', title: 'Specials - Music', color: 'cornflowerblue'},
              {start: 14 * 60 + 30, duration: 30, day: 4, icon: '🧘‍♀️', title: 'Specials - Library', color: 'cornflowerblue'},
              {start: 14 * 60 + 30, duration: 30, day: 5, icon: '🧘‍♀️', title: 'Specials - Art', color: 'cornflowerblue'},
              ...shared
            ]}
          </Schedule>
        </Bar>
      </main>
    </div>
  )
}
