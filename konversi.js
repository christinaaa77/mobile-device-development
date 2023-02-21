const temperature = {
    temperature : 37.33,
};
const display = ({temperature}) => {
    console.log(`Fahrenheit ${(temperature * 1.8) + 32} = ${temperature} Celsius`);
};

export {temperature, display};