import Start from './actions/start'
import Library from './actions/library'
import GetLibrary from './actions/getLibrary'
import Exams from './actions/exams'
import GetExamTimetable from './actions/getExamTimetable'
import GetDoctor from './actions/getDoctor'
import ShowRestaurants from './actions/show-restaurants'
import ShowDirections from './actions/show-directions'
import SayGoodbye from './actions/say-goodbye'
import NotFound from './actions/not-found'
import Quickreply from './actions/quickreply'
import QuickreplyResponse from './actions/quickreply_response'
import Buttons from './actions/buttons'
import ClosedWebview from './actions/closed_webview'
import Multilanguage from './actions/multilanguage'
import Webviews from './actions/webviews'
import WebviewsResponse from './actions/webviews_response'


export const routes = [
  { input: i => i.confidence < 0.7, action: NotFound},

  { intent: 'Library', action: Library},
  { path: 'getLibrary', action: GetLibrary},
  // {input: (i) => i.data.includes('Kevin St') && i.intent === 'Library', action: GetLibrary},
  { intent: 'Exams', action : Exams},
  { path: 'getExamTimetable', action : GetExamTimetable},
  { intent: 'Doctor', action: GetDoctor},
  { intent: 'Greetings', action: Start },
 // { intent: 'BookRestaurant', action: ShowRestaurants },
  { intent: 'BookRestaurant', action: ShowDirections },
  { intent: 'Gratitude', action: SayGoodbye }
]
