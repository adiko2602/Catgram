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
            // const post = JSON.stringify({
            //     description: description,
            //     id: 0,
            //     link: '',
            //     picture: '',
            //     title: title
            // })

            // console.log(post);

            // try {
            //     const res = await axios.post(apiPost, post, {
            //         headers: {
            //             'Content-Type': 'application/json'
            //         }
            //     })
            // } catch (ex) {
            //     console.log(ex);
            // }

            // uploadFile();

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
    // const [image, setImage] = useState();
    // const [fileName, setFileName] = useState();
    // const [preview, setPreview] = useState();
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [titleError, setTitleError] = useState(false);
    // const [descriptionError, setDescriptionError] = useState(false);

    // const fileInputRef = useRef();

    // const saveFile = async (event) => {
    //     setImage(event.target.files[0]);
    //     setFileName(event.target.files[0].name);

    //     console.log(image.name)
    //     //if (image && image.type.substring(0, 5) === "image") {
    //         const formData = new FormData();

    //         formData.append("formFile", image);
    //         formData.append("fileName", fileName);
    //         try {
    //             await axios.post(apiUpload, formData)
    //         } catch(error) {
    //             console.error("upload error!", error)
    //         }
    //     //} else {
    //     //    setImage(null);
    //     //}
    // }

    // const uploadFile = async (e) => {
    //     const formData = new FormData();
    //     formData.append("formFile", image);

    //     await axios.post(apiUpload, formData)
    //     .catch(error => {
    //         console.error("upload error!", error)
    //     })
    // }

    //const handleSubmit = (event) => {
    // event.preventDefault()
    // setTitleError(false)
    // setDescriptionError(false)

    // if (title === '') {
    //     setTitleError(true)
    // }
    // if (description === '') {
    //     setDescriptionError(true)
    // }

    // if(title && description) {
    //     let post = JSON.stringify({ 
    //         description: description,
    //         id: 0,
    //         link: '',
    //         picture: '',
    //         title: title
    //     })

    //     console.log(post);

    //     axios.post(apiPost, post, {
    //         headers: {
    //           'Content-Type': 'application/json'
    //         }
    //       })
    //     .catch(error => {
    //         console.error('There was an error!', error);
    //     });

    // }

    // const article = { title: 'React POST Request Example' };
    // axios.post('https://reqres.in/invalid-url', article)
    //     .then(response => this.setState({ articleId: response.data.id }))
    //     .catch(error => {
    //         this.setState({ errorMessage: error.message });
    //         console.error('There was an error!', error);
    //     });
    // // if (title && details) {
    // //     fetch('http://localhost:8000/notes', {
    // //         method: 'POST',
    // //         headers: { "Content-type": "application/json" },
    // //         body: JSON.stringify({ title, details, category })
    // //     }).then(() => history.push('/'))
    // // }
    //}

    // useEffect(() => {
    //     if (image) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setPreview(reader.result);
    //         }
    //         reader.readAsDataURL(image);
    //     } else {
    //         setPreview(null);
    //     }
    // }, [image]);

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