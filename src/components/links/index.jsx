import { StyleLinks } from "./style"


export const ComponentsLinks = ({link, name, icon}) => {
    return(
        <>
           <StyleLinks href={link}>
           {icon} {name}
           </StyleLinks>
        </>
    )
}