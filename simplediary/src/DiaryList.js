import DiaryItem from "./DiaryItem";

const DiaryList = ({diaryList}) => {
  
  return (
    <div className="DiaryList">
      <h2>일기 목록</h2>
      <h4>{diaryList.length}의 목록이 있습니다.</h4>      
      <ul>
        {diaryList.map((diary) => (
          <DiaryItem key={diary.id} {...diary} />
        ))}
      </ul>
    </div>
  )
}

DiaryList.defaultProps = {
  diaryList: [],
}

export default DiaryList;