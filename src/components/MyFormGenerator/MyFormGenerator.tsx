import * as Yup from 'yup';

import { clsx } from 'clsx';

import FormGenerator from '@homework-task/components/MyFormGenerator/FormGenerator/FormGenerator';

import TextField from './FormGenerator/TextField';
import Button from '../Button';

interface FormValues {
    title: string;
    body: string;
}

const validationSchema = Yup.object({
    title: Yup.string()
        .required('Title is required')
        .max(50, 'Title must be at most 50 characters'),
    body: Yup.string()
        .required('Body is required')
        .max(200, 'Body must be at most 200 characters'),
});

const initialValues: FormValues = {
    title: '',
    body: '',
};

const MyFormGenerator = () => {
    return (
        <FormGenerator
            validationSchema={validationSchema}
            initialValues={initialValues}
            renderForm={({ formik }) => (
                <form
                    className={clsx(
                        'w-full',
                        'max-w-xs',
                        'rounded',
                        'px-8',
                        'pt-6',
                        'pb-8',
                        'm-4',
                        'bg-white',
                        'shadow-md '
                    )}
                    onSubmit={formik.handleSubmit}
                >
                    <TextField
                        label="Title: "
                        name="title"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                        isTouched={formik.touched.title}
                        errorMessage={formik.errors.title}
                    />

                    <TextField
                        label="Body: "
                        name="body"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.body}
                        isTouched={formik.touched.body}
                        errorMessage={formik.errors.body}
                    />

                    <Button
                        className="m-5"
                        type="submit"
                        disabled={formik.isSubmitting}
                    >
                        Submit
                    </Button>

                    <button></button>
                </form>
            )}
        />
    );
};

export default MyFormGenerator;
