import type { NextPage } from 'next'
import Sidebar from '@components/Sidebar'
import ArkColumn from '@components/ArkColumn'

const Home: NextPage = () => {
  return (
    <>
      <ArkColumn />
      <Sidebar />
    </>
  )
}

export default Home
