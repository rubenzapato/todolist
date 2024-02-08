export const getNameDay = (date)=>{
    const numberDay = date.getDay(); 
    const weekDays =  ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sàbado"]
    return weekDays[numberDay]
}