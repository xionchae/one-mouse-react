import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import DiaryItem from "./DiaryItem";

const sortOptionList = [
  { value: "lastest", text: "최신순" },
  { value: "oldest", text: "오래된순" }
]

const filterOptionList = [
  { value: "all", text: "전체" },
  { value: "good", text: "좋은 감정만" },
  { value: "bad", text: "안좋은 감정만" }
]

const ControlMenu = ({value, onChange, optionList}) => {
  return (
    <select className="ControlMenu" value={value} onChange={(e)=> onChange(e.target.value)}>
      {optionList.map((item, idx) => (
        <option value={item.value} key={idx}>{item.text} </option>
      ))}
    </select>
  );
};

const DiaryList = ({diaryList}) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("lastest");
  const [filter, setFilter] = useState("all");

  const getProcessedDiaryList = () => {

    const filterCallback = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) >= 3;
      } else {
        return parseInt(item.emotion) < 3;
      }
    }

    const compare = (a, b) => {
      if (sortType === "lastest") {
        return parseInt(b.date) - parseInt(a.date); // 최신순 문자가 들어올 수도 있기 때문에 parseInt로 숫자로 변환
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    }

    const copyList = JSON.parse(JSON.stringify(diaryList)); // diaryList를 json으로 변환 후 다시 객체로 변환해서 복사

    const filteredList = filter === "all" ? copyList : copyList.filter((item) => filterCallback(item));

    const sortedList = filteredList.sort(compare); 
    return sortedList;    

  }

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList}/>
          <ControlMenu value={filter} onChange={setFilter} optionList={filterOptionList}/>
        </div>
        <div className="right_col">
        <MyButton type={"positive"} text={"새 일기쓰기"} onClick={()=> navigate("/new")}/>
        </div>
      </div>
      {getProcessedDiaryList().map((item) => (
        <DiaryItem key={item.id} {...item}/>
      ))}
      
    </div>
    
  );  
};

DiaryList.defaultProps = {
  diaryList : []
};

export default DiaryList;