import { useState } from "react";
import AnswersList from "./AnswersList";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState({
    color: "",
    spendTime: [],
    review: "",
    username: "",
    email: ""
  });

  
  const handleInputChange = (event) => {
    const name = event.name;
    const inputValue = event.value;
    const checked = event.checked;
    
    if (name === "color") {
      setAnswers({...answers, color: inputValue});
    } else if (name === "spend-time") {
      if (checked) {
        setAnswers({...answers, spendTime: [...answers.spendTime, inputValue]});
      } else {
        setAnswers({...answers, spendTime: answers.spendTime.filter((item) => item !== inputValue)});
      }
    } else if(name === "review") {
      setAnswers({...answers, review: inputValue});
    } else if (name === "username") {
      setAnswers({...answers, username: inputValue});
    } else if (name === "email") {  
      setAnswers({...answers, email: inputValue});
    }
  }

  const submitForm = (event) => {
    event.preventDefault();
    console.log(answers);
    event.target.reset();
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>

      </section>
      <section className="survey__form">
        <form className="form" onSubmit={submitForm}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
              <ul onChange={(e) => handleInputChange(e.target)}>
                <li>
                  <input id="color-one" type="radio" name="color" value="1" /><label
                    htmlFor="color-one"
                    >1</label
                  >
                </li>
                <li>
                  <input id="color-two" type="radio" name="color" value="2" /><label
                    htmlFor="color-two"
                    >2</label
                  >
                </li>
                <li>
                  <input id="color-three" type="radio" name="color" value="3" /><label
                    htmlFor="color-three"
                    >3</label
                  >
                </li>
                <li>
                  <input id="color-four" type="radio" name="color" value="4" /><label
                    htmlFor="color-four"
                    >4</label
                  >
                </li>
              </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
              <ul onChange={(e) => handleInputChange(e.target)}>
                <li>
                  <label
                    ><input
                      name="spend-time"
                      type="checkbox"
                      value="swimming"
                    />Swimming</label
                  >
                </li>
                <li>
                  <label
                    ><input name="spend-time" type="checkbox" value="bathing" />Bathing</label
                  >
                </li>
                <li>
                  <label
                    ><input
                      name="spend-time"
                      type="checkbox"
                      value="chatting"
                    />Chatting</label
                  >
                </li>
                <li>
                  <label
                    ><input name="spend-time" type="checkbox" value="noTime" />I don't like to
                    spend time with it</label
                  >
                </li>
              </ul>
          </div>
          <label
            >What else have you got to say about your rubber duck?<textarea
              name="review"
              cols="30"
              rows="10"
              onChange={(e) => handleInputChange(e.target)}
            ></textarea></label
          ><label
            >Put your name here (if you feel like it):<input
              type="text"
              name="username"
              onChange={(e) => handleInputChange(e.target)}/></label
          ><label
            >Leave us your email pretty please??<input
              type="email"
              name="email"
              onChange={(e) => handleInputChange(e.target)} /></label
          ><input className="form__submit" value="Submit Survey!" type="submit" />
        </form>   
      </section>
    </main>
  );
}

export default Survey;
