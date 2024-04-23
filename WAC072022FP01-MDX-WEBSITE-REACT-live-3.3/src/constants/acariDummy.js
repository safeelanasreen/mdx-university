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
      {
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
          course_icon_strip: {
            data: {
              container: true,
              text_column_card_stack: true,
              cards: [
                {
                  title: "17 - 19 December 2023",
                  scrollTo: null,
                  icon: "/uploads/schedule_27b7789450.png",
                  link: null,
                },
                {
                  title: "Middlesex University Dubai, United Arab Emirates",
                  scrollTo: null,
                  icon: "/uploads/location_b623bf1fa3.png",
                  link: null,
                },
              ],
            },
          },
        },
      },
      {
        slug: "logo_slider_widget",
        backend_component_id: "generic-components.logo-slider",
        data: {
          scrollID: "Endorsed by",
          title: "Endorsed by",
          main_title: null,
          description: null,
          logo: [
            {
              img: "/uploads/enai_logo_ccb1977bcc.png",
              width: 1085,
              height: 277,
            },
            {
              img: "/uploads/icai_logo_3441d44d23.png",
              width: 216,
              height: 98,
            },
          ],
        },
      },
      {
        backend_component_id: "generic-components.sidebar-layout",
        slug: "sidebar_layout",
        sidebar_links: [
          "Call for Papers",
          "Conference Theme",
          "Submission Guidelines",
          "Important Dates",
          "Conference Fees and Registration",
        ],
        children: [
          {
            slug: "rich_text_widget",
            data: {
              scrollID: "Call for Papers",
              title: "Call for Papers",
              content:
                '<p><span lang="EN-US" dir="ltr">Asia – Middle East – Africa (AMEA) as a region is an emerging market for global, world-class international education and research. Hosted by Middlesex University Dubai, UAE, colleagues from Centre for Academic Integrity at Canakkale Onsekiz Mart University, Türkiye University of Wollongong in Dubai, UAE, Lahore LEADS University, Pakistan and King Fahd Medical City, Saudi Arabia are organising the first regional, collaborative conference on academic and research integrity for the region – ACARI 2023.&nbsp;</span></p><p><span lang="EN-US" dir="ltr">With invited colleagues from Chitkara University, India, Kuwait University, Kuwait, Bangamata Sheikh Fojilatunnesa Mujib Science &amp; Technology University, Bangladesh, and University of Calgary in Qatar, ACARI 2023 aims to bring together leaders, educators, practitioners, and researchers from the AMEA region and beyond to discuss, create and promote the culture of integrity across educational campuses in their countries.&nbsp;</span></p><p><span lang="EN-US" dir="ltr">The conference will feature oral and poster presentations, keynotes from renowned practitioners and scholars, panel sessions, workshops and student competitions.&nbsp;</span></p><p><span lang="EN-US" dir="ltr">Academicians, practitioners, and research scholars wishing to present at the conference are invited to submit a 500-750-word abstract of continuous text describing their current work for consideration by the programme committee.</span></p>',
            },
          },
          {
            slug: "rich_text_widget",
            data: {
              scrollID: "Conference Theme",
              title: "Conference Theme",
              content: `<h2 style=\"margin-left:0cm;text-align:justify;\"><span lang=\"EN-US\" dir=\"ltr\">Global Education, Local Values: A Regional Dialogue on Academic and Research Integrity</span></h2><p style=\"--yarl__icon_size:2.33333rem;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:Dax, sans-serif;font-size:17px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;line-height:1.88889rem;margin-bottom:1rem;margin-top:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-rendering:optimizelegibility;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\">Asia, Middle East, and Africa (AMEA), as a region is home to UNESCO Heritage Site Harran and Sanliurfa in Türkiye where the first Islamic University was founded (established in Mesopotamia), and to some of the oldest universities in the world such as Al Azhar University (<a href=\"https://www.topuniversities.com/blog/10-oldest-universities-world#:~:text=University%20of%20Bologna&amp;text=The%20'Nourishing%20Mother%20of%20the,oldest%20university%20in%20the%20world\" target=\"_blank\"><u>established in 970 AD in Egypt</u></a>), University of Economic Science (<a href=\"https://erudera.com/resources/oldest-universities/\" target=\"_blank\"><u>established in 1315 in Iran</u></a>), Istanbul University (<a href=\"https://erudera.com/resources/oldest-universities/\" target=\"_blank\"><u>established in 1453 in Türkiye</u></a>), Presidency University in Kolkata (<a href=\"https://erudera.com/resources/oldest-universities/\" target=\"_blank\"><u>established in 1817 Bharat</u></a>), King Edward Medical University (<a href=\"https://erudera.com/resources/oldest-universities/\" target=\"_blank\"><u>established in 1860 Bharat</u></a>), American University in Beirut (<a href=\"https://www.aub.edu.lb/aboutus/Pages/history.aspx\" target=\"_blank\"><u>established in 1866 in Lebanon</u></a>), Omdurman Islamic University (<a href=\"https://erudera.com/resources/oldest-universities/\" target=\"_blank\"><u>established in 1901 in Sudan</u></a>) and so on. In recent years, the region has revived itself as an emerging market for global, world-class international education and research.</p><p style=\"--yarl__icon_size:2.33333rem;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:Dax, sans-serif;font-size:17px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;line-height:1.88889rem;margin-bottom:1rem;margin-top:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-rendering:optimizelegibility;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\">Academic integrity is key to supporting quality education that is inclusive and accessible to all students. Internationally, European Network for Academic Integrity and International Centre for Academic Integrity have been constant beacons of support for academics, practitioners, students and staff alike, conducting awareness campaigns, conferences, providing opportunity for collaboration and research. Similarly, research integrity is the foundation to reliable, valuable results that have the power to make sustainable changes and solve global problems. International bodies such as World Conference on Research Integrity and World Education Research Association have been guiding and supportive of the global communities, paving the way for greater understanding and practice of research with integrity.</p><p style=\"--yarl__icon_size:2.33333rem;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:Dax, sans-serif;font-size:17px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;line-height:1.88889rem;margin-bottom:1rem;margin-top:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-rendering:optimizelegibility;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\">However, there still remains a need for focused dialogue that recognises the cultural norms and differences that exist within the Asia - Middle East - and Africa regions. To support the growing community in these regions, ACARI 2023 aims to bring together leaders, policymakers, educators, practitioners, and researchers from the partnering nations’ education sectors to discuss, create and promote the culture of integrity across educational campuses in the countries. The proposed program aims to feature arrays of renowned and well-established international keynotes, regional expert advice and fresh perspectives on very common and familiar topics such predatory journals, data integrity in research, contract cheating, policy reviews and role of institutions and individuals, under the theme <strong>Global Education, Local Values: A regional dialogue on academic and research integrity.&nbsp;</strong></p><h3><strong>Sub Themes</strong></h3><ul><li>Academic integrity - awareness, knowledge, practice</li><li>Teaching, learning and assessing with integrity</li><li>Contract cheating and impact on quality of education - student, staff and institutional perspectives</li><li>Understanding the industry - essay mills, supply chain and assignment writers</li><li>K-12 (primary, secondary, high school) - starting dialogue early</li><li>Ethical considerations and processes in research</li><li>Research publications, retractions and predatory journals</li></ul>`,
            },
          },
          {
            slug: "rich_text_widget",
            data: {
              scrollID: "Submission Guidelines",
              title: "Submission Guidelines",
              content: `<p><span lang=\"EN-US\" dir=\"ltr\">Conference delegates are invited to submit 500-750-word abstract of continuous text describing their current work for consideration by the programme committee.&nbsp;Full paper submission is optional but encouraged.&nbsp; &nbsp;</span></p><p style=\"--yarl__icon_size:2.33333rem;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:Dax, sans-serif;font-size:17px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;line-height:1.88889rem;margin-bottom:1rem;margin-top:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-rendering:optimizelegibility;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\">Abstracts are invited for the following presentation types:&nbsp;</p><ul><li>Oral presentation&nbsp;</li><li>Poster presentation&nbsp;</li><li>Workshop &nbsp;</li></ul><p style=\"--yarl__icon_size:2.33333rem;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:Dax, sans-serif;font-size:17px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;line-height:1.88889rem;margin-bottom:1rem;margin-top:30px !important;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-rendering:optimizelegibility;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\">Abstracts or full papers must be submitted by 30th June 2023 for consideration by the programmecommittee.&nbsp;</p><p style=\"--yarl__icon_size:2.33333rem;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:Dax, sans-serif;font-size:17px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;line-height:1.88889rem;margin-bottom:1rem;margin-top:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-rendering:optimizelegibility;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\"><strong>Dr Sreejith Balasubramanian&nbsp;</strong></p><p style=\"--yarl__icon_size:2.33333rem;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:Dax, sans-serif;font-size:17px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;line-height:1.88889rem;margin-bottom:1rem;margin-top:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-rendering:optimizelegibility;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\">Chair, Local Organizing Committee&nbsp;<br>ACARI, 2023&nbsp;</p><p style=\"--yarl__icon_size:2.33333rem;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:Dax, sans-serif;font-size:17px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;line-height:1.88889rem;margin-bottom:1rem;margin-top:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-rendering:optimizelegibility;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\"><strong>Dr Zeenath Reza Khan&nbsp;</strong></p><p style=\"--yarl__icon_size:2.33333rem;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:Dax, sans-serif;font-size:17px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;line-height:1.88889rem;margin-bottom:1rem;margin-top:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-rendering:optimizelegibility;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\">Co-Chair, Local Organizing Committee&nbsp;<br>ACARI 2023&nbsp;</p>`,
            },
          },
          {
            slug: "rich_text_widget",
            data: {
              scrollID: "Important Dates",
              title: "Important Dates",
              content: `<figure class=\"table\" style=\"width:1126.78px;\"><table style=\"border-bottom:1px solid rgb(211, 209, 209);border-right:1px solid rgb(211, 209, 209);\"><tbody><tr><td style=\"background-color:var(--light);border-bottom-style:none;border-bottom-width:initial;border-color:var(--border-color);border-left-style:solid;border-left-width:1px;border-right-style:solid;border-right-width:1px;border-top-style:solid;border-top-width:1px;padding:0.833333rem;vertical-align:top;\"><p style=\"margin-left:0px;\">Paper Submission System Live&nbsp;&nbsp;</p></td><td style=\"background-color:var(--light);border-bottom-style:none;border-bottom-width:initial;border-color:var(--border-color);border-left-style:solid;border-left-width:1px;border-right-style:none;border-right-width:initial;border-top-style:solid;border-top-width:1px;padding:0.833333rem;vertical-align:top;\"><p style=\"margin-left:0px;\">30-Mar-23&nbsp;&nbsp;</p></td></tr><tr><td style=\"background-color:var(--white);border-bottom-color:rgb(211, 209, 209);border-bottom-style:none;border-left:1px solid !important;border-right:1px solid !important;border-top:1px solid rgb(211, 209, 209);padding:0.833333rem;vertical-align:top;\"><p style=\"margin-left:0px;\">Deadline for abstract submission&nbsp;&nbsp;</p></td><td style=\"background-color:var(--white);border-bottom-color:!important;border-bottom-style:none;border-left:1px solid !important;border-right-style:none;border-top:1px solid !important;padding:0.833333rem;vertical-align:top;\"><p style=\"margin-left:0px;\">30-Jun-23&nbsp;&nbsp;</p></td></tr><tr><td style=\"background-color:var(--light);border-bottom-style:none;border-bottom-width:initial;border-color:var(--border-color);border-left-style:solid;border-left-width:1px;border-right-style:solid;border-right-width:1px;border-top-style:solid;border-top-width:1px;padding:0.833333rem;vertical-align:top;\"><p style=\"margin-left:0px;\">Notification of acceptance&nbsp;</p></td><td style=\"background-color:var(--light);border-bottom-style:none;border-bottom-width:initial;border-color:var(--border-color);border-left-style:solid;border-left-width:1px;border-right-style:none;border-right-width:initial;border-top-style:solid;border-top-width:1px;padding:0.833333rem;vertical-align:top;\"><p style=\"margin-left:0px;\">30-Sep-23&nbsp;&nbsp;</p></td></tr><tr><td style=\"background-color:var(--white);border-bottom-color:rgb(211, 209, 209);border-bottom-style:none;border-left:1px solid !important;border-right:1px solid !important;border-top:1px solid rgb(211, 209, 209);padding:0.833333rem;vertical-align:top;\"><p style=\"margin-left:0px;\">Revised abstract submission&nbsp;&nbsp;</p></td><td style=\"background-color:var(--white);border-bottom-color:!important;border-bottom-style:none;border-left:1px solid !important;border-right-style:none;border-top:1px solid !important;padding:0.833333rem;vertical-align:top;\"><p style=\"margin-left:0px;\">30-Oct-23&nbsp;&nbsp;</p></td></tr><tr><td style=\"background-color:var(--light);border-bottom-style:none;border-bottom-width:initial;border-color:var(--border-color);border-left-style:solid;border-left-width:1px;border-right-style:solid;border-right-width:1px;border-top-style:solid;border-top-width:1px;padding:0.833333rem;vertical-align:top;\"><p style=\"margin-left:0px;\">Full paper submission (Optional)&nbsp;</p></td><td style=\"background-color:var(--light);border-bottom-style:none;border-bottom-width:initial;border-color:var(--border-color);border-left-style:solid;border-left-width:1px;border-right-style:none;border-right-width:initial;border-top-style:solid;border-top-width:1px;padding:0.833333rem;vertical-align:top;\"><p style=\"margin-left:0px;\">30-Nov-23&nbsp;&nbsp;</p></td></tr><tr><td style=\"background-color:var(--white);border-bottom-color:rgb(211, 209, 209);border-bottom-style:none;border-left:1px solid !important;border-right:1px solid !important;border-top:1px solid rgb(211, 209, 209);padding:0.833333rem;vertical-align:top;\"><p style=\"margin-left:0px;\">Early bird registration deadline&nbsp;&nbsp;</p></td><td style=\"background-color:var(--white);border-bottom-color:!important;border-bottom-style:none;border-left:1px solid !important;border-right-style:none;border-top:1px solid !important;padding:0.833333rem;vertical-align:top;\"><p style=\"margin-left:0px;\">30-Oct-23&nbsp;&nbsp;</p></td></tr><tr><td style=\"background-color:var(--light);border-bottom-style:none;border-bottom-width:initial;border-color:var(--border-color);border-left-style:solid;border-left-width:1px;border-right-style:solid;border-right-width:1px;border-top-style:solid;border-top-width:1px;padding:0.833333rem;vertical-align:top;\"><p style=\"margin-left:0px;\">Regular registration deadline&nbsp;&nbsp;</p></td><td style=\"background-color:var(--light);border-bottom-style:none;border-bottom-width:initial;border-color:var(--border-color);border-left-style:solid;border-left-width:1px;border-right-style:none;border-right-width:initial;border-top-style:solid;border-top-width:1px;padding:0.833333rem;vertical-align:top;\"><p style=\"margin-left:0px;\">30-Nov-23&nbsp;&nbsp;</p></td></tr><tr><td style=\"background-color:var(--white);border-bottom-color:rgb(211, 209, 209);border-bottom-style:none;border-left:1px solid !important;border-right:1px solid !important;border-top:1px solid rgb(211, 209, 209);padding:0.833333rem;vertical-align:top;\"><p style=\"margin-left:0px;\">Conference&nbsp;</p></td><td style=\"background-color:var(--white);border-bottom-color:!important;border-bottom-style:none;border-left:1px solid !important;border-right-style:none;border-top:1px solid !important;padding:0.833333rem;vertical-align:top;\"><p style=\"margin-left:0px;\">17 - 19 December 2023&nbsp;&nbsp;</p></td></tr></tbody></table></figure>`,
            },
          },
          {
            slug: "rich_text_widget",
            data: {
              scrollID: "Conference Fees and Registration",
              title: "Conference Fees and Registration",
              content: `<figure class=\"table\"><table><tbody><tr><td style=\"border:1.0pt solid windowtext;height:14.15pt;padding:0cm 5.4pt;width:368.3pt;\"><p style=\"line-height:normal;margin-bottom:0cm;\"><span lang=\"EN-US\" dir=\"ltr\">Early Bird Registration (In-Person) for University Faculty and Staff</span></p></td><td style=\"border-bottom-style:solid;border-color:windowtext;border-left-style:none;border-right-style:solid;border-top-style:solid;border-width:1.0pt;height:14.15pt;padding:0cm 5.4pt;width:99.2pt;\"><span lang=\"EN-US\" dir=\"ltr\">USD 150</span></td></tr><tr><td style=\"border-bottom-style:solid;border-color:windowtext;border-left-style:solid;border-right-style:solid;border-top-style:none;border-width:1.0pt;height:14.15pt;padding:0cm 5.4pt;width:368.3pt;\"><p style=\"line-height:normal;margin-bottom:0cm;\"><span lang=\"EN-US\" dir=\"ltr\">Normal Registration (In-Person) for University Faculty and Staff</span></p></td><td style=\"border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:14.15pt;padding:0cm 5.4pt;width:99.2pt;\"><span lang=\"EN-US\" dir=\"ltr\">USD 200</span></td></tr><tr><td style=\"border-bottom-style:solid;border-color:windowtext;border-left-style:solid;border-right-style:solid;border-top-style:none;border-width:1.0pt;height:14.15pt;padding:0cm 5.4pt;width:368.3pt;\"><p style=\"line-height:normal;margin-bottom:0cm;\"><span lang=\"EN-US\" dir=\"ltr\">Registration for Virtual Participants</span></p></td><td style=\"border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:14.15pt;padding:0cm 5.4pt;width:99.2pt;\"><span lang=\"EN-US\" dir=\"ltr\">USD 50</span></td></tr><tr><td style=\"border-bottom-style:solid;border-color:windowtext;border-left-style:solid;border-right-style:solid;border-top-style:none;border-width:1.0pt;height:14.15pt;padding:0cm 5.4pt;width:368.3pt;\"><p style=\"line-height:normal;margin-bottom:0cm;\"><span lang=\"EN-US\" dir=\"ltr\">Registration for School Teachers and Staff&nbsp;</span></p></td><td style=\"border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:14.15pt;padding:0cm 5.4pt;width:99.2pt;\"><span lang=\"EN-US\" dir=\"ltr\">USD 50</span></td></tr><tr><td style=\"border-bottom-style:solid;border-color:windowtext;border-left-style:solid;border-right-style:solid;border-top-style:none;border-width:1.0pt;height:14.15pt;padding:0cm 5.4pt;width:368.3pt;\"><p style=\"line-height:normal;margin-bottom:0cm;\"><span lang=\"EN-US\" dir=\"ltr\">Registration for All Students</span></p></td><td style=\"border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:14.15pt;padding:0cm 5.4pt;width:99.2pt;\"><span lang=\"EN-US\" dir=\"ltr\">USD 20</span></td></tr><tr><td style=\"border-bottom-style:solid;border-color:windowtext;border-left-style:solid;border-right-style:solid;border-top-style:none;border-width:1.0pt;height:14.15pt;padding:0cm 5.4pt;width:368.3pt;\"><p style=\"line-height:normal;margin-bottom:0cm;\"><span lang=\"EN-US\" dir=\"ltr\">Late/Onsite Registration (In-Person)</span></p></td><td style=\"border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;height:14.15pt;padding:0cm 5.4pt;width:99.2pt;\"><span lang=\"EN-US\" dir=\"ltr\">USD 300</span></td></tr></tbody></table></figure>`,
            },
          },
        ],
      },
      {
        slug: "text_column_card_stack_widget",
        backend_component_id: "generic-components.text-image-column-component",
        scrollID: "Keynote Speakers",
        data: {
          programe: {
            data: {
              title_caption: "KEYNOTE SPEAKERS",
              title: "The Speakers",
              container: true,
              text_column_card_stack: true,
              cards: [
                {
                  title: "Dr Thomas Lancaster",
                  link: null,
                  description:
                    '<p style="margin-left:0px;"><span style="background-color:transparent;color:rgb(var(--color_13));font-family:avenir-lt-w01_35-light1475496, sans-serif;font-size:17px;"><i>Senior Teaching Fellow,</i></span><br><span style="background-color:transparent;color:rgb(var(--color_13));font-family:avenir-lt-w01_35-light1475496, sans-serif;font-size:17px;"><i>Imperial College London, United Kingdom</i></span></p><p style="margin-left:0px;">Thomas Lancaster has researched issues surrounding academic integrity since 2000. He currently teaches at Imperial College London in the UK and regularly speaks at international academic integrity events. He is best known for research into contract cheating, a term he developed with the late Robert Clarke to describe the phenomenon where students utilise third parties to complete their academic work for them. Much of Thomas’ recent research has been conducted alongside undergraduate student partners, looking at the increasing reach of the international contract cheating industry and the operation of the essay mills, providers and individuals who help students to breach academic integrity.</p>',
                  img: "/uploads/thomas_49788c23af.png",
                  background_color: "#ffffff",
                },
                {
                  title: "Dr Sarah Elaine Eaton",
                  link: null,
                  description:
                    '<p style="margin-left:0px;"><span style="background-color:transparent;color:rgb(var(--color_13));font-family:avenir-lt-w01_35-light1475496, sans-serif;font-size:17px;"><i>Associate Professor Werklund School of Education</i></span><br><span style="background-color:transparent;color:rgb(var(--color_13));font-family:avenir-lt-w01_35-light1475496, sans-serif;font-size:17px;"><i>Educational Leader in Resident Academic Integrity</i></span><br><span style="background-color:transparent;color:rgb(var(--color_13));font-family:avenir-lt-w01_35-light1475496, sans-serif;font-size:17px;"><i>Taylor Institute for Teaching and Learning</i></span><br><span style="background-color:transparent;color:rgb(var(--color_13));font-family:avenir-lt-w01_35-light1475496, sans-serif;font-size:17px;"><i>University of Calgary, Canada</i></span></p><p style="margin-left:0px;">Sarah Elaine Eaton, PhD, is an associate professor at the Werklund School of Education, University of Calgary, Canada. She has received research awards of excellence for her scholarship on academic integrity from the Canadian Society for the Study of Higher Education (CSSHE) (2020) and the European Network for Academic Integrity (ENAI) (2022). Dr. Eaton has written and presented extensively on academic integrity and ethics in higher education and is regularly invited as a media guest to talk about academic misconduct. Dr. Eaton is the editor-in-chief of the&nbsp;International Journal for Educational Integrity. Her books include&nbsp;Plagiarism in Higher Education: Tackling Tough Topics in Academic Integrity,&nbsp;Academic Integrity in Canada: An Enduring and Essential Challenge&nbsp;(Eaton &amp; Christensen Hughes, eds.), and&nbsp;Contract Cheating in Higher Education: Global Perspectives on Theory, Practice, and Policy&nbsp;(Eaton, Curtis, Stoesz, Clare, Rundle, &amp; Seeland, eds.) and Ethics and Integrity in Teacher Education (Eaton &amp; Khan, eds.)</p>',
                  img: "/uploads/sarah_be43adb10b.png",
                  background_color: "#ffffff",
                },
                {
                  title: "Professor Ann Rogerson",
                  link: null,
                  description: `<p style=\"margin-left:0px;\"><span style=\"background-color:transparent;color:rgb(var(--color_13));font-family:avenir-lt-w01_35-light1475496, sans-serif;font-size:17px;\"><i>Associate Dean (Education), Faculty of Business &amp; Law</i></span><br><span style=\"background-color:transparent;color:rgb(var(--color_13));font-family:avenir-lt-w01_35-light1475496, sans-serif;font-size:17px;\"><i>University of Wollongong, Australia</i></span></p><p style=\"margin-left:0px;\">Ann is a passionate educator, keen to engage students in the developing lifelong learning skills while connecting their learning experiences to theory and real world contexts and their future workplaces. She continually assesses and seeks to improve her own teaching and learning skills through feedback, reflection, study and research, sharing her discoveries with colleagues, and drawing on her industry experience. She holds degrees in Business and Higher Education, and is a Senior Fellow of the HEA. Ann’s commitment to business education extends beyond her discipline area of organisational behaviour and interpersonal communication to the increasingly prominent area of promoting academic integrity. She actively advocates and shares how assessment design can limit academic misconduct and facilitates the easier detection of contract cheating situations which has led to local, national and international recognition. She is now recognised as an international expert in detecting contract cheating and the use of Turnitin, machine based plagiarism and bibliographic forensics, with work cited by Australian Government authorities as best practice in the area.&nbsp; Ann deliver seminars and workshops on the patterns and clues evident in irregular submissions, and methods of restructuring course content and assessments to minimise the practise and make it easier to detect for the sector at large. In particular, the field of research into the prevalence of machine based plagiarism based on article spinners and paraphrasing tools in student work. She is Chair of UOW's Academic Integrity Advisory Group, on the Executive Advisory Board for the UAE Centre for Academic Integrity, sits on the International Scientific Panel for ENAI, the Executive for the International Association for Language and Social Psychology (IALSP), and the Editorial Board – International Journal for Educational Integrity (Springer Nature). Author of the “Breaches” unit in the Epigeum Academic Integrity program and is an expert panel member for the Tertiary Education Quality and Standards Agency (TEQSA, Australian Government).</p>`,
                  img: "/uploads/ann_6739e2d021.png",
                  background_color: "#ffffff",
                },
              ],
            },
          },
        },
      },
      {
        slug: "half_container_with_image",
        backend_component_id: "generic-components.half-container-with-image",
        data: {
          scrollID: "About Host City",
          img: "/uploads/why_dubai_3ceedb10cb.jpg",
          title: "About Host City",
          description: null,
          name: '<p style="margin-left:0px;">With year-round sun and a dramatic combination of both the desert and beach, Dubai is the perfect setting to be swept away by high-adrenaline activities. Rocket across the Arabian Gulf in a speedboat or roar along the circuit in a race car, skydive over Palm Jumeirah, ski around the World Islands, paddleboard along the coast or swim with dolphins and sharks, explore the depths of the open waters, or go diving in the deepest pool in the world. You can even leave the city and try dune driving in the desert or soar above the sand in a hot air balloon. Fasten your seatbelt, harness or helmet – it’s going to be an exciting ride.</p><p style="margin-left:0px;">To know more about Dubai, visit Dubai <a style="background-color:transparent;border-width:0px;color:inherit;cursor:pointer;margin:0px;outline:0px;padding:0px;text-decoration:none;vertical-align:baseline;" href="https://www.visitdubai.com/en/"><span style="background-color:transparent;"><u>Department of Economy and Tourism.</u></span></a></p><p style="margin-left:0px;"><span style="background-color:transparent;color:rgb(var(--color_34));">For details on visa and travel, please visit </span><a style="background-color:transparent;border-width:0px;color:inherit;cursor:pointer;margin:0px;outline:0px;padding:0px;text-decoration:none;vertical-align:baseline;"><span style="background-color:transparent;color:rgb(var(--color_34));"><u>UAE&nbsp; Information Desk&nbsp;</u></span></a></p><p style="margin-left:0px;"><span style="background-color:transparent;color:rgb(var(--color_15));"><u>Image courtesy Dubai Department of Economy and Tourism</u></span></p>',
          designation: "",
        },
      },
      {
        slug: "about_widget",
        backend_component_id: "generic-components.about-widget",
        data: {
          title: "About Host Campus",
          description:
            "Forward-thinking and dynamic, we’re a 5-Star KHDA rated university with a reputation for innovation and excellence in teaching and research. Since we first opened our first UAE campus in Dubai Knowledge Park in 2005, we’ve been providing a quality, affordable UK education to students from around the world. We’re incredibly proud to be Dubai’s largest UK university for total student enrolments, with over 4,500 students from 118+ nationalities currently studying as members of our global family.<br><br>\n\nWe pride ourselves on providing a student experience with a difference. We opened our second campus in Dubai International Academic City in September 2021, which provides our students with the opportunity to participate in a much wider international student community. Through our commitment to inclusive, industry-led and engaging education, we empower our students to be professional, skilled individuals ready for the modern world. Our students are prepared to become lifelong learners and are ready to contribute to the communities in which they live and work.",
          img: "/uploads/IMG_6088_8e304cb9d7.jpg",
          video_link: null,
          link: null,
          container: true,
          bg_light: true,
          scrollID: "About Host Campus",
          title_caption: null,
          link_text: "Read more",
        },
      },
      {
        slug: "logo_slider_widget",
        backend_component_id: "generic-components.logo-slider",
        data: {
          scrollID: null,
          title: null,
          main_title: "PLATINUM SPONSORS",
          description: null,
          logo: [
            {
              img: "/uploads/Studiosity_logo_with_tagline_8970b8dcf1.webp",
              width: 554,
              height: 246,
            },
            {
              img: "/uploads/Turnitin_Primary_Logo_RGB_3f690b2b2e.png",
              width: 1392,
              height: 417,
            },
          ],
        },
      },
      {
        slug: "logo_slider_widget",
        backend_component_id: "generic-components.logo-slider",
        data: {
          scrollID: null,
          title: null,
          main_title: "Destination Partner",
          description: "Dubai Economy and Tourism",
          logo: [
            {
              img: "/uploads/dubai_fce94b994a.png",
              width: 199,
              height: 127,
            },
          ],
        },
      },
      {
        slug: "rich_text_widget",
        backend_component_id: "generic-components.rich-text-widget",
        data: {
          scrollID: null,
          title: null,
          theme: null,
          content:
            '<div class="raw-html-embed"><style>\n.ProgramCard_program_item_content__GHP2v {\n    color: #000;\n}\n\n</style></div>',
        },
      },
      {
        slug: "rich_text_widget",
        backend_component_id: "generic-components.rich-text-widget",
        data: {
          scrollID: "Conference Committee",
          title: "Conference Committee",
          theme: null,
          content:
            '<p style="text-align:justify;"><span style="font-family:&quot;Times New Roman&quot;,serif;"><span lang="EN-US" dir="ltr"><strong>Conference Chairs</strong></span></span></p><figure class="table" style="width:392.75pt;"><table><tbody><tr><td style="border:1.0pt solid windowtext;height:32.35pt;padding:0cm 5.4pt;vertical-align:top;width:193.45pt;"><p style="text-align:justify;"><span lang="EN-US" dir="ltr">Dr Sreejith Balasubramanian</span></p><p style="text-align:justify;"><span lang="EN-US" dir="ltr">Chair, ACARI 2023</span></p><p style="text-align:justify;"><span lang="EN-US" dir="ltr">Middlesex University Dubai</span></p><p style="text-align:justify;"><span lang="EN-US" dir="ltr">United Arab Emirates</span></p></td><td style="border-bottom-style:solid;border-color:windowtext;border-left-style:none;border-right-style:solid;border-top-style:solid;border-width:1.0pt;height:32.35pt;padding:0cm 5.4pt;vertical-align:top;width:199.3pt;"><p style="text-align:justify;"><span lang="EN-US" dir="ltr">Dr&nbsp; Zeenath Reza Khan</span></p><p style="text-align:justify;"><span lang="EN-US" dir="ltr">Co-Chair, ACARI 2023</span></p><p style="text-align:justify;"><span lang="EN-US" dir="ltr">University of Wollongong in Dubai</span></p><p style="text-align:justify;"><span lang="EN-US" dir="ltr">United Arab Emirates</span></p></td></tr></tbody></table></figure><p style="margin-left:0cm;text-align:justify;"><span lang="EN-US" dir="ltr"><strong>Deputy Chairs</strong></span></p><figure class="table" style="width:467.5pt;"><table><tbody><tr><td style="border:1.0pt solid windowtext;height:37.8pt;padding:0cm 5.4pt;vertical-align:top;width:152.45pt;"><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">Dr Salim Razi</span></p><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">Deputy Chair, ACARI 2023</span></p><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">Canakkale Onsekiz Mart University, Turkey</span></p></td><td style="border-bottom-style:solid;border-color:windowtext;border-left-style:none;border-right-style:solid;border-top-style:solid;border-width:1.0pt;height:37.8pt;padding:0cm 5.4pt;vertical-align:top;width:165.35pt;"><p style="text-align:justify;"><span lang="EN-US" dir="ltr">Dr Muhammad Shahid Soroya</span></p><p style="text-align:justify;"><span lang="EN-US" dir="ltr">Deputy Chair, ACARI 2023</span></p><p style="text-align:justify;"><span lang="EN-US" dir="ltr">Former Vice Chancellor at Lahore Leads University, Pakistan</span></p></td><td style="border-bottom-style:solid;border-color:windowtext;border-left-style:none;border-right-style:solid;border-top-style:solid;border-width:1.0pt;height:37.8pt;padding:0cm 5.4pt;vertical-align:top;width:149.7pt;"><p style="text-align:justify;"><span lang="EN-US" dir="ltr">Dr Muaawia Hamza</span></p><p style="text-align:justify;"><span lang="EN-US" dir="ltr">Deputy Chair, ACARI 2023</span></p><p style="text-align:justify;"><span lang="EN-US" dir="ltr">King Fahad Medical City, Saudi Arabia</span></p></td></tr></tbody></table></figure><p style="margin-left:0cm;text-align:justify;"><span lang="EN-US" dir="ltr"><strong>Invited Deputed Chairs from Partner Institutions</strong></span></p><figure class="table" style="width:488.8pt;"><table><tbody><tr><td style="border:1.0pt solid windowtext;height:37.8pt;padding:0cm 5.4pt;vertical-align:top;width:124.75pt;"><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">Dr Amit Mittal</span></p><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">Invited Deputy Chair, ACARI 2023</span></p><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">Chitkara University</span></p><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">India</span></p></td><td style="border-bottom-style:solid;border-color:windowtext;border-left-style:none;border-right-style:solid;border-top-style:solid;border-width:1.0pt;height:37.8pt;padding:0cm 5.4pt;vertical-align:top;width:120.75pt;"><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">Dr Haneen Shafeeq Al-Ghabra</span></p><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">Invited Deputy Chair, ACARI 2023</span></p><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">Kuwait University, Kuwait</span></p></td><td style="border-bottom-style:solid;border-color:windowtext;border-left-style:none;border-right-style:solid;border-top-style:solid;border-width:1.0pt;height:37.8pt;padding:0cm 5.4pt;vertical-align:top;width:121.6pt;"><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">Dr Mahmudul Hasan</span></p><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">Invited Deputy Chair, ACARI 2023&nbsp;</span></p><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">Bangamata Sheikh Fojilatunnesa Mujib Science &amp; Technology University, Bangladesh</span></p><p style="line-height:115%;margin-bottom:0cm;">&nbsp;</p></td><td style="border-bottom-style:solid;border-color:windowtext;border-left-style:none;border-right-style:solid;border-top-style:solid;border-width:1.0pt;height:37.8pt;padding:0cm 5.4pt;vertical-align:top;width:121.7pt;"><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">Ms Faisa Farah</span></p><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">Invited Deputy Chair, ACARI 2023</span></p><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">University of Calgary in Qatar</span></p><p style="line-height:115%;margin-bottom:0cm;">&nbsp;</p></td></tr></tbody></table></figure><p style="margin-left:0cm;text-align:justify;"><span lang="EN-US" dir="ltr"><strong>Local Organizing Committee Members</strong></span></p><figure class="table" style="width:498.45pt;"><table><tbody><tr><td style="border:1.0pt solid windowtext;height:29.35pt;padding:0cm 5.4pt;vertical-align:top;width:162.55pt;"><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">Professor Christopher Hill</span></p><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">British University in Dubai</span></p></td><td style="border-bottom-style:solid;border-color:windowtext;border-left-style:none;border-right-style:solid;border-top-style:solid;border-width:1.0pt;height:29.35pt;padding:0cm 5.4pt;vertical-align:top;width:156.15pt;"><p style="text-align:justify;"><span lang="EN-US" dir="ltr">Dr Steven Glasgow</span></p><p style="text-align:justify;"><span lang="EN-US" dir="ltr">Herriot-Watt University Dubai</span></p></td><td style="border-bottom-style:solid;border-color:windowtext;border-left-style:none;border-right-style:solid;border-top-style:solid;border-width:1.0pt;height:29.35pt;padding:0cm 5.4pt;vertical-align:top;width:179.75pt;"><p style="text-align:justify;"><span lang="EN-US" dir="ltr">Ms Ajrina Hysaj</span></p><p style="text-align:justify;"><span lang="EN-US" dir="ltr">University of Wollongong in Dubai</span></p></td></tr></tbody></table></figure><figure class="table" style="width:498.4pt;"><table><tbody><tr><td style="border:1.0pt solid windowtext;height:31.1pt;padding:0cm 5.4pt;vertical-align:top;width:162.8pt;"><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">Ms Sivapriya Ramakrishnan</span></p><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">University of Sharjah</span></p></td><td style="border-bottom-style:solid;border-color:windowtext;border-left-style:none;border-right-style:solid;border-top-style:solid;border-width:1.0pt;height:31.1pt;padding:0cm 5.4pt;vertical-align:top;width:155.9pt;"><p style="text-align:justify;"><span lang="EN-US" dir="ltr">Ms Serene Regi John</span></p><p style="text-align:justify;"><span lang="EN-US" dir="ltr">Gulf Medical University, Ajman</span></p></td><td style="border-bottom-style:solid;border-color:windowtext;border-left-style:none;border-right-style:solid;border-top-style:solid;border-width:1.0pt;height:31.1pt;padding:0cm 5.4pt;vertical-align:top;width:179.7pt;"><p style="text-align:justify;"><span lang="EN-US" dir="ltr">Ms Veena Mulani</span></p><p style="text-align:justify;"><span lang="EN-US" dir="ltr">Al Diyafah High School, Dubai</span></p></td></tr></tbody></table></figure><figure class="table" style="width:162.8pt;"><table><tbody><tr><td style="border:1.0pt solid windowtext;height:31.15pt;padding:0cm 5.4pt;width:162.8pt;"><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">Ms Nameeta Bhatia</span></p><p style="line-height:115%;margin-bottom:0cm;"><span lang="EN-US" dir="ltr">GEMS Cambridge International School Dubai</span></p></td></tr></tbody></table></figure>',
        },
      },
      {
        slug: "logo_slider_widget",
        backend_component_id: "generic-components.logo-slider",
        data: {
          scrollID: null,
          title: null,
          main_title: "Collaborating Universities",
          description: null,
          logo: [
            {
              img: "/uploads/chanakale_16f2f86e75.png",
              width: 500,
              height: 500,
            },
            {
              img: "/uploads/lahore_leads_c2947f952b.png",
              width: 500,
              height: 500,
            },
            {
              img: "/uploads/uowd_4a030962dd.png",
              width: 500,
              height: 500,
            },
            {
              img: "/uploads/riyadh_second_fc29f9a2d9.png",
              width: 500,
              height: 500,
            },
            {
              img: "/uploads/chitkara_9b999a7f6b.png",
              width: 500,
              height: 500,
            },
            {
              img: "/uploads/kuwait_university_0483368062.png",
              width: 500,
              height: 500,
            },
            {
              img: "/uploads/logo_ce65514468.png",
              width: 500,
              height: 500,
            },
            {
              img: "/uploads/univerity_calgary_0498c46791.png",
              width: 500,
              height: 500,
            },
          ],
        },
      },
    ],
  },
};
