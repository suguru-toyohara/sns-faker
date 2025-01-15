"use client";
import EditIcon from "@/Components/Icon/Edit";
import { OutlinedMessage, OutlinedSelfMessage } from "@/Components/LineMessage";
import {
  LineMessageWithDelete,
  LineMessageWithDeleteSelf,
} from "@/Components/LineMessageWithDelete";
import PageRoot from "@/Components/PageRoot";
import Switch from "@/Components/Switch";
import type Conversation from "@/types/conversation";
import Image from "next/image";
import { type FormEvent, useState } from "react";

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
  const [editable, setEditable] = useState<boolean>(false);
  const handleChangeEditable = () => {
    setEditable(!editable);
  };
  return (
    <PageRoot className={"bg-blue-400"}>
      <div className={"w-full flex justify-end pr-8 my-2"}>
        <Switch
          labelComponent={<EditIcon className={"fill-white"} />}
          id={"edit-mode"}
          onClickAction={handleChangeEditable}
        />
      </div>
      <div className={"border-2 border-black max-w-96 w-full flex flex-col"}>
        {conversations.map((value, index) => (
          <div key={index.toString()}>
            {value.isSelfMessage ? (
              <LineMessageWithDeleteSelf
                key={index.toString()}
                editable={editable}
                conversation={value}
              />
            ) : (
              <LineMessageWithDelete
                key={index.toString()}
                editable={editable}
                conversation={value}
              />
            )}
          </div>
        ))}
        {editable && (
          <div className={"flex justify-between"}>
            <OutlinedMessage />
            <OutlinedSelfMessage />
          </div>
        )}
      </div>
    </PageRoot>
  );
}
