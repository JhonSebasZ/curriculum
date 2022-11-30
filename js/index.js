//comportamiento de la barra de navegacion
window.addEventListener('scroll', function () {
    let about = document.getElementById('about')
    let position = about.getBoundingClientRect().top; //obtiene la posicion de un elemneto
    let lenWindows = window.innerHeight / 9 //obtiene el tamaño de la pantalla
    
    if (position < lenWindows) {
        document.getElementById('navbar').style.background = 'rgba(34, 23, 15, 0.8)'
        document.getElementById('nAbout').style.color = 'red'
    } else {
        document.getElementById('navbar').style.background = 'None'
        document.getElementById('nAbout').style.color = 'white'
    }
    
    //comportamiento de la opcion skills
    let skill = document.getElementById('skills')
    let skillposition = skill.getBoundingClientRect().top;
    if (skillposition < lenWindows) {
        document.getElementById('nAbout').style.color = 'white'
        document.getElementById('nSkills').style.color = 'red'
    } else {
        document.getElementById('nSkills').style.color = 'white'
    }

    //comportamiento de la opcion projects
    let project = document.getElementById('projects');
    let projectPos = project.getBoundingClientRect().top;
    if (projectPos < lenWindows) {
        document.getElementById('nProjects').style.color = 'red'
        document.getElementById('nSkills').style.color = 'white'
    } else {
        document.getElementById('nProjects').style.color = 'white'
    }

    //comportamiento de la opcion contact
    let contact = document.getElementById('contact');
    let contactPos = contact.getBoundingClientRect().top;
    if (contactPos < lenWindows) {
        document.getElementById('nContact').style.color = 'red'
        document.getElementById('nProjects').style.color = 'white'
    } else {
        document.getElementById('nContact').style.color = 'white'
    }

})

//comportamiento de los botones verDemo y verCodigo
const botones = (project_b1, project_b2) => {
    document.getElementById(project_b1).style.display = 'block'
    document.getElementById(project_b2).style.display = 'block'
}

const ocultar = (project_b1, project_b2) => {
    document.getElementById(project_b1).style.display = 'none'
    document.getElementById(project_b2).style.display = 'none'
}


// efecto de escritura
const text = document.getElementById('text')
let str = text.innerHTML; // obtiene el valor actual

const speed = 140; //tiempo de espera
let i = 0;
let y = str.length - 1


const typeWrite = () => {
    if (i < str.length) {
        text.innerHTML = str.slice(0, i + 1); //añade caracteres
        i++;
        if (i == str.length - 1) {
            y = str.length
        }
    } else {
        //retrazo para empezar a escribir y borrar
        setTimeout(() => {
            if (y != 1) {
                text.innerHTML = str.slice(0, y - 1) //borra caracteres
                y--;
            }
            if (y == 1) {
                i = 0;
            }
        }, 1200)
    }
    setTimeout(typeWrite, speed)
}

setTimeout(typeWrite, speed)


