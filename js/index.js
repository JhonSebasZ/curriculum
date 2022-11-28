window.addEventListener('scroll', function(){
    let about = document.getElementById('about')
    let position= about.getBoundingClientRect().top;
    let lenWindows = window.innerHeight/9
    if (position < lenWindows){
        document.getElementById('navbar').style.background = 'rgba(34, 23, 15, 0.8)'
        document.getElementById('nAbout').style.color = 'red' 
    }else{
        document.getElementById('navbar').style.background = 'None' 
        document.getElementById('nAbout').style.color = 'white' 
    }

    let skill = document.getElementById('skills')
    let skillposition = skill.getBoundingClientRect().top;
    if (skillposition < lenWindows){
        document.getElementById('nAbout').style.color = 'white' 
        document.getElementById('nSkills').style.color = 'red'
    }else{
        document.getElementById('nSkills').style.color = 'white'
    }

    let project = document.getElementById('projects');
    let projectPos = project.getBoundingClientRect().top;
    if (projectPos < lenWindows){
        document.getElementById('nProjects').style.color = 'red'
        document.getElementById('nSkills').style.color = 'white'
    }else{
        document.getElementById('nProjects').style.color = 'white'
    }

    let contact = document.getElementById('contact');
    let contactPos = contact.getBoundingClientRect().top;
    if (contactPos < lenWindows){
        document.getElementById('nContact').style.color = 'red'
        document.getElementById('nProjects').style.color = 'white'
    }else{
        document.getElementById('nContact').style.color = 'white'
    }

})  
function botones(project_b1, project_b2){           

    document.getElementById(project_b1).style.display = 'block'
    document.getElementById(project_b2).style.display = 'block'


}

function ocultar(project_b1, project_b2){
document.getElementById(project_b1).style.display = 'none'
document.getElementById(project_b2).style.display = 'none'
}