import Assets from "../components/Layout/CommonLayout/assets";

export const data = {
  data: {
    header_script: null,
    custom_css: null,
    no_follow: false,
    no_index: false,
    cta_enabled: false,
    enable_header: false,
    enable_footer: false,
    widgets: [
      /* {
        slug: "inner_banner",
        backend_component_id: "generic-components.inne-banner",
        data: {
          sub_title: "1st Asia-Middle East-Africa",
          center_align: true,
          course_page: false,
          contact_form: false,
          hide_secroll_down: true,
          title: "Conference on Academic and Research Integrity ACARI 2023",
          img: "/uploads/buildings_1839726_1920_45c8ace8a7.jpg",
          form_id: null,
          form_type: null,
          mobile_banner_img: "",
          title_container: true,
          spacing: {
            xl: true,
          },
          no_spacing: {
            bottom: true,
          },
          course_icon_strip: "",
        },
      }, */
      {
        slug: "Slim_banner",
        backend_component_id: "generic-components.slim-banner",
        data: {
          title: "",
          main_title: "The Centre of Continuous Learning and Outreach",
          img: "/uploads/buildings_1839726_1920_45c8ace8a7.jpg",
          media_type: "image",
        },
      },
      {
        backend_component_id: "generic-components.sidebar-layout",
        slug: "sidebar_layout",
        sidebar_links: [
          "About",
          "Programme",
          "The Package",
        ],
        children: [
          {
            slug: "AboutIntroWidget",
            data: {
              scrollID: "About",
              title: "About",
              form: "",
              content:
                '<p><span lang="EN-US" dir="ltr">Asia – Middle East – Africa (AMEA) as a region is an emerging market for global, world-class international education and research. Hosted by Middlesex University Dubai, UAE, colleagues from Centre for Academic Integrity at Canakkale Onsekiz Mart University, Türkiye University of Wollongong in Dubai, UAE, Lahore LEADS University, Pakistan and King Fahd Medical City, Saudi Arabia are organising the first regional, collaborative conference on academic and research integrity for the region – ACARI 2023.&nbsp;</span></p><p><span lang="EN-US" dir="ltr">With invited colleagues from Chitkara University, India, Kuwait University, Kuwait, Bangamata Sheikh Fojilatunnesa Mujib Science &amp; Technology University, Bangladesh, and University of Calgary in Qatar, ACARI 2023 aims to bring together leaders, educators, practitioners, and researchers from the AMEA region and beyond to discuss, create and promote the culture of integrity across educational campuses in their countries.&nbsp;</span></p><p><span lang="EN-US" dir="ltr">The conference will feature oral and poster presentations, keynotes from renowned practitioners and scholars, panel sessions, workshops and student competitions.&nbsp;</span></p><p><span lang="EN-US" dir="ltr">Academicians, practitioners, and research scholars wishing to present at the conference are invited to submit a 500-750-word abstract of continuous text describing their current work for consideration by the programme committee.</span></p>',
            },
          },
          {
            slug: "UpcomingEventWidget",
            data: {
              video: true,
              scrollID: "Programme",
              title: "Programme",
              content: ``,
              image: "",
              no_spacing: {
                top: true,
              },
              events: {
                db_data: "related_events",
              },
              event_title: "Programme",
              join_event_title: "Join an event",
              related_events: null,
              benefits_list :[
                {
                    "id": 40,
                    "count_value": "01",
                    "description": "Development of academic skills"
                },
                {
                    "id": 41,
                    "count_value": "02",
                    "description": "Development of language skills"
                },
                {
                    "id": 42,
                    "count_value": "03",
                    "description": "Development of independent learning"
                },
                {
                    "id": 43,
                    "count_value": "04",
                    "description": "Comprehensive academic support"
                },
                {
                    "id": 45,
                    "count_value": "05",
                    "description": "Online support available"
                },
                {
                    "id": 44,
                    "count_value": "06",
                    "description": "Contact with both faculty and students on future degree programmes"
                }
            ]
            },
          },
          {
            slug: "card_stack",
            data: {
              scrollID: "The Package",
              card_type: "image_box_content_card",
              title: "The Package",
              columns: {
                id: 36,
                lg: 3,
                md: 2,
                xl: 4,
              },
              container: true,
              no_spacing: {
                top: true,
              },
              cards: [
                {
                  title: "Lorem Ipsum is simply dummy text",
                  description:
                    "Middlesex University Dubai is the first overseas campus of the renowned Middlesex University based in London, UK. The University’s first learning space in Dubai opened at Dubai Knowledge Park (DKP) in 2005 and has over 4,500 students studying from more than 118 nationalities.",
                  img: Assets.cover_experience,
                  link: "#",
                },
                {
                  title:
                    "Lorem Ipsum is simply dummy text",
                  description:
                    "Make an immediate impact and reignite learning and career development. Enrol in one of our short programmes and find the best solution to continued professional development for yourself and your team. You will be provided with the skillset to achieve and deliver results.",
                  img: Assets.cover_experience,
                  link: "#",
                },
                {
                  title: "Lorem Ipsum is simply dummy text",
                  description:
                    "Middlesex University Dubai is the largest and leading UK University in Dubai, located in the heart of the Dubai in Knowledge Park across 3 buildings. Learning spaces have evolved over the years, from traditional lecture style classrooms to technology-enhanced work stations that promote collaborative teaching and learning.",
                  img: Assets.cover_experience,
                  link: "#",
                },
                {
                  title: "Lorem Ipsum is simply dummy text",
                  description:
                    "The Pre-University Workshop Series is an immersive and dynamic series of workshops that is available for driven and innovative students preparing for their future at university and want to get ahead of the game, whilst at the same time, familiarising yourself with Dubai and what life has to offer, making friends early, getting to know the campus and faculty ahead of September.",
                  img: Assets.cover_experience,
                  link: "#",
                },
              ],
            },
          },
        ],
      },
    ],
  },
};
