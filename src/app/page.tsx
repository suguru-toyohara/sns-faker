import Switch from "@/Components/Switch";
import Link from "next/link";

export default function Home() {
  return (
    <div className={"my-16"}>
      <h1>Hello,World!</h1>
      <Link href={"/LINE"}>
        <h2>ここからLINE</h2>
      </Link>
      <Switch label={"ここをチェック"} />
    </div>
  );
}
