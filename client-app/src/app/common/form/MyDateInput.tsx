import { useField } from "formik";
import { Form, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";

interface Props {
    name: string;
    dateFormat?: string;
    placeholder?: string;
    minDate?: Date;
    maxDate?: Date;
    format?:string;
  }

export default function MyDateInput(props: Props){
    const [field, meta, helpers] = useField(props.name!);
    return (
        // !! makes an object into a boolean, since error will be either a string or undefined
        <Form.Field error={meta.touched && !!meta.error}>
            <DatePicker
                {...field}
                {...props}
                selected={field.value && new Date(field.value) || null}
                onChange={(date) => helpers.setValue(date as Date | null)}
                showTimeSelect 
                timeCaption='time' 
                dateFormat= {'d MMMM yyyy h:mm aa'}
                placeholderText={props.placeholder}
            />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </Form.Field>
    )
}