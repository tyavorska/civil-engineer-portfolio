import Head from 'next/head';

const Heads = () => {
  return (
    <Head>
      <meta property="og:url" content="https://civilengineer21.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Civil Engineering Solutions" />
      <meta
        property="og:description"
        content="We are a global, employee-owned consultancy specializing in civil engineering, infrastructure, and sustainable development."
      />
      <title>
        Civil Engineer21 | Infrastructure and Development Consultancy
      </title>
      <meta
        name="description"
        content="Our expertise spans structural design, urban development, transportation planning, water resources management, and sustainable infrastructure. We provide innovative and cost-effective solutions for civil engineering projects of all scales."
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="author" content="Hlib Pavlov, Civil Engineer" />
    </Head>
  );
};
export default Heads;
