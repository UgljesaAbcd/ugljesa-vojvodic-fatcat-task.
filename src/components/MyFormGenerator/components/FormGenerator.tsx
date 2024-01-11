import { FC, ReactNode } from 'react';

import { useFormik } from 'formik';

import { postByPathAndData } from '@homework-task/services/BaseApi';

import type { FormikHelpers } from 'formik';
import type { AnySchema } from 'yup';

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

interface ResponseType {
    id: number;
    title: string;
    body: string;
}

const createPostCall = async (values: object): Promise<ResponseType> => {
    const response = await postByPathAndData({
        path: '/posts',
        data: values,
    });
    if (response.status === 201) {
        const { id, title, body } = response.data as ResponseType;

        return { id, title, body };
    } else {
        throw new Error(`Request failed with status: ${response.status}`);
    }
};

const FormGenerator: FC<FormGeneratorProps> = ({
    renderForm,
    validationSchema,
    initialValues,
}) => {
    const onSubmit: FormikSubmitHandler<FormValues> = (values, actions) => {
        void (async () => {
            try {
                const response = await createPostCall(values);
                alert(response.id);
                actions.resetForm();
            } catch (error) {
                actions.setErrors({ title: 'Post failed.' });
            } finally {
                actions.setSubmitting(false);
            }
        })();
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return renderForm({ formik });
};

export default FormGenerator;
