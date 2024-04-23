const RedirectPage = (route, router) => {
  if (route == "/dual-campus") {
    router.push("/diac-campus");
  } else if (route == "/teammiddlesex") {
    router.push("/team-mdx");
  } else if (route == "/scholarships") {
    router.push("/scholarship-and-grants");
  } else if (route == "/accommodation") {
    router.push("/mdxaccommodation");
  } else if (route == "/transportation") {
    router.push("/life-at-university/student-transportation-service");
  } else if (route == "/paymentmethods") {
    router.push("/studentfinance/payment-options");
  } else if (route == "/ces") {
    router.push("/life-at-university/ces");
  } else if (route == "/life-at-university/transfer-your-studies") {
    router.push("/campustransfer");
  } else if (route == "/life-at-university/current-students/change-name") {
    router.push("/change-name");
  } else if (route == "/prospective-students/fees-and-finance") {
    router.push("/studentfinance");
  } else if (
    route == "/life-at-university/current-students/student-office-forms"
  ) {
    router.push("/life-at-university/current-students/campuscentral-forms");
  } else if (route == "/contact-us/events-list") {
    router.push("/events");
  } else if (route == "/msc-robotics") {
    router.push("/courses/course-list/course-detail/msc-robotics");
  } else if (route == "/digitalmarketing") {
    router.push("/courses/course-list/course-detail/msc-digital-marketing");
  } else if (route == "/life-at-university/accommodation") {
    router.push("/mdxaccommodation");
  } else if (
    route == "/life-at-university/current-students/code-of-conduct-for-students"
  ) {
    router.push(
      "/life-at-university/campus-guide/information-about-the-campus"
    );
  } else if (route == "/prospective-students/scholarship-and-grants") {
    router.push("/scholarship-and-grants");
  } else if (route == "/hello") {
    router.push("https://linktr.ee/middlesexdubai");
  } else if (route == "/welcoming-students-to-campus") {
    router.push("/welcome-to-mdxfaculty_cardfaculty_card");
  } else if (route == "/ifp") {
    router.push("/courses/course-list/course-detail/ifp");
  } else if (
    route == "/research/souq-economics-center-for-economics-research"
  ) {
    router.push("/souq-economics-center-for-economics-research");
  }
};

export default RedirectPage;
