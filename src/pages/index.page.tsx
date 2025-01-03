'use client'
import Layout from "@/layout";
import Wrapper from "../components/global/wrapper";
import Container from "../components/global/container";
import Main from "../components/global/Main";

export default function Home() {
  return (
    <Layout>
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div>
            <Main />
          </div>
        </Container>
      </Wrapper>
    </Layout>
  );
}
