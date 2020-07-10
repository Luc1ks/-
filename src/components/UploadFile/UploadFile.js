import React, { useRef, useState } from 'react';
import GameService from '../../services/GameService/GameService';

import './UploadFile.scss';
import { uploadUrl } from '../../urls/gameUrls';
import TokenService from '../../services/TokenService/TokenService';
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

                fetch(uploadUrl, {
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + TokenService.getAccessToken()
                    },
                    body: formData
                }).then(data => {
                    console.log(data, 'file upload')
                    return data.json()
                }).then(json => {
                    if (json.success) {
                        window.location.replace('/');
                    }
                }).catch(err => console.log(err))

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
