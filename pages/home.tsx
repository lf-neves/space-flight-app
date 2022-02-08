import React from "react";
import { NextPage } from "next";
import { Container } from "@mui/material";
import { ArticlesList } from "@/components/Article";
import { Header, Nav } from "@/components/core";
import { QueryClient, QueryClientProvider } from "react-query";

import { Provider } from "react-redux";
import { store } from "@/store/store";

const Home: NextPage = () => {

    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <Provider store={store}>
                <div>
                    <Nav />
                    <Container maxWidth="md" sx={{ justifyContent: 'center' }}>
                        <Header />
                        <ArticlesList />
                    </Container>
                </div>
            </Provider>

        </QueryClientProvider>

    );
}

export default Home;