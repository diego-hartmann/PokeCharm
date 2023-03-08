import { TextField } from '@mui/material';
import { useState } from 'react';
import { TFieldColor } from '../../../data/@types/TFieldColor';
import { IUpdateFilterList } from '../../../data/@types/IUpdateFilterList';

interface IProps {
    onChange: ( e : any ) => IUpdateFilterList;
}

const SearchBar = ( { onChange } : IProps ) => {

    const [filterStatus, setFilterStatus] = useState<IUpdateFilterList>( { color: 'primary', label: 'Search pokemón...' } );


    return (
        <TextField
            color={filterStatus.color}
            InputLabelProps={{style:{color: '#ccc'}}}
            sx={{input: {color:'#fff'}}}
            label={filterStatus.label}
            variant='filled'
            onChange={ e => {
                const status = onChange(e);
                setFilterStatus(status);
            }}
        />
    )
}

export default SearchBar