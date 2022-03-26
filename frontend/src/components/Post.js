import * as React from 'react'
import { Link, Card, CardHeader, CardMedia, CardContent, Typography } from '@mui/material'

function Post({ link, avatar, title, date, image, description }) {
    return (
        <Card style={{ width: '600px', marginTop: '20px' }} elevation={5}>
            <CardHeader
                avatar={
                    <Link href={link} underline="none" style={{ color: 'black' }}>
                        {avatar}
                    </Link>
                    }
                title={title}
                subheader={date}
            />
            <CardMedia
                component="img"
                height="300"
                image={image}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Post;
