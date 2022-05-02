import { Button, Card, CardHeader, CardMedia, CardContent, TextField, Grid, Box } from '@mui/material';
import { useRef, useState, useEffect } from 'react'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ButtonCustom from '../components/ButtonCustom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import axios from 'axios';
import Header from './Header'

function Add() {

    const apiPost = 'https://localhost:7045/api/Post'


    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const [uploadedOk, setUploadedOk] = useState(false);
    const [fileOk, setFileOk] = useState(false);

    const fileInputRef = useRef();

    const saveFile = (e) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        setFileOk(true);
    }

    const uploadFile = async () => {
        console.log(file);
        const formData = new FormData();
        formData.append("formFile", file);
        formData.append("fileName", fileName);
        formData.append("description", description);
        formData.append("link", "");
        formData.append("picture", "");
        formData.append("title", title);

        try {
            const res = await axios.post(apiPost, formData);
            console.log(res);
        } catch (ex) {
            console.log(ex);
        }
    }

    const createPost = async (e) => {
        e.preventDefault()
        setTitleError(false)
        setDescriptionError(false)

        if (title == '') {
            setTitleError(true)
        }
        if (description == '') {
            setDescriptionError(true)
        }

        if (title && description) {
            const formData = new FormData();

            formData.append("formFile", file);
            formData.append("fileName", fileName);
            formData.append("description", description);
            formData.append("title", title);

            try {
                const res = await axios.post(apiPost, formData);
                console.log(res);
                setUploadedOk(true);
            } catch (ex) {
                setUploadedOk(false);
                console.log(ex);
            }
        }
    }

    if (!uploadedOk) {
        return (
            <>
            <Header />
            <Card style={{ width: '614px', marginTop: '20px' }} elevation={5}>
                <CardHeader
                    title="Create new post"
                />
                <CardContent>
                    <form noValidate autoComplete="off" onSubmit={createPost}>

                        {fileOk ? (
                            <Button
                                disabled
                                style={{ color: 'black' }}
                                variant="text"
                                startIcon={<AddPhotoAlternateOutlinedIcon />}
                                onClick={(event) => {
                                    event.preventDefault();
                                    fileInputRef.current.click();
                                }}
                            >
                                File Selected
                            </Button>
                        ) : (
                            <Button
                                style={{ color: 'black' }}
                                variant="text"
                                startIcon={<AddPhotoAlternateOutlinedIcon />}
                                onClick={(event) => {
                                    event.preventDefault();
                                    fileInputRef.current.click();
                                }}
                            >
                                Upload File
                            </Button>
                        )}

                        <input
                            hidden
                            type="file"
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            accept="image/*"
                            onChange={saveFile}
                        />
                        <TextField
                            onChange={(event) => setTitle(event.target.value)}
                            style={{ marginTop: '10px' }}
                            label="Title"
                            variant="outlined"
                            fullWidth
                            required
                            color="secondary"
                            error={titleError}
                        />

                        <TextField
                            onChange={(event) => setDescription(event.target.value)}
                            style={{ marginTop: '10px' }}
                            label="Description"
                            variant="outlined"
                            fullWidth
                            required
                            multiline
                            color="secondary"
                            rows={4}
                            error={descriptionError}
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
export default Add;