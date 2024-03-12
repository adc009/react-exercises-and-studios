import styles from './Description.module.css';

export default function RecipePhoto() {

    let url = "https://www.seriouseats.com/thmb/5CWQkKpX1CvcDMKXhGslM8pQB5s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__08__20130523-smoked-ribeye-19-large-6f103a66a19643a5b0106c24e99b52bf.jpg";
    
    return (
        <img src={url} alt="steak photo" className = {styles.imageUpdates} />
    );
}