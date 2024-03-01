import axios from "axios";

export default function ViewImage(){
    const getImage = () => {
        let name = document.querySelector("#image-name").ariaValueMax;
        axios.get(`http://localhost:3000/api/get-file?username=${name}`)
        .then (res => {
            let filename = res.data.data.filename;
            document.querySelector("img").src = `http://localhost:3000/api/image/${filename}`;
        })
    }
    return (
        <section>
            <input type="text" id="image-name" /><br />
            <button onClick={getImage}>get</button><br />
            <img src="" alt="image" />
        </section>
    );
}