interface ResponseData {
    token: string
    user: {
        name: string
        email: string
    }
}


export function singIn(): Promise<ResponseData>{
    return new Promise(resolve => {
        setTimeout (() => {
            resolve({
                token: "1231ik189696h1kuhgkj11kjkgj122381kj2vg1xslkjff",
                user: {
                    name: "dionei",
                    email: "dioneifaque@gmail.com"
                }
            })
        }, 2000)
    })
}