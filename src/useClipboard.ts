import { useState, useCallback } from "react";

export function useClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    (text: string) => {
      if (!navigator?.clipboard) {
        console.error("Clipboard API is not supported");
        return;
      }

      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, timeout);
      });
    },
    [timeout],
  );

  return { copied, copy };
}
