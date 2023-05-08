import axios from "axios";
import { useEffect, useState } from "react";
import "./Advice.scss";

import DieIcon from "../../assets/images/icon-dice.svg";
import DividerDesktop from "../../assets/images/pattern-divider-desktop.svg";
import DividerMobile from "../../assets/images/pattern-divider-mobile.svg";

export const Advice = () => {
  const [advice, setAdvice] = useState();
  const [adviceNumber, setAdviceNumber] = useState();

  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice").then((response) => {
      setAdvice(response.data.slip.advice);
      setAdviceNumber(response.data.slip.id);
    });
  }, []);

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

      <button className="advice-die-button" type="submit">
        <img src={DieIcon} alt="Black die" />
      </button>
    </div>
  );
};
