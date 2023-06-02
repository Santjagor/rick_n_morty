export default function validate(userData) {

    let errors = {}

    const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/
    const regexPassword = /(?=.*[0-9])/

    if (!userData.mail) {
        errors = { ...errors, mail: 'La casilla "mail" está vacía' }
    } else {
        if (userData.mail.length > 35) {
            errors = { ...errors, mail: "El mail tiene que tener un máximo de 35 caracteres" }
        } else {
            if (!(regexMail.test(userData.mail))) {
                errors = { ...errors, mail: "Mail inválido" }
            } else {
                errors = { ...errors, mail: "" }
            }
        }
    }

    if (!userData.password) {
        errors = { ...errors, password: 'La casilla "password" está vacía' }
    } else {
        if (userData.password.length < 6 || userData.password.length > 10) {
            errors = { ...errors, password: "La contraseña debe tener entre 6 y 10 caracteres" }
        } else {
            if (!regexPassword.test(userData.password)) {
                errors = { ...errors, password: "La contraseña debe tener al menos 1 número" }
            } else {
                errors = { ...errors, password: "" }
            }
        }
    }

    return errors
}