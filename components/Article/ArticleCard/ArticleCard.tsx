import React from "react";
import Link from 'next/link';
import { Grid, Typography, Button } from "@mui/material";
import ArticleInterface from '@/classes/ArticleInterface';
import { MoreMenu } from '@/components/core'

interface Props {
    article: ArticleInterface,
    index: number,
    refetch: any,
}

export const ArticleCard: React.FunctionComponent<Props> = ({ article, index, refetch }) => {

    const renderImage = () => (
        <Grid item md={5}>
            <img
                src={article.imageUrl}
                alt={article.title}
                loading="lazy"
                width="100%"
                height="260px"
                style={{ borderRadius: '7px' }}
            />
        </Grid>
    );

    const renderText = () => (
        <Grid item md={6} sx={{ textAlign: 'left' }}>
            <Grid container>
                <Grid item sm={11}>
                    <Typography data-test='cardTitle' sx={{ fontWeight: 550, fontFamily: 'Roboto', color: '#302E53' }} gutterBottom variant="h5" component="div">
                        {article.title}
                    </Typography>
                    <Typography data-test='cardSummary' sx={{ fontFamily: 'Roboto' }} variant="body1" color="text.secondary">
                        {article.summary}
                    </Typography>
                    <Link href={`/article/${article.id}`}>
                        <Button data-test='cardButton' sx={{ backgroundColor: '#1E2022', marginTop: 3 }} variant="contained">Ver mais</Button>
                    </Link>
                </Grid>
                <Grid item sm={1} >
                    <MoreMenu refetch={refetch} article={article} />
                </Grid>
            </Grid>
        </Grid>
    );

    return (
        <Grid container spacing={4} sx={{ marginTop: 4 }}>
            {(index % 2 === 0) ?
                <><>{renderImage()}</><>{renderText()}</></>
                :
                <><>{renderText()}</><>{renderImage()}</></>
            }
        </Grid>
    );
}
