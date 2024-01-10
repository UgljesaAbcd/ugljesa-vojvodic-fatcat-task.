import { FC, ReactNode } from 'react';
import { useFormik, FormikHelpers } from 'formik';

import { AnySchema } from 'yup';

import { postByPathAndData } from '@homework-task/services/BaseApi';

interface FormValues {
    title: string;
    body: string;
}

interface FormGeneratorProps {
    renderForm: (props: {
        formik: ReturnType<typeof useFormik<FormValues>>;
    }) => ReactNode;
    initialValues: FormValues;
    validationSchema: AnySchema;
}

type FormikSubmitHandler<V> = (
    values: object,
    actions: FormikHelpers<V>
) => void;

const FormGenerator: FC<FormGeneratorProps> = ({
    renderForm,
    validationSchema,
    initialValues,
}) => {
    const onSubmit: FormikSubmitHandler<FormValues> = async (
        values,
        actions
    ) => {
        try {
            const response = await postByPathAndData({
                path: '/posts',
                data: values,
            });
            console.log('Post created:', response.data);
        } catch (error) {
            console.error('Error:', error);
            actions.setErrors({ title: 'Post failed.' });
        } finally {
            actions.setSubmitting(false);
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return renderForm({ formik });
};

export default FormGenerator;
