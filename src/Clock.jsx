import { useEffect, useState } from "react";

function Clock({ color }) {
  const [time, setTime] = useState(0);

useEffect(()=>{
    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000);
},[])

  return (
    <h1 style={{ color }}>
      {time}
    </h1>
  );
}

export default Clock;
