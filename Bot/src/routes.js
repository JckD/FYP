import Start from './actions/start'
import Library from './actions/library'
import GetLibrary from './actions/getLibrary'
import Exams from './actions/exams'
import GetExamTimetable from './actions/getExamTimetable'
import GetDoctor from './actions/getDoctor'
import GetStudentServices from './actions/getStudentServices'
import SayGoodbye from './actions/say-goodbye'
import NotFound from './actions/not-found'
import GetRegistration from './actions/getRegistration.js'
import GetFees from './actions/getFees.js'
import GetServicesCenters from './actions/getServicesCenter'

export const routes = [
  { input: i => i.confidence < 0.7, action: NotFound},
 // { input: i => i.text.includes('Kevin St') && i.intent == 'Library', action: GetLibrary},
  { intent: 'Library', action: Library},
  { path: 'Library', action : Library},
  { path: 'getLibrary', action: GetLibrary},
  { intent: 'StudentServices', action: GetStudentServices},
  { intent: 'Registration', payload : /^Registration$/i , action : GetRegistration },
  { intent: 'Fees', payload : /^Fees$/i , action :  GetFees },
  { intent: 'serviceCenters', payload : /^ServicesCenter$/i , action : GetServicesCenters},
    //  { path : 'Exams', action : getExamInfo},
    //  { path : 'graduation', action : getGrad},
      //{ path : 'onlineServices', action :getOnlineServices}
  { intent: 'Exams', payload: /^Exams$/i, action : Exams},
  { path: 'getExamTimetable', action : GetExamTimetable},
  { intent: 'Doctor', payload: /^Docotor$/i, action: GetDoctor},
  { intent: 'Greetings', action: Start },
  { path: 'Start', payload: /^Start$/i , action: Start },
  { intent: 'Gratitude', action: SayGoodbye }
  
]
