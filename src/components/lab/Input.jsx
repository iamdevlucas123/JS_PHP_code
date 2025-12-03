import { useState } from "react"
import CodeMirror from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { php } from "@codemirror/lang-php"
import { oneDark } from "@codemirror/theme-one-dark"

export default function CodeEditor() {
  const [code, setCode] = useState("// escreva seu codigo aqui")

  return (
    <div className="flex-1 h-[80vh] rounded-2xl border border-slate-200 bg-slate-900/95 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">
        <h2 className="text-sm font-semibold text-white">Editor</h2>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-200">
          Code
        </span>
      </div>
      <CodeMirror
        value={code}
        height="calc(80vh - 60px)"
        width="100%"
        extensions={[javascript({ jsx: true }), php()]}
        theme={oneDark}
        onChange={(value) => setCode(value)}
      />
    </div>
  )
}
