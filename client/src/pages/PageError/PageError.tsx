import { Page } from "../../components";
import "./PageError.style.scss";

function PageError() {
  return (
    <Page>
      <div className="404-page">
        <center>
          <h1>404:NOT FOUND</h1>
          <img src="error.gif"></img>
        </center>
      </div>
    </Page>
  );
}

export default PageError;
