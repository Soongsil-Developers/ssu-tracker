import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "../typography";
import { Grass } from "@soongsil/streak";
import { DataProps } from "../../types/data";

interface Props {
  data: DataProps[]
}

const Streak = ({data} : Props) => {
  const navigate = useNavigate();
  console.log(data)

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
        <Typography as="h1" size="title_pc" weight="extraBold">
          지원 예정
        </Typography>
      ) : (
        <Typography as="h1" size="title_pc" weight="extraBold">
          잔디밭 자리
          <Grass data={data} ></Grass>
        </Typography>
      )}
    </div>
  );
};

export default Streak;
