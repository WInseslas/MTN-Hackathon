import './App.css';
import './styles/calendar.css';
// import 'react-calendar/dist/Calendar.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';
import CoursesPage from './pages/Courses';
import CoursesDetailsPage from './pages/courses/Course_details';
import SaloonVideoPage from './pages/Saloon/Saloon_video';
import EvaluationPage from './pages/Evaluation';
import HomePage from './pages/landingPage/Home';
import EvaluationText from './pages/evaluation/Evaluation_text';
import TeacherDashboardPage from './pages/Teacher/Dashboard';
import TeacherCoursesPage from './pages/Teacher/Courses/Teacher_courses';
import TeacherCoursesDetailsPage from './pages/Teacher/Courses/Teacher_courses_details';
import TeacherSaloonVideoPage from './pages/Teacher/Saloon/Teacher_saloon_video';
import TeacherCoursesCreatePage from './pages/Teacher/Courses/Teacher_create_lesson';
import TeacherEvaluationCreateDevoirPage from './pages/Teacher/evaluation/Teacher_create_evaluation_devoir';
import TeacherEvaluationCreateQuestionnairePage from './pages/Teacher/evaluation/Teacher_create_evaluation_questionnaire';
import TeacherEvaluationCreateQuestionPage from './pages/Teacher/evaluation/Teacher_create_evaluation_question';
import AdminDashboardPage from './pages/admin/Dashboard';
import LoginPage from './pages/login/Login';
import NoteListPage from './pages/notes/Note_list';
import LibraryPage from './pages/Librairy/Library';
import NotesPage from './pages/notes/Notes';
import TeacherEvaluationPage from './pages/Teacher/evaluation/Teacher_evaluation';
import SaloonTextPage from './pages/Saloon/Saloon_text';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Login */}
        <Route path="/login" element={<LoginPage />} />
        {/* Student */}
        <Route path="/dashboard_student" element={<DashboardPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses_details" element={<CoursesDetailsPage />} />
        <Route path="/course_video" element={<SaloonVideoPage />} />
        <Route path="/course_text" element={<SaloonTextPage />} />
        <Route path="/evaluation" element={<EvaluationPage />} />
        <Route path="/evaluation_text" element={<EvaluationText />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/notes_list" element={<NoteListPage />} />
        <Route path="/librarie" element={<LibraryPage />} />
        {/* Teacher */}
        <Route path="/dashboard_teacher" element={<TeacherDashboardPage />} />
        <Route path="/teacher_courses" element={<TeacherCoursesPage />} />
        <Route path="/teacher_courses_details" element={<TeacherCoursesDetailsPage />} />
        <Route path="/teacher_course_video" element={<TeacherSaloonVideoPage />} />
        <Route path="/teacher_course_create" element={<TeacherCoursesCreatePage />} />
        <Route path="/teacher_evaluation" element={<TeacherEvaluationPage />} />
        <Route path="/teacher_create_evaluation_devoir" element={<TeacherEvaluationCreateDevoirPage />} />
        <Route path="/teacher_create_evaluation_questionnaire" element={<TeacherEvaluationCreateQuestionnairePage />} />
        <Route path="/teacher_create_evaluation_question" element={<TeacherEvaluationCreateQuestionPage />} />
        {/* Admin */}
        <Route path="/dashboard_admin" element={<AdminDashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
