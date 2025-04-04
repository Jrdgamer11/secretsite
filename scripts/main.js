var black = false
function startapp() {
document.documentElement.requestFullscreen();
document.getElementById("start").hidden = true
document.getElementById("bob").hidden = false
}
function exit() {
    document.getElementById("start").hidden = false
    document.getElementById("bob").hidden = true
    document.exitFullscreen()
}
function changeback() {
    if (black == true) {
        document.body.style.backgroundColor = 'white'
        document.getElementById('footer').style.backgroundColor = 'cornflowerblue'
        console.log('Normal mode')
        black = false
        document.getElementById('exitbutton').src = 'https://cbx-prod.b-cdn.net/COLOURBOX18614512.jpg?width=800&height=800&quality=70'
    }
}
function oneview() {
    if (black == true) {
        document.location.replace('https://oneview.duvalschools.org')
        console.log('Redirecting')
    }
}
function godark() {
    if (black == false) {
    document.getElementById('footer').style.backgroundColor = 'black'
    document.body.style.backgroundColor = 'black'
    black = true
    console.log('Going dark!')
    document.getElementById('exitbutton').src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUXFRUVFxcVFRcVFRUVFRUWFxUXFRUYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0NDysZFRkrNy0rKysrLSstNzc3Ny4rKy0tNy0rLTctLSsrKy0rKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIBABAQEAAQQCAwAAAAAAAAAAAAERAhIhQWEx8FGRof/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABsRAQACAgMAAAAAAAAAAAAAAAAREgFhAlGB/9oADAMBAAIRAxEAPwDiFMCAqBAFMSAtTCgLKgoJSFAKsqaQC0wp4BFACqlhQEq1JQVMACkgALEIAq6oIVKQAi1IBBb+UoFWwQFKhoGJFlIAFIBhAATVAKFMBKuBoERZSAgYugCUBc9gCnYioIqACNYlawGaBgLaJADFS0kAIVYAkXUAsEalBKIoBi1KBIaRAApoKkF0GusYBq2e2sSqkEVMVMEIsSKAggC1YUEWXEgBoUgFIEAIQiipCEQXTEoCBQAq6gKhaugg1tASriU0AXUBQxIBaVc7koJFqYWAqFICpotgBEpoLiCwGWsQAtSrQDUa9MgoQ8gaikgINb6/oBCphAXEKAUi4AayuFA0CgYEIA1GTALBbEAoJgNRmUoClTFwDUqpgKGIBougHUIAspCLgJYcVQFNSQ0AACReSUAAgAYQDuaACoAAmAoGggtARU1QKi0A0TsLGxTRYgIWALE9EWggICqkpfQFCmAqFAVFiQAtTADFKgLiVYUBAgLiLgCVYlXQNAEWoEFXEhpgLqFWglgUwBaVKAaJAUKTuBoYSgSd0UwDkJQFwhQApEBUUBBSTQhNG+hUlunJgoKwuJqpoKmrIgCLSAUhFoJSGFA1LFlIByDSAkXBMBbCUAA5AIVUBUNAXT4QBrqob91Rq22cWlTRlay1qYCxMWxkFq3ilKBC1QEAoEpoSAE1agIsFBlUgCwqQoKWJigmrTSAlFABBRVKckVNIupKIsqaigvKIGAAtoCaTsSAaQpACmrAL+UtCwEUhARS0oCKgKgtoFRSAg1sF9RDkaUUSKSgki0ggCLQChaAYqQDCFAKLiQA0QDVhSUCxFqAtQUC1FQAAF0ADAwA0gAaUi6DOroAL1MytAkMNAUTUgLYqEAIigmrCgItCAJq6WgUQA1SUwF0ZBZbjPgFF4oCIvBOPwAFKoCLVAY5AAX5XkoDK+AXILfv7BBmLVBcLySKKjCAg1fhIAFWADQAP//Z'
    }
}
black = false
changeback()