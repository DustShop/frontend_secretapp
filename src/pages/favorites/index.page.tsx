"use client";
import Container from "@/components/global/container";
import React from "react";
import Wrapper from "@/components/global/wrapper";
import Layout from "@/layout";


const FavoritesPage = () => {
  return (
    <Layout>
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="text-black">
            <h1 className="text-black">Favorites Page</h1>
            <p className="text-black">Here are your favorite items.</p>
          </div>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default FavoritesPage;
