import { BotonicInputTester, BotonicOutputTester, NodeApp } from '@botonic/react'
import { routes , plugins, locales, config } from '../src/'


const App = new NodeApp({ routes, locales, ...config })

const i = new BotonicInputTester(App)
const o = new BotonicOutputTester(App)

test('TEST: start.js', async () => {
  await expect(i.payload('Start'))  // Openening chat test
  .resolves.toBe(
    // Expected Output
    o.text(
      "Hello! Welcome to TUD's Student Chatbot, What can I help you with today?", 
        o.replies(
          { text: 'Library', payload : 'Library' },
          { text : 'Doctor', payload : 'Doctor' },
          { text : 'Student Services', payload : 'StudentServices' }
        )
    )
  )
})

// test('TEST: getDoctor.js', async () => {
//   await expect(i.text('where is the doctor?'))  // Openening chat test
//   .resolves.toBe(
//     // Expected Output
//     o.text(
//       "TU Dublin offers a Student Health Centre at Augnier Street campus and Linenhall Campus. "
//     ),
//     o.text(
//       'General Consultations are free',
      
//     )
//   )
// })

// test('TEST: getExamTimetable.js', async () => {
//   await expect(i.text('when are my exams?'))  // Openening chat test
//   .resolves.toBe(
//     // Expected Output
//     o.text(
//       { text : "I don't understand you" },
//     )
//   )
// })