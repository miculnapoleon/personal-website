import "../styles/globals.css";
import LayoutV1 from "../components/layouts/LayoutV1";

const MyApp = ({ Component, pageProps }) => {
  return (
    <LayoutV1>
      <Component {...pageProps} />
    </LayoutV1>
  );
}

export default MyApp;
