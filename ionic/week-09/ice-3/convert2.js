module.exports = {
    toFah: (i) => { return i * 1.8 + 32; },
    toCel: (i) => { return (i-32) * 5 / 9; },
    desc: 'Temperature Conversion',
    fah: 'Fahrenheit = Celsius degrees * 1.8 + 32',
    cel: 'Celsius = (Fahrenheit degrees - 31) * 5 / 9'
}
    