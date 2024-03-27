const Animal = ({animal, favouritePicture}) => {

    const handleClick = (event) => {
        favouritePicture(animal);
    }

    return ( 
        <>
        <img src={animal} alt="Here is a cute Shibe"/>
        <button onClick={handleClick}>❤️</button>
        </>
     );
}
 
export default Animal;