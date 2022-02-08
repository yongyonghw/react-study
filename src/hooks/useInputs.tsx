import {useCallback, useState} from "react";


function useInputs(initialForm:any) {
    const [form, setForm] = useState(initialForm)
    //change
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setForm((form:any) => ({...form, [name]: value}));
    }, [form.name, form.email]);
    const reset = useCallback(() => setForm(initialForm), [initialForm]);
    return [form, onChange, reset];
}

export default useInputs;