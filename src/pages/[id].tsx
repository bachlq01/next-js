import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Detail = () => {
  const { query } = useRouter();

  useEffect(()=>{
    console.log("we say ok here");
    
  },[])

  return <div>{query?.id}</div>;
};

export default Detail;
