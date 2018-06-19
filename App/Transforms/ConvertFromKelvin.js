// export default (kelvin: number) => {
export default (kelvin) => {
  const celsius = kelvin - 273.15
  const fahrenheit = (celsius * 1.8000) + 32

  return Math.round(fahrenheit)
}
