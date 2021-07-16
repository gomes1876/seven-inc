import { actionsTpes } from "../constants/actiosTypes"

const INITIAL_STATE_FORM = {
    id: '',
    name: '',
    bornDate: '',
    salary: '',
    position: '',
    button: 'Salvar'
}


export default function funcionarios(state = INITIAL_STATE_FORM, action){
    switch(action.type){
        case actionsTpes.SAVE_NEW_USER:
        return {
            ...state, 
            formValues: INITIAL_STATE_FORM,
            // tableValues: [
            //     ...tableValues,
            //     action.newTableValue
            // ]

        }
        case actionsTpes.ALTER_USER:
        return {
            formValue: {
                ...state,
                formValues: action.newFormValues
            }
        }
        default: {
            return state;
        }
    }
}
