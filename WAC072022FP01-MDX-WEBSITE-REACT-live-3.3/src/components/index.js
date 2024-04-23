import React from "react";
import HomeBanner from "./HomeBanner";
import Courses from "./Courses";
import Experience from "./Experience";
import GlobalPresencePartners from "./GlobalPresencePartners";
import Facilities from "./Facilities";
import News from "./News";
import BannerInner from "./BannerInner";
import SlimBanner from "./SlimBanner";
import CourseListing from "./CourseListing";
import CourseIntro from "./CourseIntro";
import TextColumnWidget from "./TextColumnWidget";
import CourseProgram from "./CourseProgram";
import AboutWidget from "./AboutWidget";
import CourseBenefit from "./CourseBenefit";
import TeachingWidget from "./TeachingWidget";
import Faculty from "./Faculty";
import ContactSection from "./ContactSection";
import CardStack from "./CardStack";
import VerticalTabWidget from "./VerticalTabWidget";
import StaffProfile from "./StaffProfile";
import RequirementsWidget from "./RequirementsWidget";
import Spacer from "./Spacer";
import SidebarLayout from "./Layout/SidebarLayout";
import TextColumnCardStackWidget from "./TextColumnCardStackWidget";
import OtherFacultyMembers from "./OtherFacultyMembers";
import StudentsReceiveSkills from "./StudentsReceiveSkills";
import TabWidget from "./TabWidget";
import HalfContainerWithImage from "./HalfContainerWithImage";
import LogoSliderWidget from "./LogoSliderWidget";
import CardStackSlider from "./CardStackSlider";
import AlumniBanner from "./AlumniBanner";
import AlumniStayConnected from "./AlumniStayConnected";
import AlumniBoxCardStack from "./AlumniBoxCardStack";
import AlumniMap from "./AlumniMap";
import AlumniVideoSlider from "./AlumniVideoSlider";
import AlumniSupport from "./AlumniSupport";
import AlumniFAQ from "./AlumniFAQ";
import AlumniMenu from "./Layout/AlumniLayout/AlumniMenu";
import AlumniFooter from "./Layout/AlumniLayout/AlumniFooter";
import BannerInnerCampus from "./BannerInnerCampus";
import CheckoutFacilitiesWidget from "./CheckoutFacilitiesWidget";
import HalfImageWithCards from "./HalfImageWithCards";
import InsightLinksSlider from "./InsightLinksSlider";
import Menu from "./Layout/CommonLayout/Menu";
import Footer from "./Layout/CommonLayout/Footer";
import BottomMenu from "./Layout/CommonLayout/BottomMenu";
import AlumniExplore from "./AlumniExplore";
import TestimonialSliderWidget from "./TestimonialSliderWidget";
import Form from "./Form";
import EnquiryFormMap from "./EnquiryFormMap";
import SportCardStackSlider from "./SportCardStackSlider";
import TextColumnTableTabWidget from "./TextColumnTableTabWidget";
import TemplateOverviewWidget from "./TemplateOverviewWidget";
import UpcomingEventSliderWidget from "./UpcomingEventSliderWidget";
import PastEvents from "./PastEvents";
import EventsDetailView from "./EventsDetailView";
import LinkedinDetailView from "./LinkedinDetailView";
import EventsDetailItem from "./EventsDetailItem";
import RelatedItems from "./RelatedItems";
import PageRightBar from "./PageRightBar";
import BannerInnerSlider from "./BannerInnerSlider";
import NewsListSlider from "./NewsListSlider";
import NewsCardStackWidget from "./NewsCardStackWidget";
import RichTextWidget from "./RichTextWidget";
import SportsMain from "./SportsMain";
import FormWidget from "./FormWidget";
import ReviewWidget from "./ReviewWidget";
import ReviewDetail from "./ReviewDetail";
import RecentReviewWidget from "./RecentReviewWidget";
import PressRelease from "./PressRelease";
import JobsCardStackWidget from "./JobsCardStackWidget";
import GalleryWidget from "./GalleryWidget";
import ThankYou from "./ThankYou";
import CustomFormWidget from "./CustomFormWidget";
import VacanciesForm from "./VacanciesFormWidget";
import CourseIntroWidget from "./CourseIntroWidget";
import CourseProgramTwo from "./CourseProgramTwo";

import Grid from "./Layout/Grid";

