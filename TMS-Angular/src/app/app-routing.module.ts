import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { SearchComponent } from './Components/search/search.component';
import { PaginationComponent } from './Components/pagination/pagination.component';

import { FilterComponent } from './Components/filter/filter.component';
import { BreadcrumsComponent } from './Components/breadcrums/breadcrums.component';

import { AddCoordinatorComponent } from './Coordinator/CRUD/add-coordinator/add-coordinator.component';
import { CoOrdinatorAddCourseComponent } from './Pages/co_addcourse/co-ordinator-add-course.component';

import { CommonhomeComponent } from './Pages/commonhome/commonhome.component';
import { LoginpageComponent } from './Pages/loginpage/loginpage.component';
import { HomeComponent } from './Pages/home/home.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { SavebuttonComponent } from './Components/savebutton/savebutton.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProfileviewComponent } from './Pages/profileview/profileview.component';
import { CourselistComponent } from './ListPages/courselist/courselist.component';
import { CanceledreviewComponent } from './ListPages/canceledreview/canceledreview.component';
import { ViewcourseCoordinatorComponent } from './Pages/viewcourse-coordinator/viewcourse-coordinator.component';
import { ViewmomComponent } from './Pages/viewmom/viewmom.component';
import { FeedbacktraineeComponent } from './Pages/feedbacktrainee/feedbacktrainee.component';
import { AssignedreviewComponent } from './ListPages/assignedreview/assignedreview.component';
import { AssignreviewlistComponent } from './Pages/assignreviewlist/assignreviewlist.component';
import { CompletedreviewComponent } from './ListPages/completedreview/completedreview.component';
import { CompletedreviewlistComponent } from './Pages/completedreviewlist/completedreviewlist.component';
import { CancelreviewlistComponent } from './Pages/cancelreviewlist/cancelreviewlist.component';
import { ViewattendanceComponent } from './Pages/viewattendance/viewattendance.component';
import { HeadDepartmentlistComponent } from './ListPages/head-departmentlist/head-departmentlist.component';
import { CoordinatorlistComponent } from './ListPages/coordinatorlist/coordinatorlist.component';
import { ReviewerlistComponent } from './ListPages/reviewerlist/reviewerlist.component';
import { ReviewlistComponent } from './ListPages/reviewlist/reviewlist.component';
import { TraineelistComponent } from './ListPages/traineelist/traineelist.component';
import { TrainerlistComponent } from './ListPages/trainerlist/trainerlist.component';
import { ViewcoprofileComponent } from './Pages/viewcoprofile/viewcoprofile.component';
import { AssigncourseComponent } from './Pages/cancelreviewlist/assigncourse/assigncourse.component';
import { AssignreviewCoComponent } from './Pages/assignreview-co/assignreview-co.component';
import { AddcourseComponent } from './Pages/addcourse/addcourse.component';
import { AdddepartmentComponent } from './Pages/adddepartment/adddepartment.component';
import { AddreviewerComponent } from './Pages/addreviewer/addreviewer.component';
import { AddtraineeComponent } from './Pages/addtrainee/addtrainee.component';
import { ViewtrainerprofileComponent } from './Pages/viewtrainerprofile/viewtrainerprofile.component';
import { ViewtraineeprofileComponent } from './Pages/viewtraineeprofile/viewtraineeprofile.component';
import { ViewreviewerprofileComponent } from './Pages/viewreviewerprofile/viewreviewerprofile.component';
import { UploadmomComponent } from './Pages/uploadmom/uploadmom.component';
import { ViewheadprofileComponent } from './Pages/viewheadprofile/viewheadprofile.component';
import { TopicviewComponent } from './Pages/topicview/topicview.component';
import { CoDepartmentlistComponent } from './ListPages/co-departmentlist/co-departmentlist.component';
import { CoursefeedbackComponent } from './Pages/coursefeedback/coursefeedback.component';
import { TopiclistComponent } from './ListPages/topiclist/topiclist.component';
import { UserListPageComponent } from './ListPages/userlist/userlist.component';


