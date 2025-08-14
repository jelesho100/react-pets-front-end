import { useState, useEffect } from 'react';
import * as petService from './services/petService';

const App = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const fetchedPets = await petService.index();
        // Don't forget to pass the error object to the new Error
        if (fetchedPets.err) {
          throw new Error(fetchedPets.err);
        }
        setPets(fetchedPets);
      } catch (err) {
        // Log the error object
        console.log(err);
      }
    };
    fetchPets();
  }, []);
  return (
    <div>
      <h1>Pet List</h1>
      <div>
        {!props.pets.length ? (
          <h2>No Pets Yet!</h2>
        ) : (
          <ul>
            {props.pets.map((pet) => (
              <li key={pet._id}>{pet.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}



export default App;
