"use client";
import PageRoot from "@/Components/PageRoot";
import Switch from "@/Components/Switch";
import { type FormEvent, useState } from "react";

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

function SelfMessage({
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

function Message({ text, timeString }: { text: string; timeString: string }) {
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

export default function Page() {
  const conv1 = {
    text: "相手のメッセージはこんな感じです。",
    timeString: "19:29",
    isSelfMessage: false,
  } as Conversation;
  const conv2 = {
    text: "いい感じに書くことができる。長文でも可能だよ。",
    timeString: "19:30",
    isSelfMessage: true,
    isAlreadyRead: true,
  } as Conversation;
  const conv3 = {
    text: "ここは既読にならない。",
    timeString: "19:31",
    isSelfMessage: true,
    isAlreadyRead: false,
  };
  const [conversations, setConversations] = useState<Array<Conversation>>([
    conv1,
    conv2,
    conv3,
  ]);
  const HandleAddConversation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      "conv-text": { value: string };
      "self-talk": { checked: boolean };
    };
    const convText = target["conv-text"].value;
    const isSelf = target["self-talk"].checked;
    const newConversation = {
      text: convText,
      timeString: "19:39",
      isSelfMessage: isSelf,
      isAlreadyRead: true,
    } as Conversation;
    setConversations([...conversations, newConversation]);
  };
  return (
    <PageRoot className={"bg-blue-400"}>
      <div className={"border-2 border-black max-w-96 w-full flex flex-col"}>
        {conversations.map((value, index) => (
          <div key={index.toString()}>
            {value.isSelfMessage ? (
              <SelfMessage
                key={index.toString()}
                text={value.text}
                timeString={value.timeString}
                isAlreadyRead={value.isAlreadyRead ?? false}
              />
            ) : (
              <Message
                key={index.toString()}
                text={value.text}
                timeString={value.timeString}
              />
            )}
          </div>
        ))}
      </div>
      <form
        className={"flex flex-col items-center py-12 m-12 bg-white w-full"}
        onSubmit={HandleAddConversation}
      >
        <label htmlFor={"conv-text"} className={"py-2"}>
          会話内容をここに記入
        </label>
        <textarea
          id={"conv-text"}
          placeholder={"ここに会話内容を記入"}
          rows={6}
          className={"border border-gray-300 p-2 w-full max-w-72 mb-12"}
        />
        <Switch label={"自分の発言にする"} id={"self-talk"} />
        <div className={"flex justify-center"}>
          <button
            type={"submit"}
            className={
              "bg-line-self rounded-2xl mx-2 my-4 py-2 px-6 w-full max-w-32"
            }
          >
            追加
          </button>
        </div>
      </form>
    </PageRoot>
  );
}
