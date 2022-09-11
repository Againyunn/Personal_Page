import Head from "next/head";
import MainPage from "@/pages/MainPage";

function Home() {
  return (
    <div>
      <Head>
        <title>{`${`Againyunn's Page`}`}</title>
        <meta
          name="description"
          content="This is Frontend developer Jaeyun Jung's Personal page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainPage />
    </div>
  );
}

// layout set
Home.header = "H1";
export default Home;
