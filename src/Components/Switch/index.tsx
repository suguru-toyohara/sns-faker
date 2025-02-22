import type React from "react";
export default function Switch({
  labelComponent,
  id,
  onClickAction = () => {},
}: {
  labelComponent: React.ReactNode;
  id: string;
  onClickAction?: () => void;
}) {
  return (
    <div className={"relative flex"}>
      <input
        type="checkbox"
        id={id}
        name={id}
        defaultChecked={false}
        onClick={onClickAction}
        className={"hidden peer"}
      />
      <label
        htmlFor={id}
        className={[
          "cursor-pointer",
          "ml-12",
          "before:bg-black",
          "before:border",
          "before:border-black",
          "before:rounded-2xl",
          "before:w-10",
          "before:h-6",
          "before:absolute",
          "before:left-0",
          "before:peer-checked:bg-line-self",
          "before:peer-checked:border-line-self",
          "before:transition-all",
          "before:ease-out",
          "before:duration-100",
          "after:w-6",
          "after:h-6",
          "after:rounded-2xl",
          "after:bg-white",
          "after:border",
          "after:border-black",
          "after:absolute",
          "after:left-0",
          "after:-translate-y-1/2",
          "after:top-1/2",
          "after:peer-checked:left-4",
          "after:peer-checked:border-line-self",
          "after:transition-all",
          "after:duration-200",
          "after:ease-out",
        ].join(" ")}
      >
        {labelComponent}
      </label>
    </div>
  );
}
