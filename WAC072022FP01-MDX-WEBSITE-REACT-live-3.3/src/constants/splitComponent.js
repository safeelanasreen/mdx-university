import Assets from "../components/Layout/CommonLayout/assets";

export const data = {
  data: {
    header_script: null,
    custom_css: null,
    no_follow: false,
    no_index: false,
    cta_enabled: false,
    enable_header: true,
    enable_footer: true,
    widgets: [
      {
        slug: "Slim_banner",
        backend_component_id: "generic-components.slim-banner",
        data: {
          title: "",
          main_title: "The Centre of Continuous Learning and Outreach",
          img: "/uploads/Job%20Applied%20Cover%20Letter/114d201f9ead41dc3aa9985214c08cff7b5e616c_mdx_dubai_banner.jpg?updated_at=2022-11-30T07:31:42.862Z",
          media_type: "image",
        },
      },
      {
        slug: "card_stack",
        data: {
          scrollID: "Divisions",
          card_type: "image_box_content_card",
          theme: "dark",
          title: "Divisions",
          columns: {
            id: 36,
            lg: 3,
            md: 2,
            xl: 4,
          },
          container: true,
          // no_spacing: {
          //   top: true,
          // },
          cards: [
            {
              static: true,
              title: "University Experience Programme",
              description:
                "Are you or your child aged 14-21 years old? Are you curious about life in Dubai? Do you want to practice your English language skills in a location with a difference?",
              img: "https://admin-mdx.webc.in/uploads/about_1c376dade2.jpg",
              link: "/mdx-experience",
            },
            {
              static: true,
              title:
                "MDX Professional <small class='d-block mt-2'> Short Courses, Professional Certifications etc.</small>",
              description:
                "Make an immediate impact and reignite learning and career development. Enrol in one of our short programmes and find the best solution to continued professional development for yourself and your team. You will be provided with the skillset to achieve and deliver results.",
              img: "https://admin-mdx.webc.in/uploads/mdx_professional_390a362435.jpeg?updated_at=2023-01-19T10:45:50.165Z",
              link: "/mdx-professional",
            },
            {
              static: true,
              title: "MDX Teaching and Learning Space",
              description:
                "Middlesex University Dubai is the largest and leading UK University in Dubai, located in the heart of the Dubai in Knowledge Park across 3 buildings. Learning spaces have evolved over the years, from traditional lecture style classrooms to technology-enhanced work stations that promote collaborative teaching and learning.",
              img: "https://admin-mdx.webc.in/uploads/mdx_teaching_7f248d5962.jpeg?updated_at=2023-01-19T10:45:50.955Z",
              link: "/mdx-collaborative-teaching-and-learning-experience",
            },
            {
              static: true,
              title: "MDX Pre-University Workshops ",
              description:
                "The Pre-University Workshop Series is an immersive and dynamic series of workshops that is available for driven and innovative students preparing for their future at university and want to get ahead of the game, whilst at the same time, familiarising yourself with Dubai and what life has to offer, making friends early, getting to know the campus and faculty ahead of September.",
              img: "https://admin-mdx.webc.in/uploads/mdx_pre_university_bd1d123ad6.png?updated_at=2023-01-19T10:45:51.896Z",
              link: "/mdx-pre-university-workshops",
            },
            {
              static: true,
              title: "MDX English Testing and Pre-Sessional",
              description:
                "Middlesex University Dubai promotes English language learning and support to make the transition to university a simple and seamless process.",
              img: "https://admin-mdx.webc.in/uploads/pre_university_workshops_ee280e372e.jpeg?updated_at=2023-01-19T10:45:50.895Z",
              link: "/english-language",
            },
            {
              static: true,
              title: "Academic Study Tour",
              description:
                "Education is one of the most important investments in life, especially when you get to experience studying in a different country at the same time. Academic study tours can play a major part in enhancing our current university experience or assist in making the right choice of what to study and where.",
              img: "https://admin-mdx.webc.in/uploads/institute_of_sustainable_63ca53a546.jpeg?updated_at=2023-01-19T10:45:49.124Z",
              link: "/academic-study-tours-in-dubai",
            },
          ],
        },
      },
      {
        slug: "Grid",
        data: ""
      },
      {
        slug: "NewsCard",
        data: {
          title:
            "A new semester, a new opportunity: January 2023 intake kicks off in style",
          img: "https://admin-mdx.webc.in/uploads/Week_of_Welcome_4f8d9dc0b2.jpg",
          date: "16 Monday, January 2023",
          featured: true,
          link: "january-2023-intake-begins",
        },
      },
    ],
  },
};