import CourseGridMain from "./cards/CourseGridMain";
import CourseCard from "./cards/CourseCard";
import NewsCard from "./cards/NewsCard";
import EventListing from "./EventListing";
import FacilityCard from "./cards/FacilityCard";
import GlobalPresence from "./GlobalPresence";
import GlobalPartners from "./GlobalPartners";
import ExpetienceMain from "./cards/ExperienceMain";
import ExperienceCard from "./cards/ExperienceCard";
import IconCard from "./cards/IconCard";
import NewsFeed from "./NewsFeed";
import NewsFeedClone from "./NewsFeedClone";
import LaunchingCourses from "./LaunchingCourses";
import DateAndTimeEventCounter from "./DateAndTimeEventCounter";
import EventNotificationBanner from "./EventNotificationBanner";
import NewsCardStackPaginationWidget from "./NewsCardStackPaginationWidget";
import AlphaRangeWidget from "./AlphaRangeWidget";
import MdxInnerBaner from "./MdxInnerBaner";
import MdxCoursebox from "./MdxCoursebox";
import MdxAccreditation from "./MdxAccreditation";
import MdxBenefits from "./MdxBenefits";
import MdxProgrammeModule from "./MdxProgrammeModule";
import MdxProgrammeContent from "./MdxProgrammeContent";
import MdxCourseOverview from "./MdxCourseOverview";
import MdxRequirement from "./MdxRequirement";
import MdxIndustryExp from "./MdxIndustryExp";
import MdxCareerhub from "./MdxCareerhub";
import MdxFaculties from "./MdxFaculties";
import MdxContactSection from "./MdxContactSection";
import MdxRelatedCourses from "./MdxRelatedCourses";

import MdxFacultyCard from "./cards/MdxFacultyCard";
import AccreditationCard from "./cards/AccreditationCard";
import RequirementsTab from "./RequirementsTab";
import MdxRelatedCard from "./cards/MdxRelatedCard";
import MdxCourseInnerBox from "./MdxCoursebox/MdxCourseInnerBox";
import MdxProgrammeContentTab from "./MdxProgrammeContent/MdxProgrammeContentTab";
import TitleCard from "./cards/TitleCard";
import ContentBlock from "./cards/ContentBlock";
import ImageCard from "./cards/ImageCard";
import LinkedinCardStackWidget from "./LinkedinCardStackWidget";
import UpComingEventsNew from "./UpComingEventsNew";
import EventFilterNew from "./EventFilterNew";
import EventGalleryNew from "./EventGalleryNew";
import PublicationSuccess from "./PublicationSuccess";
import VideoTextComponent from "./VideoTextComponent";
import JoinOurTeam from "./JoinOurTeam";
import CounterComponent from "./CounterComponent";
import ImageHoverComponent from "./ImageHoverComponent";

