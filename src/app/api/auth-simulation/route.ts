type LoginRequestType = {
    email: string,
    password: string,
}

export async function LoginRequest ( data: LoginRequestType ){

    return {
        token: 'thisIsASecretSimulationTokenaewjfoijkqe55v16ew4fasc1r11adef1',
        user: {
            name: 'José Alisson',
            email: 'josealissonsemail@gamil.com',
        }
    };
}

export async function recoverUser( ){
    return{
        user: {
            name: 'José Alisson',
            email: 'josealissonsemail@gamil.com',
        }
    }
}