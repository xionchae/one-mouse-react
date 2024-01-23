import React, { useContext, useEffect, useState } from 'react';
import MyHeader from './../components/MyHeader';
import MyButton from './../components/MyButton';
import { DiaryStateContext } from './../App';
import DiaryList from './../components/DiaryList';

const Home = () => {

  const diaryList = useContext(DiaryStateContext);
  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {

    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(), 
        curDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        curDate.getFullYear(), 
        curDate.getMonth() + 1,
        0
      ).getTime();

      setData(
        diaryList.filter((item) => item.date >= firstDay && item.date <= lastDay)
      );
    }
  }, [diaryList, curDate]);

  useEffect(() => {console.log(data)}, [data]);

  const increateMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  }
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  }
  return (
    <div>
      <MyHeader 
        head_text={headText} 
        right_child={<MyButton text=">" onClick={() => {increateMonth()}}/>}
        left_child={<MyButton text="<" onClick={() => {decreaseMonth()}}/>}
      />
      <DiaryList diaryList={data}/>
    </div>
  );
}

export default Home;