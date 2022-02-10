import * as React from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { Box } from '@material-ui/core';
import { changeSort } from '@/store/search';

const options = [
    { value: 'newest', label: 'Mais recentes' },
    { value: 'older', label: 'Mais antigos' },
]

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: 'transparent',
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: '#302E53',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'white',
    }),
}

export const SortOption: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    return (
        <Box>
            <Select
                defaultValue={options[0]}
                styles={customStyles}
                options={options}
                onChange={(selectedOption) => dispatch(changeSort(selectedOption.value))}
            />
        </Box>
    );
}