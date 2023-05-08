import axios from "axios";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./Advice.scss";

import DieIcon from "../../assets/images/icon-dice.svg";
import DividerDesktop from "../../assets/images/pattern-divider-desktop.svg";
import DividerMobile from "../../assets/images/pattern-divider-mobile.svg";

export const Advice = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [advice, setAdvice] = useState();
  const [adviceNumber, setAdviceNumber] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip.advice);
        setAdviceNumber(response.data.slip.id);
      })
      .finally(() => setIsLoading(false));
  }, []);

  function getAdvice() {
    setIsLoading(true);
    axios.get("https://api.adviceslip.com/advice").then((response) => {
      setAdvice(response.data.slip.advice);
      setAdviceNumber(response.data.slip.id);
      setIsLoading(false);
    });
  }

  if (isLoading) {
    return (
      <div className="advice-wrapper loader-wrapper">
        <ClipLoader
          loading={isLoading}
          color={"hsl(150, 100%, 66%)"}
          size={100}
          aria-label="Loading Spinner"
        />
      </div>
    );
  }

  return (
    <div className="advice-wrapper">
      <h1 className="advice-title">ADVICE #{adviceNumber}</h1>
      <p className="advice-quote">"{advice}"</p>
      <div className="advice-quote-ornament-wrapper">
        <img
          src={DividerDesktop}
          alt="Ornament indicating text above is a quote"
          id="pattern-divider-desktop"
        />
        <img
          src={DividerMobile}
          alt="Ornament indicating text above is a quote"
          id="pattern-divider-mobile"
        />
      </div>

      <button className="advice-die-button" type="submit" onClick={getAdvice}>
        <img src={DieIcon} alt="Black die" />
      </button>
    </div>
  );
};
