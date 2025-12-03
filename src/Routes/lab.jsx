import CodeEditor from "../components/lab/Input"
import Summary from "../components/lab/summary"

export default function Lab() {
  return (
    <div className="flex">
        <Summary/>
        <CodeEditor/>
    </div>
  )
}
