import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "~/components/typography";

const Streak = () => {
  const navigate = useNavigate();

  const [option, setOption] = useState(
    new URL(window.location.href).searchParams.get("tab")
  );

  const changeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
    navigate(`?tab=${e.target.value}`);
  };

  return (
    <div style={{ border: "1px solid red" }}>
      <form>
        <select onChange={changeOption}>
          <option value="grass"> 잔디밭 </option>
          <option value="graph"> 그래프 </option>
        </select>
      </form>

      {option === "graph" ? (
        <Typography as="h1" size="eb3" weight="extraBold">
          그래프 자리
        </Typography>
      ) : (
        <Typography as="h1" size="eb3" weight="extraBold">
          잔디밭 자리
        </Typography>
      )}
    </div>
  );
};

export default Streak;
