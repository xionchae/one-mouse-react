import React , {useState, useEffect} from "react";

const UnmountTest = () => {
  
  useEffect(() => {
    console.log("Mount!");
    return () => {
      console.log("Unmount!");
    }
  }, []);

  return (
    <div>Mount/Unmount 테스트</div>
  )
}

const Lifecycle = () => {

  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{padding:20}}>
      <button onClick={toggle} style={{marginBottom:10}}>보이기/가리기</button>
      {isVisible && <UnmountTest />}
    </div>
  )
}

export default Lifecycle;