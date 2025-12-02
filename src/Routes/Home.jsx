import TopBar from "../components/topbar"
import MainText from "../components/mainText"
import Description from "../components/description"
import DemonstrateVideo from "../components/demonstrateVideo"
import Profile from "../components/profile"

export default function Home() {
  return (
    <>
      <TopBar />
      <MainText />
      <DemonstrateVideo />
      <Description />
      <Profile/>
    </>
  )
}
