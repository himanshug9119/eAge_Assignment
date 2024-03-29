import { Link } from "react-router-dom";

const Demo = () => {
  return (
    <>
      <div className="takeagetextbox">
        <div>
          What are you waiting for?
          <br />
          Start your free demo.
          <br />
          No obligation.
        </div>
      </div>
      <div className="freetextbox">
        <Link href="/register">Start A FREE DEMO</Link>
      </div>
    </>
  );
};

export default Demo;
