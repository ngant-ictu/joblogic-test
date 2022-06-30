import type { NextPage } from 'next'
import EmployeeDetail from '../components/EmployeeDetail';
import Layout from '../components/layout';


const Home: NextPage = () => {
  
  return (
    <Layout>
      <EmployeeDetail></EmployeeDetail>
    </Layout>
  )
}
export default Home
