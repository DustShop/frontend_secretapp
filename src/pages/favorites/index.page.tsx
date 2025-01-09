"use client";
import Container from "@/components/global/container";
import React from "react";
import Wrapper from "@/components/global/wrapper";
import Layout from "@/layout";
import { Button } from "../../components/ui/button";

const FavoritesPage = () => {

  const isAuthenticated = false;

  return (
    <Layout isAuthenticated={isAuthenticated}>
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div>
            <h1 className="text-black text-3xl font-bold pb-10">Favorites</h1>
            {isAuthenticated ? (
              <p className="text-black">
                Log in to your account to view your favorites.
              </p>
            ) : (
              <div className="flex flex-col items-start gap-4">
                <p className="font-semibold text-black text-xl">
                  Log in to your account to view your favorites.
                </p>
                <p className="text-black text-base">
                  You can create, view or edit favorites lists after logging in.
                </p>
                <Button variant="secondary" size="lg">
                  Login
                </Button>
              </div>
            )}
          </div>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default FavoritesPage;
