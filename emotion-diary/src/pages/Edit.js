import { useSearchParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  //console.log(`id : ${id}`);

  const navigate = useNavigate();

  const mode = searchParams.get('mode');
  //console.log(`mode : ${mode}`);

  return (
    <div>
      <h1>Edit.js</h1>
      <p>이곳은 Edit 입니다.</p>
      <button onClick={() => {setSearchParams({who : "xion"})}}>바꾸기 </button>
      <button onClick={() => {navigate("/home")}}>홈으로 가기</button>
      <button onClick={() => {navigate(-1)}}>뒤로 가기</button>
    </div>
  );
}

export default Edit;