import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

/**
 * If you get a 'fs' module not defined error, here's what's up:
 *
 * getSortedPostsData uses fs.
 * fs does not work in the browser, only on the server.
 *
 * getStaticProps runs server-side (because 'next' says so),
 * so we have to make sure that server-only code (like getSortedPostsData)
 * is only running inside of getStaticProps.
 *
 * At build time, the builder will detect that getStaticProps
 * (plus any funcs it's calling) is only being used on the server,
 * so it won't be shipped it to the client. Happy days.
 *
 * The error shows up:
 * - If we import fs and don't use it
 * - If we import fs and use it in a client-side func (outside getStaticProps)
 */

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>
          Hi, I'm Eva Larumbe and my name is a four-letter word in JavaScript
          that has almost certainly made people cry.
        </p>
        <h2>Have fun, code more, cry less</h2>
        <p>
          Since I discovered I could explain code to people, I haven't stopped.
          <br />
          I've always been a passionate learner, and it makes my heart happy to
          pay it forward, getting junior developers excited about all the cool
          stuff we can build with code.
        </p>
        <p>
          I'm excited about long-term ideas like starting a YouTube channel and
          creating structured courses, but for now, here are a couple of starter
          resources.
        </p>
        <p>
          In 2019, I taught front-end web dev in a full-time bootcamp (we called
          ourselves the Wi-Fighters). Along the way, we collected some{' '}
          <a href="https://airtable.com/shr16yN6G7ED1AKxj">
            curated entry-level materials in an Airtable
          </a>
          , that you might find helpful if you're just getting started.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Guides</h2>
        <ul className={utilStyles.list}>
          {allPostsData
            .sort((a, b) => {
              // recent posts first
              return a.modified < b.modified ? 1 : -1;
            })
            .map(({ id, modified, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={modified} />
                </small>
              </li>
            ))}
        </ul>
      </section>
      <footer>
        <p>
          You can find my portfolio at{' '}
          <a href="https://www.evalarumbe.com">evalarumbe.com</a>
        </p>
        <p>
          The source code for this site is on{' '}
          <a href="https://github.com/evalarumbe/code-makes-me-cry">GitHub</a>
        </p>
      </footer>
    </Layout>
  );
}

/** Fun facts about getStaticProps:
 *  - Designed to prepare all the data needed for a page
 *    so it can only be defined in PAGE files
 *
 *  - Runs only on the server side
 *    so it CAN access: fs, API endpoints and DB
 *
 *  - Designed to run only at build time (in prod)
 *    so it CANNOT access: query params, http headers
 *
 * Source: https://nextjs.org/learn/basics/data-fetching/getstaticprops-details
 */
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
