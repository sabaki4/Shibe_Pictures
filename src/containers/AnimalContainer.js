import { useEffect, useState } from "react";
import AnimalList from "../components/AnimalList";

const AnimalContainer = () => {

    const [animals, setAnimals] = useState([]);
    const [favouritePictures, setFavouritePictures] = useState([]);

    const loadAnimal = async () => {
        const response = await fetch(" http://shibe.online/api/shibes?count=21&urls=true&httpsUrls=true");
        const animalJSON = await response.json();
        setAnimals(animalJSON);
    }

    useEffect(() => {
        loadAnimal();
    }, [])

    const favouritePicture = (animal) => {
        setFavouritePictures([...favouritePictures, animal]);
        const animalIndex = animals.indexOf(animal);
        setAnimals(animals.toSpliced(animalIndex, 1));
    }

    return (
        <>
            <AnimalList animals={animals} favouritePicture={favouritePicture} />
            <AnimalList animals={favouritePictures} />
        </>
    );
}

export default AnimalContainer;