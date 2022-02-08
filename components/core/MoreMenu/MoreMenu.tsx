import React, { useState, MouseEvent } from 'react';
import { Menu, MenuItem, IconButton } from "@mui/material";
import { MoreVertOutlined as EditIcon } from "@mui/icons-material";

import { deleteArticle } from '@/services/articles';
import { EditArticleModal } from '@/components/Article/EditArticleModal';
import ArticleInterface from '@/classes/ArticleInterface';

interface Props {
    article: ArticleInterface,
    refetch: any,
}

export const MoreMenu = ({ article, refetch }: Props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [modalState, setModalState] = useState<boolean>(false);
    const openModal = () => setModalState(true);
    const closeModal = () => {
        refetch();
        setAnchorEl(null)
        setModalState(false);
    }

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = async (isDelete) => {
        isDelete ? await deleteArticle(article.id) : openModal();
        refetch();
        setAnchorEl(null);
    };

    return (
        <div>
            <EditArticleModal open={modalState} closeModal={closeModal} article={article} />
            <IconButton
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <EditIcon sx={{ fontSize: "30px", color: '#302E53' }} />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => handleClose(true)}>Deletar</MenuItem>
                <MenuItem onClick={() => handleClose(false)}>Editar</MenuItem>
            </Menu>
        </div>
    );
}