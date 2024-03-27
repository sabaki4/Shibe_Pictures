import { useEffect, useState } from "react";
import Animal from "../components/Animal";

const AnimalContainer = () => {

    const [animals, setAnimals] = useState("");

    const loadAnimal = async () => {
        const response = await fetch("http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]");
        const animalJSON = await response.json();
        setAnimals(animalJSON);
    }

    useEffect(() => {
        loadAnimal();
    }, [])

    return (
        <>
            <Animal animal={animals} />
        </>
    );
}

export default AnimalContainer;