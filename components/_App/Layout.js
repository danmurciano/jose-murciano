import Head from "next/head";
import { Container } from "react-bootstrap";
import Header2 from "./Header2";

function Layout({ children }) {

  return (
    <>
      <Head>
        <title>Jose Murciano</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div class="wrapper">
        <Header2 />
        <Container fluid class="page">
          {children}
        </Container>
      </div>
    </>
  );
}

export default Layout;
