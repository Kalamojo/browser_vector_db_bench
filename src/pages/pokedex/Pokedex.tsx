import { useLiveQuery } from '@electric-sql/pglite-react';


const Pokedex = () => {
    const items = useLiveQuery(`
        SELECT 'Hello world' AS message;
    `);
    console.log(items);

    return (
        <>
            <h1>Pokedex</h1>
            <p>Some Other Description</p>
        </>
    )
}

export default Pokedex;
