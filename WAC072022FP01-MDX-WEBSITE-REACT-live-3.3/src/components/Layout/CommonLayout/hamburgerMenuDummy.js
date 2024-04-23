const menu = {
  status: "success",

  data: {
    menu: {
      logo: "",
      nav_items: [],
      menu: [
        {
          name: "Courses",
          sub_menu: [
            {
              name: "International Foundation",
              link: "/courses/course-list/course-detail/ifp",
            },
            {
              name: "UG Programmes",
              link: "/courses/all-undergraduate-programmes",
            },
            {
              name: "PG Programmes",
              link: "/courses/all-postgraduate-courses",
            },
            { name: "Business", link: "/courses/all-postgraduate-courses" },
            { name: "Media", link: "/courses/media" },
            {
              name: "Law",
              link: "/courses/law",
            },
            { name: "Psychology", link: "/psychology" },
            {
              name: "Media",
              link: "/media",
            },
            {
              name: "Accounting & Finance",
              link: "/courses/accounting-and-finance",
            },
            { name: "Art & Design", link: "/courses/art-and-design" },
            {
              name: "Computer Engineering & Infomatics",
              link: "/courses/computer-engineering-and-informatics",
            },
            { name: "IFP to UG", link: "/ugprogression" },
            { name: "UG to PG", link: "/pgprogression" },
          ],
        },

        {
          name: "Study",
          link: "/study",
          sub_menu: [
            {
              name: "Admissions",
              link: "/admissions",
            },
            {
              name: "Scholarships & Grants",
              link: "/scholarship-and-grants",
            },
            {
              name: "Fees and Finance",
              link: "/studentfinance",
            },
            {
              name: "English @ Middlesex",
              link: "/english-language",
            },
            {
              name: "Student Visa",
              link: "/student-visa",
            },
            {
              name: "Schools",
              link: "/schools",
            },
            {
              name: "Open Days & Events",
              link: "/opendays",
            },
            {
              name: "Induction & Enrolment",
              link: "/induction-and-enrolment",
            },
            {
              name: "Pre-University Workshops",
              link: "/pre-university-workshops-2022",
            },
            {
              name: "Your Route to MDX",
              link: "/your-route",
            },
            {
              name: "Experience MDX Dubai",
              link: "/experience-mdx-dubai",
            },
          ],
        },

        {
          name: "Life at University",
          link: "/life-at-university",
          sub_menu: [
            {
              name: "Campus Central",
              link: "/life-at-university/current-students",
            },
            {
              name: "Centre for Academic Success",
              link: "/cas",
            },
            {
              name: "Student Services",
              link: "/life-at-university/campus-guide/student-support",
            },
            {
              name: "Student Support",
              link: "/life-at-university/care-and-concern",
            },
            {
              name: "Careers Service",
              link: "/life-at-university/ces",
            },
            {
              name: "Enrolment",
              link: "/life-at-university/current-students/enrolment-and-module-registration",
            },
            {
              name: "Timetables",
              link: "/life-at-university/current-students/timetables",
            },
            {
              name: "Student Portal",
              link: "/student-portal",
            },
            {
              name: "What's happening on campus",
              link: "/whats-happening-on-campus",
            },
            {
              name: "Your campus",
              link: "/yourcampus",
            },
            {
              name: "Campus Life",
              link: "/life-at-university/campus-guide",
            },
            {
              name: "Sports and Activities",
              link: "/team-mdx",
            },
            {
              name: "Graduation",
              link: "/graduation",
            },
            {
              name: "Our videos",
              link: "/welcoming-students-to-campus/all-videos",
            },
          ],
        },

        {
          name: "International",
          link: "/international",
          sub_menu: [
            {
              name: "Your Country Representative",
              link: "/contact-us/country-representative",
            },
            {
              name: "International",
              link: "/connectingtheworld",
            },
            {
              name: "English",
              link: "/english-language",
            },
            {
              name: "Global Agents",
              link: "/contact-us/overseas-agents",
            },
            {
              name: "Regional Offices",
              link: "/contact-us/regional-offices",
            },
          ],
        },

        {
          name: "Open Days & Events",
          link: "#",
          sub_menu: [
            {
              name: "Open Days",
              link: "/opendays",
            },
            {
              name: "What's Happening on Campus",
              link: "/whats-happening-on-campus",
            },
            {
              name: "Calendar of Events",
              link: "/events",
            },
          ],
        },

        {
          name: "Research",
          link: "/research",
          sub_menu: [
            {
              name: "Research Committee",
              link: "/research/research-committee",
            },
            {
              name: "Research Seminars",
              link: "/research/research-seminar-series",
            },
            {
              name: "Student Research",
              link: "/research/student",
            },
            {
              name: "Conferences",
              link: "/research/conferences-and-events",
            },
            {
              name: "Upcoming Events",
              link: "/research/student/upcoming-events",
            },
            {
              name: "Social Psychlogy Research Lab",
              link: "/research/sprl",
            },
            {
              name: "Souq Economics Centre for Economics Research",
              link: "/research/souq-economics-center-for-economics-research",
            },
          ],
        },

        {
          name: "Business & Partnerships",
          link: "https://www.mdx.ac.ae/business-partnerships",
          sub_menu: [
            {
              name: "Enterprises",
              link: "https://www.mdx.ac.ae/business-partnerships-professional-institutes",
            },
            {
              name: "Professional Learning",
              link: "/business-partnerships#Professional%20Learning",
            },
            {
              name: "Bespoke Learning & Short Courses",
              link: "/business-partnerships#Bespoke",
            },
            {
              name: "Industry Partners",
              link: "/industrypartnerships",
            },
          ],
        },

        {
          name: "About Us",
          link: "/about-us",
          sub_menu: [
            {
              name: "Who we are",
              link: "/whoweare",
            },
            {
              name: "Strategy 2031",
              link: "/ourstrategy2031",
            },
            {
              name: "KHDA Higher Education Classification",
              link: "/khda-higher-education-classification",
            },
            {
              name: "Our Campuses",
              link: "/contact-us/location-of-campuses",
            },
            {
              name: "Reputation and Impact",
              link: "/about-us/reputation-and-impact",
            },
            {
              name: "Middlesex University Honorary Graduates",
              link: "/about-us/honorary-doctorates",
            },
            {
              name: "Work with us",
              link: "/about-us/workatmdxdubai",
            },
          ],
        },

        {
          name: "Contact Us",
          link: "/contact-us",
          sub_menu: [
            { name: "Contact Details", link: "/contact-us/contact" },
            { name: "Directions", link: "/contact-us/directions" },
            {
              name: "Open Hours",
              link: "/contact-us/opening-hours",
            },
          ],
        },
      ],
    },

    footer: {
      image: "",
      menu_1: [
        {
          name: "Apply Now",
          link: "https://prospects.mdx.ac.ae/mymdx",
        },
        {
          name: "Enquire Now",
          link: "/contact-us/enquire-now",
        },
        {
          name: "Request a Call back",
          link: "/call-back",
        },
        {
          name: "Online Payment",
          link: "https://payment.mdx.ac.ae/",
        },
      ],
      menu_2: [
        {
          name: "Our Past",
          link: "/about-us/our-past",
        },
        {
          name: "Our Present",
          link: "/about-us/our-present",
        },
        {
          name: "Our Future",
          link: "/about-us/our-future",
        },
        {
          name: "Our People",
          link: "/about-us/our-people",
        },
        {
          name: "Our Schools",
          link: "/study",
        },
        {
          name: "Our Campus",
          link: "/about-us/our-campuses",
        },
        { name: "Our Strategy", link: "/ourstrategy2031" },
      ],
      menu_3: [
        {
          name: "September 2022",
          link: "/september2022",
        },
        {
          name: "Admissions",
          link: "/admissions",
        },
        {
          name: "Scholarships and Grants",
          link: "/scholarship-and-grants",
        },
        {
          name: "Student Finance",
          link: "/studentfinance",
        },
        {
          name: "Experience MDX Dubai",
          link: "/experience-mdx-dubai",
        },
        {
          name: "Student Visa",
          link: "/student-visa",
        },
        {
          name: "MDX Accommodation",
          link: "/mdxaccommodation",
        },
      ],
      menu_4: [
        {
          name: "Your Campus",
          link: "/yourcampus",
        },
        {
          name: "Team Middlesex",
          link: "/team-mdx",
        },
        {
          name: "Centre for Academic Success",
          link: "/cas",
        },
        {
          name: "Library",
          link: "/library",
        },
        {
          name: "Student Transportation",
          link: "/life-at-university/student-transportation-service",
        },
        {
          name: "MDX Wellness Office",
          link: "/wellbeing",
        },

        {
          name: "Academic Calendar",
          link: "/academic-calendar",
        },

        {
          name: "Graduation",
          link: "/graduation",
        },
        {
          name: "Student Unihub",
          link: "/unihub",
        },
      ],
      menu_5: [
        {
          name: "Research Committee",
          link: "/research/research-committee",
        },
        {
          name: "Research Seminar Series",
          link: "/research/research-seminar-series",
        },
        {
          name: "Student Research",
          link: "/research/student",
        },
        {
          name: "Conferences and Events",
          link: "/research/conferences-and-events",
        },
        {
          name: "Research Matters",
          link: "/research/research-matters",
        },
        {
          name: "Our Research Staff",
          link: "/about-us/our-people/academic-and-research-staff",
        },
      ],
      menu_6: [
        {
          name: "Directions",
          link: "/contact-us/directions",
        },
        {
          name: "Opening Hours",
          link: "/contact-us/opening-hours",
        },
        {
          name: "Meet Us",
          link: "/contact-us/meet-us",
        },
      ],
      menu_7: [
        {
          name: "Privacy Policy",
          link: "/privacy-policy",
        },
        {
          name: "Terms and Conditions",
          link: "/terms-and-conditions",
        },
        {
          name: "Cookie Policy",
          link: "/privacy-policy",
        },
      ],

      social_media_icon: [
        {
          name: "Twitter",
          link: "https://twitter.com/MiddlesexDubai",
          label: "twitter",
        },
        {
          name: "Facebook",
          link: "https://www.facebook.com/MiddlesexDubai",
          label: "facebook",
        },
        {
          name: "Youtube",
          link: "https://www.youtube.com/user/MiddlesexDubai",
          label: "youtube",
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/school/middlesexdubai/",
          label: "linkedin",
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/middlesexdubai",
          label: "instagram",
        },
        {
          name: "Snapchat",
          link: "https://admin-mdx.webc.in/uploads/snapcode_mdx_23f80eeb6f.png?updated_at=2022-09-03T18:05:30.803Z",
          label: "snapchat",
        },
        {
          name: "Whatsapp",
          link: "https://api.whatsapp.com/send?phone=971544441260",
          label: "whatsapp",
        },
        {
          name: "TikTok",
          link: "https://www.tiktok.com/@mdxuniversitydubai",
          label: "Tiktok",
        },
      ],
      copyright: {
        data1: "© Copyright Middlesex University Dubai 2022",
        data2: "Webandcrafts",
      },
    },
  },
};

export default menu;
