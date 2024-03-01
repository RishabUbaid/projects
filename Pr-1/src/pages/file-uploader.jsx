import axios from "axios";

export default function Fileuploader() {
    
    const uploadHandler = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        axios.post("http://localhost:3000/api/upload-file", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
              }

        })
        .then(res => {
            console.log(res.data);
        })
         
    }
    return(
        <section>
            <form onSubmit={uploadHandler}>
                <input type="file" name="image" /><br />
                <input type="text" name="username" id="username" placeholder="username"/><br />
                <input type="email" name="email" id="email"  placeholder="email"/><br />
                <input type="submit" value="upload" />
            </form>
        </section>
    );
}