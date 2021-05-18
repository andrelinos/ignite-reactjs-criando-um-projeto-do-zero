import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | spacetraveling.</title>
      </Head>

      <div className={styles.container}>
        <main className={commonStyles.content}>
          <section className={styles.posts}>
            <Link href="/">
              <a href="/">
                <h2>Titulo do post</h2>
                <p>Subtítulo do post</p>
                <div>
                  <span>
                    <FiCalendar size={20} color="#bbb" />
                    {format(new Date('2020-05-06'), 'dd MMM yyyy', {
                      locale: ptBR,
                    })}
                  </span>

                  <span>
                    <FiUser size={20} color="#bbbb" />
                    Andrelino Silva
                  </span>
                </div>
              </a>
            </Link>
          </section>

          <button type="button" onClick={() => {}}>
            Carregar mais posts
          </button>
        </main>
      </div>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
