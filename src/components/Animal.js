const Animal = ({animal, favouritePicture}) => {

    const handleClick = (event) => {
        favouritePicture(animal);
    }

    return ( 
        <>
        <img src={animal}/>
        <button onClick={handleClick}>❤️</button>
        </>
     );
}
 
export default Animal;