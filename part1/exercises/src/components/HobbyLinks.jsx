export default function HobbyLinks() {
    let hobbyLinks = ["https://www.seriouseats.com/", "https://www.madewithlau.com/"]

    return (
        <div>
           <a href = {hobbyLinks[0]}>Serious Eats</a>
           <a href = {hobbyLinks[1]}>Made with Lau</a>
        </div>
     );
}