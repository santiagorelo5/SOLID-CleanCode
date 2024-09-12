(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvalue = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvalue.map(file => file.flagged);

    //malos
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const currentDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const numberOfFliesInDirectory = 33;
    
    // primer nombre - first name
    const name = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastUpdate = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudents = 6;
 

    ///Bolean
    const inOpen = true; 
    const canWrite = true; 
    const hasFruits = true; 

    //numbers
    const maxFruits = 5;
    const totalFruits = 3;
    const totalOfCars = 2;

    //funciones
    function createUser(){}
    function updateUser(){}
    function sendEmail(){}

})();