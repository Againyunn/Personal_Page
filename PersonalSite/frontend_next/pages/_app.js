// import "../styles/globals.css";
import { wrapper } from "@/store";

// css reset
import "@/styles/common/reset.css";

// header
import Header from "@/components/header/Header";

// multiple layout set
const headers = {
  H1: Header,
};

function MyApp({ Component, pageProps }) {
  // header
  let HeaderLayout = headers[Component.header] || (() => <></>);
  console.log("HeaderLayout", HeaderLayout);
  console.log("Component.layout", Component.layout);

  return (
    <div>
      {/* {!HeaderLayout ? <></> : <HeaderLayout />} */}
      <HeaderLayout />
      <Component {...pageProps} />
    </div>
  );
}

export default wrapper.withRedux(MyApp);
