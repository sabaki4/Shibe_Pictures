import { useEffect, useState } from "react";
import AnimalList from "../components/AnimalList";

const AnimalContainer = () => {

    const [animals, setAnimals] = useState([]);

    const loadAnimal = async () => {
        const response = await fetch(" http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true");
        const animalJSON = await response.json();
        setAnimals(animalJSON);
    }

    useEffect(() => {
        loadAnimal();
    }, [])

    return (
        <>
            <AnimalList animals={animals} />
        </>
    );
}

export default AnimalContainer;