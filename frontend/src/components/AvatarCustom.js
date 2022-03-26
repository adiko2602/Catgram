import * as React from 'react'
import { Box, Avatar, Typography } from '@mui/material'

function AvatarCustom({ name }) {
    return (
        <Box display="flex" justifyContent="flex-start" alignItems="center">
            <Avatar>{name[0]}</Avatar>
            <Typography type="body2" color="text.secondary" style={{ marginLeft: '5px', marginRight: '5px' }}>{name}</Typography>
        </Box>
    );
}

export default AvatarCustom;
