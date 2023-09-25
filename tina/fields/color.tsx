import * as React from "react";
import { wrapFieldsWithMeta } from "tinacms";

export const colorOptions = [
  "wvu-gold",
  "wvu-blue",
  "wvu-accent--blue-dark",
  "wvu-accent--blue-light",
  "wvu-accent--blue",
  "wvu-accent--yellow",
  "wvu-accent--old-gold",
  "wvu-accent--sunset",
  "wvu-neutral--off-white",
  "wvu-neutral--warm-gray-light",
  "wvu-neutral--warm-gray-dark",
  "wvu-neutral--warm-gray-medium",
  "wvu-neutral--cream",
  "wvu-neutral--tan",
  "black",
];

export const ColorPickerInput = wrapFieldsWithMeta(({ input }) => {
  const inputClasses = {
    "wvu-gold": "bg-wvu-gold",
    "wvu-blue": "bg-wvu-blue",
    "wvu-accent--blue-dark": "bg-wvu-accent--blue-dark",
    "wvu-accent--blue-light": "bg-wvu-accent--blue-light",
    "wvu-accent--blue": "bg-wvu-accent--blue",
    "wvu-accent--yellow": "bg-wvu-accent--yellow",
    "wvu-accent--old-gold": "bg-wvu-accent--old-gold",
    "wvu-accent--sunset": "bg-wvu-accent--sunset",
    "wvu-neutral--off-white": "bg-wvu-neutral--off-white",
    "wvu-neutral--warm-gray-light": "bg-wvu-neutral--warm-gray-light",
    "wvu-neutral--warm-gray-dark": "bg-wvu-neutral--warm-gray-dark",
    "wvu-neutral--warm-gray-medium": "bg-wvu-neutral--warm-gray-medium",
    "wvu-neutral--cream": "bg-wvu-neutral--cream",
    "wvu-neutral--tan": "bg-wvu-neutral--tan",
    black: "bg-black",
  };

  return (
    <>
      <input type="text" id={input.name} className="hidden" {...input} />
      <div className="flex gap-2 flex-wrap">
        {colorOptions.map((color) => {
          return (
            <button
              className={`w-9 h-9 rounded-full shadow border ${
                inputClasses[color]
              } ${
                input.value === color
                  ? "ring-[3px] ring-offset-2 ring-blue-400"
                  : ""
              }`}
              onClick={() => {
                input.onChange(color);
              }}
            ></button>
          );
        })}
      </div>
    </>
  );
});
