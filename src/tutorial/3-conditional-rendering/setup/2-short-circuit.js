import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value:{secondValue}</h1> */}

      {/* we can't use this method in react that will lead to error */}
      {/* {if(..){console.log('hello world)}} */}

      <h1>{text || "John doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {/* {text && <h1>Hello World</h1>}
      {!text && <h1>Hello World</h1>} */}
      {isError && <h1>Error..</h1>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
