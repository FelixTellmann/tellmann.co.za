import { FC, useState } from "react";

const Counter: FC = () => {
  const [number, setNumber] = useState<number>(0);

  return (
    <div>
      <p>Your number is {number}</p>
      <button style={{ marginRight: "20px" }} onClick={() => setNumber(number + 1)}>
        Increase
      </button>
      <button onClick={() => setNumber(number - 1)}>Decrease</button>
    </div>
  );
};

export default Counter;
