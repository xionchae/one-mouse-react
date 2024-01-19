import { useContext } from "react";
import DiaryItem from "./DiaryItem";
import { DiarystateContext } from "./App";

const DiaryList = (
  // {diaryList, onRemove, onEdit}
  ) => {

  const diaryList = useContext(DiarystateContext);
  
  return (
    <div className="DiaryList">
      <h2>일기 목록</h2>
      <h4>{diaryList.length}의 목록이 있습니다.</h4>      
      <ul>
        {diaryList.map((diary) => (
          <DiaryItem key={diary.id} 
          {...diary} 
          // onRemove={onRemove} onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  )
}

DiaryList.defaultProps = {
  diaryList: [],
}

export default DiaryList;