import { TextField } from '@mui/material';
import { useState } from 'react';
import { TFieldColor } from '../../../data/@types/TFieldColor';

interface IProps {
    onChange: ( e : any ) => TFieldColor;
}

const SearchBar = ( { onChange } : IProps ) => {

    const [color, setColor] = useState<TFieldColor>('primary');

    // "primary" | "error" | "secondary" | "info" | "success" | "warning" | undefined'

    return (
        <TextField
            color={color}
            InputLabelProps={{
                style:{
                    color: '#ccc',
                }
            }}
            sx={{ 
                input: { 
                    color: '#fff',
                }
            }}
            label="Search pokemón"
            variant='filled'
            onChange={ e => {
                const col = onChange(e);
                setColor(col);
            }}
        />
    )
}

export default SearchBar