import Link from "next/link";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const TocPage = () => {
  const [host, setHost] = useState("");

  useEffect(() => {
    if (typeof window !== undefined) {
      setHost(window.location.host);
    }
  }, []);
  return (
    <section>
      <div className="container my-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Page Name</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Home</td>
              <td>
                <Link
                  passHref
                  href={`/`}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <a target={"_blank"} rel="noopener noreferrer">
                    {` ${host}/`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Course Category Listing</td>
              <td>
                <Link passHref href={`/department-listing`}>
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/department-listing`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Course Listing</td>
              <td>
                <Link passHref href={`/course-category/business`}>
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/course-category/business`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Course Detail</td>
              <td>
                <Link
                  passHref
                  href={`/courses/course-list/course-detail/llb-honours`}
                >
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/courses/course-list/course-detail/llb-honours`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Staff Listing</td>
              <td>
                <Link passHref href={`/business-faculty`}>
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/business-faculty`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Staff Detail</td>
              <td>
                <Link
                  passHref
                  href={`/staff-detail/about-us-our-people-staff-detail-ajit-karnik`}
                >
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/staff-detail/about-us-our-people-staff-detail-ajit-karnik`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>DIAC CAMPUS</td>
              <td>
                <Link passHref href={`/diac-campus`}>
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/diac-campus`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>Alumni </td>
              <td>
                <Link passHref href={`/alumni`}>
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/alumni`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>General Page</td>
              <td>
                <Link passHref href={`/generic-landing`}>
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/generic-landing`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>Research</td>
              <td>
                <Link passHref href={`/research`}>
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/research`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>Research Seminar Series</td>
              <td>
                <Link passHref href={`/research/research-seminar-series`}>
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/research/research-seminar-series`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>MDX SPORTS MAIN PAGE</td>
              <td>
                <Link passHref href={`/sports`}>
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/sports`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr key="">
              <td>13</td>
              <td>MDX SPORTS DETAIL PAGE</td>
              <td>
                <Link passHref href={`/sports-detail/cricket`}>
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/sports-detail/cricket`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>Common Listing</td>
              <td>
                <Link passHref href={`/common-listing`}>
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/common-listing`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td>MDX CORPORATE AND CENTRE PAGE</td>
              <td>
                <Link passHref href={`/corporate-and-centre`}>
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/corporate-and-centre`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>MDX TEMPLATE</td>
              <td>
                <Link passHref href={`/mdx-template`}>
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/mdx-template`}
                  </a>
                </Link>
              </td>
            </tr>

            <tr>
              <td>17</td>
              <td>Payment Success</td>
              <td>
                <Link
                  href="https://payment-mdx.webc.in/html/payment-success.php"
                  passHref
                >
                  <a target={"_blank"} rel="noopener noreferrer">
                    https://payment-mdx.webc.in/html/payment-success.php
                  </a>
                </Link>
              </td>
            </tr>

            <tr>
              <td>18</td>
              <td>Payment Failure</td>
              <td>
                <Link
                  href="https://payment-mdx.webc.in/html/payment-failure.php"
                  passHref
                >
                  <a target={"_blank"} rel="noopener noreferrer">
                    https://payment-mdx.webc.in/html/payment-failure.php
                  </a>
                </Link>
              </td>
            </tr>

            <tr>
              <td>19</td>
              <td>Online Payment</td>
              <td>
                <Link href="https://payment-mdx.webc.in/html/" passHref>
                  <a target={"_blank"} rel="noopener noreferrer">
                    /payment
                  </a>
                </Link>
              </td>
            </tr>

            <tr>
              <td>20</td>
              <td>MDX EVENT LISTING PAGE</td>
              <td>
                <Link passHref href={`/event-listing`}>
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/event-listing`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>21</td>
              <td>MDX CAMPAIGN LANDING PAGE</td>
              <td>
                <Link passHref href={`/campaign-landing/russia`}>
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/campaign-landing/russia`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>22</td>
              <td>NEWS PAGE</td>
              <td>
                <Link passHref href={`/news/about-us/news`}>
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/news/about-us/news`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>23</td>
              <td>NEWS DETAILS</td>
              <td>
                <Link passHref href={`/news-details/details`}>
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/news-details/details`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>24</td>
              <td>EVENTS DETAILS</td>
              <td>
                <Link passHref href={`/event-details/details`}>
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/event-details/details`}
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <td>25</td>
              <td>TEAM MDX</td>
              <td>
                <Link passHref href={`/team-mdx`}>
                  <a target={"_blank"} rel="noopener noreferrer">
                    {`${host}/team-mdx`}
                  </a>
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default TocPage;
