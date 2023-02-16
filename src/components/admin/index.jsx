import { StyleAdmin } from "./style"

export const Admin = ({img, name, bio}) => {
    return(
        <>
            <StyleAdmin>
                <img src={img} alt="Eu" />
                <h1>{name}</h1>
                <p>{bio}</p>
            </StyleAdmin>
        </>
    )
}