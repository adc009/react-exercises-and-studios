export default function BookList() {
   let pageTitle = "Books I read";
   let book1 = "https://upload.wikimedia.org/wikipedia/en/9/9d/Fullmetal123.jpg";
   let book2 = "https://m.media-amazon.com/images/I/615ZIxEDozL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/91zdHwFmpRL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="FullMetal Alchemist" />
         <img src={book2} alt="Twilight" />
         <img src={book3} alt="The Communist Manifesto" />
      </div>      
   );
}