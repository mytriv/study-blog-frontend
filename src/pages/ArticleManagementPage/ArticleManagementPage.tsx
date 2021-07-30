import {SmallLogo} from "../../components/SmallLogo";
import {Titles} from "./components/Titles";
import {Input} from "../../components/Input";
import styles from "./index.module.css"
import {Button} from "../../components/Button";
import {useState} from "react";
import {useHistory} from "react-router";
import axios from "axios";

export const ArticleManagementPage = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [mainImageUrl, setMainImageUrl] = useState("");

    const history = useHistory();

    const onSaveClick = async () => {
        try {
            await axios.post("/api/v1/articles", {title, description, content, mainImageUrl});
            history.push("/myarticles")
        } catch (error) {
            console.log('error: ', error.response.data);
        }
    }

    return (
        <div className={styles.page}>
            <SmallLogo logo={"Plane Blog"}/>
            <div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <Titles text={"Article title: "}/>
                    </div>
                    <div className={styles.input}>
                        <Input type={"text"} placeholder={"Please enter article title"} value={title} updateValue={setTitle}/>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <Titles text={"Article description: "}/>
                    </div>
                    <div className={styles.input}>
                        <Input type={"text"} placeholder={"Please enter article description"} value={description} updateValue={setDescription}/>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <Titles text={"Article image: "}/>
                    </div>
                    <div className={styles.input}>
                        <Input type={"url"} placeholder={"Please enter image url"} value={mainImageUrl} updateValue={setMainImageUrl}/>
                    </div>
                </div>

                <div className={styles.contentCreateArticle}>
                    <div className={styles.title}>
                        <Titles text={"Article text: "}/>
                    </div>
                    <div className={styles.inputTextArea}>
                        <textarea onChange={(event) => {setContent(event.target.value)}} name="Article Text" id="Article"  ></textarea>
                    </div>
                </div>
                <div className={styles.button}>
                    <Button title={"Save"} onClick={onSaveClick}/>
                </div>
            </div>
            
        </div>
    );
}