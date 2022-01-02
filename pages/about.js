import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About | Helen Cho</title>
        <meta name="description" content="About Helen Cho." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <h1>Hello there. I&apos;m Helen.</h1>
        <p>
          I&apos;m a software engineer in Queens, New York. I&apos;m a
          literature major (Kafka and Dickinson are my specialty). I minored in
          art history (don&apos;t take me to a museum unless you want to spend
          an entire day there). When I&apos;m not obsessing over clean solutions
          or responsiveness, you can find me snowboarding in Colorado/Vermont,
          training my 9-month old Aussie, or chasing the next solar eclipse.
        </p>
      </div>
      <div>
        <h2>Skills</h2>
        <p>
          Javascript, Node, Python, Flask, gRPC, Next.js, React, Redux,
          Postgres, MySQL, CSS, Sass, Contentful
        </p>
      </div>
      <div>
        <h2>Interested? Get in touch.</h2>
        <p>GitHub, LinkedIn, Medium</p>
      </div>
    </>
  );
};

export default About;
