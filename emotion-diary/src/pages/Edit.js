import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  const [originData, setOriginData] = useState({});
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const { id } = useParams(); //useParams 는 url의 파라미터를 가져올 수 있음, useSearchParams는 url의 쿼리를 가져올 수 있음

  // useEffect는 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook이다.
  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find((item) => item.id === parseInt(id));

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate("/", { replace : true });
      }
    }
  }, [id, diaryList])

  // {originData && <DiaryEditor data={originData} />} originData가 있을 때만 DiaryEditor를 렌더링한다는 뜻
  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />} 
    </div>
  ); 
}

export default Edit;