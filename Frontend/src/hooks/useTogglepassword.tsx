import { useState } from 'react';

export function useTogglePassword() {
    const[mostrarSenha,setSenha] = useState(false);

const toggleSenha = () =>  setSenha((prev) => !prev);

    return {mostrarSenha, toggleSenha};

}


