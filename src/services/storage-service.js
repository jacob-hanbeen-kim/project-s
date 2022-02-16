import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import { db } from '../firbase-config';

const storage = getStorage();

const upload = async (file, currentUser, setLoading) => {
    const fileRef = ref(storage, `${currentUser.uid}.png`);

    setLoading(true);

    const snapshot = await uploadBytes(fileRef, file);

    setLoading(false);
    alert('uploaded file!');
}

const getPhoto = async (url) => {
    const fileRef = ref(storage, url);

    // const photoURL = await getDownloadURL(fileRef);
    // console.log(photoURL);

    return getDownloadURL(fileRef).
        then((photoURL) => {
            return photoURL;
        })
        .catch((error) => {
            console.log(error);
            return false;
            // https://firebase.google.com/docs/storage/web/handle-errors
            // switch (error.code) {
            //     case 'storage/unauthorized':
            //         // User doesn't have permission to access the object
            //         break;
            //     case 'storage/canceled':
            //         // User canceled the upload
            //         break;

            //     // ...

            //     case 'storage/unknown':
            //         // Unknown error occurred, inspect error.serverResponse
            //         break;
            // }
        });
}

const getProfileImg = async (user) => {
    return await getPhoto(`${user.id}/profile/profileImg.png`);
}

const getProfileBg = async (user) => {
    return await getPhoto(`${user.id}/profile/background.png`);
}

const getAllImgs = async (user) => {
    const listRef = ref(storage, `${user.id}`);
    console.log(listRef);
    listAll(listRef)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })
}

const StorageService = {
    upload,
    getProfileImg,
    getProfileBg,
    getAllImgs
}

export default StorageService;