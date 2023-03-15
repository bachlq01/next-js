import { useDispatch, useSelector } from "react-redux";
import { increment, selectCount } from "@/stores/reducers/counter/counter";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const dispath = useDispatch();
  const data = useSelector(selectCount);
  useEffect(() => {
    return () => {
      dispath(increment());
    };
  }, [dispath]);
  return (
    <>
      <div>{data}</div>
      <button onClick={() => dispath(increment())}>+</button>
      <Link href="/demo/demo">link</Link>
    </>
  );
}
