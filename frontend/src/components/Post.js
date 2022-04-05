import * as React from 'react'
import { Link, Card, CardHeader, CardMedia, CardContent, Typography } from '@mui/material'

function Post({ link, avatar, title, date, image, description }) {
    return (
        <Card style={{ width: '614px', marginTop: '20px' }} elevation={5}>
            <CardHeader
                avatar={
                    <Link href={link} underline="none" style={{ color: 'black' }}>
                        {avatar}
                    </Link>
                    }
                title={title}
            />
            <CardMedia
                component="img"
                height="" //500?
                image={image}
            />
            <CardContent>
            <Typography variant="body1" color="text.primary">
                {description}
            </Typography>
            <Typography variant="small" color="text.secondary">
                {date}
            </Typography>
            </CardContent>
        </Card>
    );
}

export default Post;
