'use client'
import Container from '../components/global/container'
import Wrapper from '../components/global/wrapper'
import HomeCards from '../components/HomeCards'

import Layout from '@/layout'

export default function Home() {
  return (
    <Layout>
      <Wrapper className='flex flex-col items-center justify-center py-12 relative'>
        <Container>
          <div className='sm:pt-4 lg:pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'>
            <HomeCards />
          </div>
        </Container>
      </Wrapper>
    </Layout>
  )
}