const Components = {
  banner: HomeBanner,
  courses: Courses,
  experience: Experience,
  global_presence: GlobalPresencePartners,
  facilities: Facilities,
  news_and_events: News,
  inner_banner: BannerInner,
  sidebar_layout: SidebarLayout,
  Slim_banner: SlimBanner,
  course_listing: CourseListing,
  card_stack: CardStack,
  requirements_widget: RequirementsWidget,
  vertical_tab_widget: VerticalTabWidget,
  course_intro: CourseIntro,
  text_column_widget: TextColumnWidget,
  text_column_card_stack_widget: TextColumnCardStackWidget,
  course_program: CourseProgram,
  about_widget: AboutWidget,
  course_benefit: CourseBenefit,
  teaching_widget: TeachingWidget,
  faculty: Faculty,
  spacer: Spacer,
  contact_section: ContactSection,
  staff_profile: StaffProfile,
  other_faculty_members: OtherFacultyMembers,
  students_receive_skills: StudentsReceiveSkills,
  tab_widget: TabWidget,
  half_container_with_image: HalfContainerWithImage,
  logo_slider_widget: LogoSliderWidget,
  card_stack_slider: CardStackSlider,
  alumni_banner: AlumniBanner,
  alumni_stay_connected: AlumniStayConnected,
  alumni_card_stack: AlumniBoxCardStack,
  alumni_map: AlumniMap,
  alumni_video_slider: AlumniVideoSlider,
  alumni_support: AlumniSupport,
  alumni_explore: AlumniExplore,
  alumni_faq: AlumniFAQ,
  alumni_menu: AlumniMenu,
  alumni_footer: AlumniFooter,
  banner_inner_campus: BannerInnerCampus,
  checkout_facilities_widget: CheckoutFacilitiesWidget,
  half_image_with_cards: HalfImageWithCards,
  insight_links_slider: InsightLinksSlider,
  menu: Menu,
  footer: Footer,
  bottom_menu: BottomMenu,
  logo_slider_widget: LogoSliderWidget,
  testimonial_slider_widget: TestimonialSliderWidget,
  form: Form,
  enquiry_form_map: EnquiryFormMap,
  sport_card_stack_slider: SportCardStackSlider,
  text_column_table_tab_widget: TextColumnTableTabWidget,
  template_overview_widget: TemplateOverviewWidget,
  upcoming_event_slider_widget: UpcomingEventSliderWidget,
  past_events: PastEvents,
  events_detail_view: EventsDetailView,
  linkedin_detail_view: LinkedinDetailView,
  events_detail_item: EventsDetailItem,
  related_items: RelatedItems,
  page_right_bar: PageRightBar,
  banner_inner_slider: BannerInnerSlider,
  news_list_slider: NewsListSlider,
  news_card_stack_widget: NewsCardStackWidget,
  linkedin_course_list: LinkedinCardStackWidget,
  rich_text_widget: RichTextWidget,
  sports_main: SportsMain,
  form_widget: FormWidget,
  review_widget: ReviewWidget,
  review_detail: ReviewDetail,
  recent_review_widget: RecentReviewWidget,
  press_release: PressRelease,
  jobs_card_stack_widget: JobsCardStackWidget,
  gallery_widget: GalleryWidget,
  thank_you_widget: ThankYou,
  administrative_vacancies_form: CustomFormWidget,
  academic_vacancies_form: VacanciesForm,
  CourseIntroWidget: CourseIntroWidget,
  CourseProgramTwo: CourseProgramTwo,
  NewsCard,

  GridComponent: Grid,

  CourseGridMain: CourseGridMain,
  CourseCard: CourseCard,
  NewsCard: NewsCard,
  EventListing: EventListing,
  FacilityCard: FacilityCard,
  GlobalPresence: GlobalPresence,
  GlobalPartners: GlobalPartners,
  ExpetienceMain: ExpetienceMain,
  ExperienceCard: ExperienceCard,
  IconCard: IconCard,
  NewsFeed,
  NewsFeedNewComponent: NewsFeedClone,
  "course-launching": LaunchingCourses,
  CounterComponent: DateAndTimeEventCounter,
  EventStripComponent: EventNotificationBanner,
  NewsCardStackPaginationWidget,
  AlphaRangeWidget: AlphaRangeWidget,
  mdx_inner_banner: MdxInnerBaner,
  mdx_coursebox: MdxCoursebox,
  mdx_accreditation: MdxAccreditation,
  mdx_benefits: MdxBenefits,
  mdx_programme_module: MdxProgrammeModule,
  mdx_programme_content: MdxProgrammeContent,
  mdx_course_overview: MdxCourseOverview,
  mdx_requirement: MdxRequirement,
  mdx_industry_exp: MdxIndustryExp,
  mdx_careerhub: MdxCareerhub,
  mdx_faculties: MdxFaculties,
  mdx_contact_section: MdxContactSection,
  mdx_related_courses: MdxRelatedCourses,

  MdxFacultyCard: MdxFacultyCard,
  AccreditationCard: AccreditationCard,
  RequirementsTab: RequirementsTab,
  MdxRelatedCard: MdxRelatedCard,
  MdxCourseInnerBox: MdxCourseInnerBox,
  MdxProgrammeContentTab: MdxProgrammeContentTab,

  TitleCard: TitleCard,
  ContentBlock: ContentBlock,
  ImageCard: ImageCard,
  UpComingEventsNew: UpComingEventsNew,
  EventFilterNew: EventFilterNew,
  EventGalleryNew: EventGalleryNew,
  PublicationSuccess: PublicationSuccess,

  VideoTextComponent: VideoTextComponent,
  JoinOurTeam: JoinOurTeam,
  NewCounterComponent: CounterComponent,
  ImageHoverComponent: ImageHoverComponent,
};

const ComponentFunc = (block) => {
  if (typeof Components[block?.slug] !== "undefined") {
    return React.createElement(Components[block.slug], {
      key: Math.random() * 1000,
      props: block,
    });
  }
  return React.createElement(
    () => <div>The component {block?.slug} has not been created yet.</div>,
    { key: Math.random() * 100 }
  );
};
export default ComponentFunc;
