import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const storage = getStorage();

const upload = async (file, currentUser, setLoading) => {
    const fileRef = ref(storage, `${currentUser.uid}.png`);

    setLoading(true);

    const snapshot = await uploadBytes(fileRef, file);

    setLoading(false);
    alert('uploaded file!');
}

const getPhoto = async () => {
    const fileRef = ref(storage, `${currentUser.uid}.png`);
    const photoURL = await getDownloadURL(fileRef);
}

const StorageService = {
    upload
}

export default StorageService;