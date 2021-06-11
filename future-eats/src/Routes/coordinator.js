export const register = (history) => {
    history.push('/cadastro')
}

export const address = (history) => {
    history.push('/endereco')
}

export const login = (history) =>{
    history.push('/login')
}

export const previousPage = (history) => {
    history.goBack()
}

export const restaurant = (history, id) => {
    history.push(`/restaurante/${id}`)
}

export const perfil = (history)=>{
    history.push("/perfil")
}

export const cart = (history)=>{
    history.push("/carrinho")
}

export const home = (history)=>{
    history.push("/")
}

export const editPerfil = (history)=>{
    history.push("/perfil/editar/usuario")
}

export const editAddress = (history)=>{
    history.push("/perfil/editar/endereco")
}


