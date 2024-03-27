import Animal from "./Animal";

const AnimalList = ({ animals, favouritePicture }) => {

    const mapAnimals = animals.map((animal, index) => {
        return <Animal key={index} animal={animal} favouritePicture={favouritePicture} />
    });

    return (
        <>
            {mapAnimals}
        </>
    );
}

export default AnimalList;