import React, { useRef, useState } from 'react';
import GameService from '../../services/GameService/GameService';

import './UploadFile.scss';
const validateName = /^.*\.(jpg|JPG|png|PNG|jpeg|JPEG)$/

export default function UploadFile() {
    const inpRef = useRef();
    const [err, setErr] = useState('');

    function handleFileUpload(e) {
        const file = e.currentTarget.files.item(0);
        console.log(file);
        if (file && file.name.match(validateName)) {
            if (file.size < 8 * 1024 * 1024) {

                const formData = new FormData();
                formData.append('result', file);

                console.log(formData)
                GameService.uploadFile(formData).then(data => {
                    console.log(data);
                });
            } else {
                setErr('Максимальный размер файла 8 мегабайт')
            }
        } else {
            setErr('Разрешенны только PNG и JPEG файлы')
        }
    }

    function handleClick() {
        //@ts-ignore
        inpRef.current.click();
    }

    return (
        <div className="upload">
            <input ref={inpRef} type="file" accept="image/png image/jpeg" name="file" id="" onChange={(e) => handleFileUpload(e)} />
            <button onClick={() => handleClick()}>Загрузить</button>
            <p className="err">{err}</p>
        </div>
    );
}
