import React, { Component } from 'react'
import { Link, Card, CardHeader, CardMedia, CardContent, Typography, IconButton, Button } from '@mui/material'
import ButtonCustom from './ButtonCustom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import postService from '../services/post-service';


export default class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.postId)
        return (
            <Card style={{ width: '650px', marginTop: '20px' }} elevation={5}>
                <CardHeader
                    avatar={this.props.avatar}
                    title={this.props.title}
                />
                <CardMedia
                    component="img"
                    height="500"
                    image={this.props.picture}
                />
                <CardContent>
                <Typography variant="subtitle2" color="text.primary">
                    {this.props.description}
                </Typography>
                <Typography variant="subtitle4" color="text.secondary">
                    {this.props.date}
                </Typography>
                </CardContent>
            </Card>
        );
    }
}