import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { RichText } from 'prismic-dom';
import Prismic from '@prismicio/client';

import { verify } from 'crypto';
import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  uid: string;
  first_publication_date: string | null;
  last_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface NextPost {
  title: string;
  uid: string;
}

interface PostProps {
  post: Post;
  preview: boolean;
  nextPost: NextPost;
  previousPost: NextPost;
}

export default function Post({
  post,
  preview,
  nextPost,
  previousPost,
}: PostProps): JSX.Element {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const amountWordsTotalOfContent = RichText.asText(
    post.data.content.reduce((total, data) => [...total, ...data.body], [])
  ).split(' ').length;

  const amountWordsOfContentHeading = post.data.content.reduce(
    (total, data) => {
      if (data.heading) {
        return [...total, data.heading.split(' ')];
      }

      return [...total];
    },
    []
  ).length;

  const readingTime = Math.ceil(
    (amountWordsOfContentHeading + amountWordsOfContentHeading) / 200
  );

  return (
    <>
      <Head>
        <title>{post.data.title} | Space Traveling</title>
      </Head>

      <section className={styles.banner}>
        <img src={post.data.banner.url} alt="Banner" />
      </section>

      <main className={styles.content}>
        <article className={styles.post}>
          <h1>{post.data.title}</h1>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();

  const posts = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    { pageSize: 3 }
  );

  const paths = posts.results.map(result => {
    return {
      params: {
        slug: result.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

function verifyNextPost(post, slug): NextPost | null {
  return slug === post.results[0].uid
    ? null
    : {
        title: post.results[0]?.data?.title,
        uid: post.results[0]?.uid,
      };
}

export const getStaticProps: GetStaticProps<PostProps> = async ({
  params,
  preview = false,
}) => {
  const { slug } = params;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID('post', String(slug), {});

  const responsePreviousPost = await prismic.query(
    Prismic.predicates.at('document.type', 'post'),
    {
      pageSize: 1,
      after: slug,
      orderings: ['document.firt_publication_date desc'],
    }
  );

  const responseNextPost = await prismic.query(
    Prismic.predicates.at('document.type', 'post'),
    {
      pageSize: 1,
      after: slug,
      orderings: ['document.firt_publication_date'],
    }
  );

  const previousPost = verifyNextPost(responsePreviousPost, slug);

  const nextPost = verifyNextPost(responseNextPost, slug);

  const [title, subtitle, banner, author, content] = response.data;

  const post: Post = {
    uid: response.uid,
    first_publication_date: response.first_publication_date,
    last_publication_date: response.last_publication_date,
    data: {
      title,
      subtitle,
      banner,
      author,
      content,
    },
  };

  return {
    props: {
      post,
      preview,
      nextPost,
      previousPost,
    },
    revalidate: 60 * 60, // 60 minutes
  };
};
