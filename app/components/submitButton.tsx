import { useFormStatus } from "react-dom";
import { Button } from "./button"

const SubmitButton = () => {
    const status = useFormStatus();
    return <Button aria-disabled={status.pending} type='submit'>Submit</Button>
}

export default SubmitButton;