const routes: Routes = [
  { path: '', component: CommonhomeComponent },
  { path: 'Login', component: LoginpageComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Userlist', component:UserListPageComponent},
  { path: 'Departmentlist', component:HeadDepartmentlistComponent},
  { path: 'courselist', component:CourselistComponent},
  { path: 'coursefeedback', component:CoursefeedbackComponent},
  { path:'topiclist', component:TopiclistComponent},
  
  // { path: 'sidebar', component: SidebarComponent },
  // { path: 'search', component: SearchComponent },
  // { path: 'savebutton', component: SavebuttonComponent },
  // { path: 'pagination', component: PaginationComponent },
  // { path: 'footer', component: FooterComponent },
  // { path: 'filter', component: FilterComponent },
  // { path: 'breadcrums', component: BreadcrumsComponent },
  { path: 'AddCoordinator', component: AddCoordinatorComponent },
  { path: 'AddCourse', component: CoOrdinatorAddCourseComponent },

  { path: 'Profileview', component: ProfileviewComponent },
  { path:'cancelreview', component:CanceledreviewComponent},
  { path:'viewcourse', component:ViewcourseCoordinatorComponent},
  {path:'cancelreview', component:CanceledreviewComponent},
  {path:'viewmom', component:ViewmomComponent},
  {path:'feedbacktrainee', component:FeedbacktraineeComponent},
  {path:'assignreviewlist', component:AssignreviewlistComponent},
  {path:'completedreviewlist', component:CompletedreviewlistComponent},
  {path:'cancelreviewlist', component:CancelreviewlistComponent},
  {path:'viewattendance', component:ViewattendanceComponent},
  {path:'coordinatorlist', component:CoordinatorlistComponent},
  {path:'reviewerlist', component:ReviewerlistComponent},
  {path:'reviewlist', component:ReviewlistComponent},
  {path:'traineelist', component:TraineelistComponent},
  {path:'trainerlist', component:TrainerlistComponent},
  {path:'loginpage', component:LoginpageComponent},
  {path:'profileview', component:ProfileviewComponent},
  {path:'viewattendance', component:ViewattendanceComponent},
  {path:'viewcoprofile', component:ViewcoprofileComponent},
  {path:'assigncourse', component:AssigncourseComponent},
  {path:'assignreviewco', component:AssignreviewCoComponent},
  {path:'addcourse', component:AddcourseComponent},
  {path:'adddepartment', component:AdddepartmentComponent},
  {path:'addreviewer', component:AddreviewerComponent},
  {path:'addtrainee', component:AddtraineeComponent},
  
  {path:'viewtrainerprofile', component:ViewtrainerprofileComponent},
  {path:'viewtraineeprofile', component:ViewtraineeprofileComponent},
  { path:'cancelreview', component:CanceledreviewComponent},
  { path:'viewreviewerprofile', component:ViewreviewerprofileComponent},
  {path:'uploadmom',component:UploadmomComponent},
  {path:'headprofile',component:ViewheadprofileComponent},
  {path:'coprofile',component:ViewcoprofileComponent},

  { path:'cancelreview', component:CanceledreviewComponent },
  { path:'viewcourse', component:ViewcourseCoordinatorComponent },
  { path:'cancelreview', component:CanceledreviewComponent },
  { path:'viewmom', component:ViewmomComponent },
  { path:'feedbacktrainee', component:FeedbacktraineeComponent },
  { path:'assignreviewlist', component:AssignreviewlistComponent },
  { path:'completedreviewlist', component:CompletedreviewlistComponent },
  { path:'cancelreviewlist', component:CancelreviewlistComponent },
  { path:'viewattendance', component:ViewattendanceComponent },
  { path: 'viewtopic', component:TopicviewComponent },  
  { path:'cancelreview', component:CanceledreviewComponent },
  { path: 'deptlist', component:CoDepartmentlistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }