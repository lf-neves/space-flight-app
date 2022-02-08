import React from "react";
import { GetStaticPaths, InferGetStaticPropsType, NextPage } from "next";
import { Container, Box, Typography, Grid, AppBar, Toolbar, Button } from "@material-ui/core";
import { GetStaticProps } from "next";
import { getArticle, getArticles } from "../../services/articles";
import ArticleInterface from '../../classes/ArticleInterface'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';


const ArticlePageNav: React.FC = () => {
    return (
        <Grid container>
            <AppBar position="static" style={{ backgroundColor: '#302E53' }}>
                <div style={{ maxWidth: '1000px', alignSelf: 'center', width: '100%' }}>
                    <Toolbar>
                        <Button href="/home" style={{ color: 'white', justifyContent: 'start', display: 'flex' }}>
                            <RocketLaunchIcon sx={{ marginRight: 1, color: 'white', fontSize: '30px' }} />
                            <Typography style={{ fontFamily: 'Roboto', fontSize: '25px' }}> Space Flight </Typography>
                        </Button>
                    </Toolbar>
                </div>
            </AppBar>
        </Grid>
    );
}


const Article: NextPage = ({ article }: InferGetStaticPropsType<typeof getStaticProps>) => (
    <div>
        <ArticlePageNav />
        <Container maxWidth="md">
            <Box mt={4} pt={4} px={10} textAlign='center'>
                <Typography variant="h3">{article.title}</Typography>
            </Box>
            <Box mt={5} px={10} maxWidth="md" textAlign='center'>
                <Typography variant='subtitle'>
                    {article.summary}
                </Typography>
            </Box>
            <Box pt={5}>
                <Typography variant='body1'>
                    {article.summary}
                </Typography>
            </Box>
        </Container>

    </div>
)

export default Article;

export const getStaticPaths: GetStaticPaths = async () => {
    const articles = await getArticles();

    const paths = articles.map((article: ArticleInterface) => ({
        params: { id: article.id.toString() },
    }))

    return { paths, fallback: false }
}


export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context;
    const [article] = await getArticle(params.id);

    return {
        props: {
            article,
        }
    }
}