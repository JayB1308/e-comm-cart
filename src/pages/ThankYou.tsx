import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
const ThankYou = () => {
  let navigate = useNavigate();

  return (
    <div className="thank-you-container">
      <Confetti height={window.innerHeight} width={window.innerWidth} />
      <h1>Thank You !</h1>
      <button
        className="home-button"
        onClick={() => {
          navigate("/");
        }}
      >
        BACK TO HOME
      </button>
    </div>
  );
};

export default ThankYou;
