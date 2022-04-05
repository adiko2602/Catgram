import * as React from 'react'
import { Box, Avatar, Typography } from '@mui/material'

function AvatarCustom({ name }) {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection= "column">
            <Avatar>{name[0]}</Avatar>
            <Typography variant="small"  type="body2" color="text.secondary" style={{color: 'black', width: '80px', whiteSpace: 'nowrap',
             overflow: 'hidden', textOverflow: 'ellipsis', marginLeft: '20px', marginRight: '20px'}}>{name}</Typography>
        </Box>
    );
}

export default AvatarCustom;
