import { Button, Card, CardHeader, CardMedia, CardContent, TextField, Grid, Box } from '@mui/material';
import { useRef, useState, useEffect } from 'react'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Add() {
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);

    const fileInputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault()
        setTitleError(false)
        setDescriptionError(false)

        if (title == '') {
            setTitleError(true)
        }
        if (description == '') {
            setDescriptionError(true)
        }
        // if (title && details) {
        //     fetch('http://localhost:8000/notes', {
        //         method: 'POST',
        //         headers: { "Content-type": "application/json" },
        //         body: JSON.stringify({ title, details, category })
        //     }).then(() => history.push('/'))
        // }
    }

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            }
            reader.readAsDataURL(image);
        } else {
            setPreview(null);
        }
    }, [image]);

    return (
        <Card style={{width: '614px', marginTop: '20px' }} elevation={5}>
            <CardHeader
                title="Create new post"
            />
            <CardMedia
                component="img"
                height={preview ? "700" : "0"}
                image={preview}
            />
            <CardContent>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
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
                    <input
                        hidden
                        type="file"
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={(event) => {
                            const file = event.target.files[0];
                            if (file && file.type.substring(0, 5) === "image") {
                                setImage(file);
                            } else {
                                setImage(null);
                            }
                        }}
                    />
                    {preview ? (
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
                    ) : (null)}

                    {preview ? (
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
                    ) : (null)}

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {preview ? (
                            <Button
                                style={{ marginTop: '10px', color: 'black' }}
                                type="share"
                                variant="text"
                                endIcon={<SendOutlinedIcon />}>
                                Share
                            </Button>
                        ) : (null)}
                    </Box>
                </form>
            </CardContent>
        </Card>
    );
}
export default Add;