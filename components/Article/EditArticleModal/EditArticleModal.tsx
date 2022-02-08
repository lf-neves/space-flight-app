import React from 'react';
import { Box, Button, Typography, Modal, TextField } from '@mui/material'
import { useForm } from 'react-hook-form';
import { editArticle } from '@/services/articles';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

export const EditArticleModal = ({ open, closeModal, article }) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        let editedArticle = article;
        editedArticle.title = data.title;
        editedArticle.summary = data.summary;
        await editArticle(editedArticle);
        closeModal();
    };

    return (

        <Modal
            open={open}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <Box mt={5} px={10}>
                        <Typography variant="h4">Editar artigo</Typography>
                        <Box mt={4}>
                            <TextField {...register("title")} fullWidth defaultValue={article.title} variant="outlined" />
                        </Box>
                        <Box mt={4}>
                            <TextField
                                {...register("summary")}
                                multiline={true}
                                minRows={10}
                                defaultValue={article.summary}
                                fullWidth
                            />
                        </Box>
                    </Box>
                    <Box mt={4} px={10} textAlign="end">
                        <Button type="submit" variant="contained" >Enviar</Button>
                    </Box>
                </form >
            </Box>
        </Modal >
    );
}

