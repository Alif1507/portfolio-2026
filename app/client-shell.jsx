"use client";

import ClickSpark from "../src/components/assets/ClickSpark";

export default function ClientShell({ children }) {
  return (
    <ClickSpark sparkColor="#ffffff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      {children}
    </ClickSpark>
  );
}
