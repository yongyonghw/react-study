import {useCallback, useState} from "react";
import produce from "immer";


function useInputs(initialForm:any) {
    const [form, setForm] = useState(initialForm)



    //change
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setForm(
            // setForm((form:any) => ({...form, [name]: value}));
            produce((draft:any) => {
                draft[name] = value;
        })
        );
    },[]);



    const reset = useCallback(() => setForm(initialForm), [initialForm]);
    return [form, onChange, reset];
}

export default useInputs;