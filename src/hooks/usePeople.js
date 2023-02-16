// GET DATA

export const getPeople = async () => {
    const res = await fetch("https://es-demo.azurewebsites.net/v1/People");
    return res.json();
}
