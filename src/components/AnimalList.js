import Animal from "./Animal";

const AnimalList = ({ animals }) => {

    const mapAnimals = animals.map((animal, index) => {
        return <Animal key={index} animal={animal} />
    });

    return (
        <>
            {mapAnimals}
        </>
    );
}

export default AnimalList;