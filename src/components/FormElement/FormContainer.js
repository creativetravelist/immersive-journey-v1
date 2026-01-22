import { FormProvider, useForm } from 'react-hook-form';

const FormContainer = ({ useFormPayloads, onSubmit = () => {}, formProps, children }) => {
    const methods = useForm(useFormPayloads);
    const { handleSubmit } = methods;

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate {...formProps}>
                {children}
            </form>
        </FormProvider>
    );
};

export default FormContainer;
