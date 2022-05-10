import { Button, Card, CardHeader, CardMedia, CardContent, TextField, Grid, Box } from '@mui/material';
import React, { useRef, useState, useEffect, Component } from 'react'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ButtonCustom from '../components/ButtonCustom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import axios from 'axios';
import Header from './Header'
import postService from '../services/post-service';

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.handleCreatePost = this.handleCreatePost.bind(this);
        this.onChangeSaveFile = this.onChangeSaveFile.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onClickSelectFile = this.onClickSelectFile.bind(this);

        this.state = {
            file: {},
            fileName: "",
            title: "",
            description: "",
            titleError: false,
            descriptionError: false,
            fileError: false,
            uploadError: true,
            fileSubmitError: true,
            message: ""
        }

        this.fileInputRef = React.createRef();

    }

    onClickSelectFile(e) {
        e.preventDefault();
        this.fileInputRef.current.click();
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeSaveFile(e) {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.files[0].name,
            fileSubmitError: false
        });
    }

    handleCreatePost(e) {
        e.preventDefault();
        this.setState({
            titleError: false,
            descriptionError: false,
            message: ""
        });

        if (this.state.title == "") {
            this.setState({
                titleError: true
            });
        }
        if (this.state.description == "") {
            this.setState({
                descriptionError: true
            });
        }
        if (this.state.fileName == "") {
            this.setState({
                fileError: true
            });
        }

        if (this.state.title && this.state.description && this.state.fileName) {
            postService.createPost(
                this.state.title,
                this.state.description,
                this.state.file,
                this.state.fileName
            ).then(
                () => {
                    this.setState({
                        uploadError: false
                    });
                },
                error => {
                    const resMessage = (
                        error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                        error.message ||
                        error.toString();
                    this.setState({
                        uploadError: true,
                        message: resMessage
                    });
                }
            );

        }
    }

    render() {
        if (this.state.uploadError) {
            return (
                <>
                    <Header />
                    <div className="flex justify-center items-center flex-col">
                    <Card style={{ width: '614px', marginTop: '20px'}} elevation={5}>
                        <CardHeader
                            title="Create new post"
                            className="flex justify-center items-center flex-col p-4 text-black"
                        />
                        <CardContent>
                            {this.state.message && (
                                <p className=" mb-4 items-center text-xs text-red-primary">
                                    {this.state.message}
                                </p>
                            )}
                            <form noValidate autoComplete="off" onSubmit={this.handleCreatePost}>


                                {this.state.fileSubmitError && (
                                    <Button
                                        style={{ 
                                            color: this.state.fileError ? '#d32f2f' : 'black',
                                            borderColor: this.state.fileError ? '#d32f2f' : 'black' 
                                        }}
                                        variant="text"
                                        startIcon={<AddPhotoAlternateOutlinedIcon />}
                                        onClick={this.onClickSelectFile}
                                    >
                                        Upload picture
                                    </Button>
                                )}

                                {!this.state.fileSubmitError && (
                                    <Button
                                        disabled
                                        style={{ color: 'black' }}
                                        variant="text"
                                        startIcon={<AddPhotoAlternateOutlinedIcon />}
                                        onClick={this.onClickSelectFile}
                                    >
                                        File Selected
                                    </Button>
                                )}

                                <input
                                    hidden
                                    type="file"
                                    style={{ display: 'none' }}
                                    ref={this.fileInputRef}
                                    accept="image/*"
                                    onChange={this.onChangeSaveFile}
                                />

                                <TextField
                                    onChange={this.onChangeTitle}
                                    style={{ marginTop: '10px' }}
                                    label="Title"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    color="secondary"
                                    error={this.state.titleError}
                                />

                                <TextField
                                    onChange={this.onChangeDescription}
                                    style={{ marginTop: '10px' }}
                                    label="Description"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    multiline
                                    color="secondary"
                                    rows={4}
                                    error={this.state.descriptionError}
                                />

                                <Button
                                    style={{ marginTop: '10px', color: 'black' }}
                                    type="submit"
                                    variant="text"
                                    endIcon={<SendOutlinedIcon />}>
                                    Submit
                                </Button>



                            </form>
                        </CardContent>
                    </Card>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <Header />
                    <Card style={{ width: '614px', marginTop: '20px' }} elevation={5}>
                        <CardHeader
                            title="New post was created"
                        />
                        <CardContent>
                            <ButtonCustom link="/" name="Home" icon={<HomeOutlinedIcon />} />
                        </CardContent>
                    </Card>
                </>
            );
        }
    }
}
