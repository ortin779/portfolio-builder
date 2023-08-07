import { JSX as LocalJSX } from "message-me/dist/types";

declare global {
  namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {
      "message-me": LocalJSX.MessageMe & React.HTMLAttributes<HTMLElement>;
    }
  }
}
