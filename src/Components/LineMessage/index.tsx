import EditIcon from "@/Components/Icon/Edit";
import Image from "next/image";

function FukidashiLeft({ className }: { className?: string }) {
  return (
    <svg
      id="fukidashi-left"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 37.23 30.18"
      className={`fill-white ${className}`}
    >
      <title>Fukidashi Left</title>
      <path d="M34.06,12.02C15.77,12.33,7.29,7.73,2.98,3.02,1.78,1.71.37-.19.06.02c-.71.48,4.76,12.37,14.57,22,3.83,3.76,6.96,5.84,10.69,7,2.39.74,7.05,2.19,9.71,0,3.1-2.55,3.06-9.64-.97-17Z" />
    </svg>
  );
}

function FukidashiRight({ className }: { className?: string }) {
  return (
    <svg
      id="fukidashi-right"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38.33 30.18"
      className={`fill-line-self ${className}`}
    >
      <title>FukidashiRight</title>
      <path d="M3.27,12.02c18.82.31,27.56-4.29,32-9,1.23-1.3,2.69-3.21,3-3,.73.48-4.9,12.37-15,22-3.95,3.76-7.17,5.84-11,7-2.46.74-7.25,2.19-10,0-3.19-2.55-3.15-9.64,1-17Z" />
    </svg>
  );
}

export function SelfMessage({
  text,
  timeString,
  isAlreadyRead = false,
}: { text: string; timeString: string; isAlreadyRead?: boolean }) {
  return (
    <div className={"flex justify-end items-end"}>
      <div className={"text-xs text-gray-600 mb-2"}>
        {isAlreadyRead && "既読"}
        <br />
        {timeString}
      </div>
      <div
        className={
          "bg-line-self inline-block px-4 p-2 m-2 max-w-60 text-wrap rounded-2xl relative"
        }
      >
        <p className={"text-black m-1 text-sm"}>{text}</p>
        <FukidashiRight className={"absolute -right-2 -top-1 size-4"} />
      </div>
    </div>
  );
}

export function Message({
  text,
  timeString,
}: { text: string; timeString: string }) {
  return (
    <div className={"flex justify-start items-end"}>
      <div
        className={
          "bg-white inline-block px-4 p-2 m-2 max-w-60 text-wrap rounded-2xl relative"
        }
      >
        <FukidashiLeft className={"absolute -left-2 -top-1 size-4"} />
        <p className={"text-black m-1 text-sm"}>{text}</p>
      </div>
      <div className={"text-xs text-gray-600 mb-2"}>{timeString}</div>
    </div>
  );
}

export function OutlinedMessage() {
  return (
    <div className={"flex justify-start items-end"}>
      <div
        className={
          "inline-block px-4 p-2 m-4 max-w-60 text-wrap rounded-2xl relative outline-dashed bg-blue-400 outline-white"
        }
      >
        <div className={"text-sm text-white w-24 flex justify-center"}>
          <EditIcon className={"fill-white"} />
        </div>
      </div>
    </div>
  );
}

export function OutlinedSelfMessage() {
  return (
    <div className={"flex justify-end items-end"}>
      <div
        className={
          "inline-block px-4 p-2 m-4 max-w-60 text-wrap rounded-2xl relative outline-dashed bg-blue-400 outline-line-self"
        }
      >
        <div className={"text-sm text-line-self flex justify-center w-24"}>
          <EditIcon className={"fill-line-self"} />
        </div>
      </div>
    </div>
  );
}
