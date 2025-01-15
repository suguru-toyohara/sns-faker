import { Message, SelfMessage } from "@/Components/LineMessage";
import type Conversation from "@/types/conversation";

function DeleteButton() {
  return (
    <button
      type={"button"}
      className={
        "bg-red-600 rounded-2xl shadow shadow-gray-900 text-sm text-white w-8 h-8"
      }
    >
      ー
    </button>
  );
}

export function LineMessageWithDeleteSelf({
  editable = false,
  conversation,
}: { editable?: boolean; conversation: Conversation }) {
  return (
    <div className={"flex gap-4 justify-end items-center"}>
      {editable && <DeleteButton />}
      <SelfMessage
        text={conversation.text}
        timeString={conversation.timeString}
        isAlreadyRead={conversation.isAlreadyRead}
      />
    </div>
  );
}

export function LineMessageWithDelete({
  editable = false,
  conversation,
}: { editable?: boolean; conversation: Conversation }) {
  return (
    <div className={"flex gap-4 justify-start items-center"}>
      <Message text={conversation.text} timeString={conversation.timeString} />
      {editable && <DeleteButton />}
    </div>
  );
}
