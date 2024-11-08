import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Modal from "./Modal";
import Input from "./Input";

import useUploadModal from "@/hooks/useUploadModal";

const UploadModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const uploadModal = useUploadModal();

    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
       defaultValues: {
        author: '',
        title: '',
        song: null,
        image: null,

       } 
    })

    const onChange = (open: boolean) => {
        if (!open) {
            reset();
            uploadModal.onClose();
        }
    }

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        //Upload to supabase
    }

    return (
        <><Modal
            title="Add a song"
            description="Upload an mp3 file"
            isOpen={uploadModal.isOpen}
            onChange={onChange}
        >
            Form
        </Modal><form
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input 
                id="title"
                disabled={isLoading}
                {...register('title'), { required: true}}
                placeholder="Song title"
            />

            </form></>
    )
}

export default UploadModal;