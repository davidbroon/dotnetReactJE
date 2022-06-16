import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import { Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './waitListForm.style.css';
import axios from 'axios';

const WaitListForm = (borderLine) => {
	const [formOpen, setFormOpen] = useContext(GlobalContext);
	// const [formOpen, setFormOpen] = useState(false);
	const [display, setDisplay] = useState('none');
	const [bgColor, setBgColor] = useState('transparent');

	const borderClassname = 'smallScreen ' + borderLine;

	useEffect(() => {
		formOpen ? setDisplay('inline-flex') : setDisplay('none');
		formOpen ? setBgColor('#17223c10') : setDisplay('none');
	}, [formOpen]);

	const api = axios.create({
		baseURL: `https://localhost:7077/api/email/send`,
	});

	const {
		values,
		handleSubmit,
		getFieldProps,
		setValues,
		touched,
		errors,
		setFieldValue,
	} = useFormik({
		initialValues: {
			name: '',
			email: '',
			country: '',
		},
		validationSchema: Yup.object().shape({
			name: Yup.string().required('Required'),
			email: Yup.string().email('Invalid email address').required('Required'),
			country: Yup.string().required('Required'),
		}),

		onSubmit(values, { setSubmitting, resetForm }) {
			// We added a `username` value for the user which is everything before @ in their email address.
			setValues({
				...values,
				username: `@${values.email.split('@')[0]}`,
			});
			setSubmitting(true);

			const userEmail = values.email;
			const userName = values.name;
			const userCountry = values.country;

			try {
				api({
					method: 'post',
					data: {
						UserName: userName,
						UserCountry: userCountry,
						UserEmail: userEmail,
					},
				}).catch((err) => console.log('err1', err));
			} catch (error) {
				console.log('Error...');
			}
			resetForm();
			setSubmitting(false);
		},
	});

	useEffect(() => {
		if (values.email === 'flaggedemail@mail.com') {
			// It could be a string or any other type
			setFieldValue('isEmailFlagged', { flagged: true, reason: 'test' });
		}
	}, [values.email, setFieldValue]);

	return (
		<div className='formAndButtonContainer'>
			<div className='openFormButton' onClick={() => setFormOpen(!formOpen)}>
				<div className={borderClassname}></div>
				<Button type='button' className='styleButton'>
					Register Your Interest
				</Button>
			</div>
			<div className='formWrapper' style={{ display: display }}>
				<form className='baseForm' onSubmit={handleSubmit} noValidate>
					<div className='formRow'>
						<div className='formFieldWrap'>
							<label className='formFieldLabel' htmlFor='name'>
								<span className='errorMessage'>
									{touched['name'] && errors['name']}
								</span>
							</label>

							<div className='formFieldWrapInner'>
								<input
									type='string'
									id='name'
									className='name formField'
									{...getFieldProps('name')}
									placeholder="What's Your Name"
								/>
							</div>
						</div>
					</div>
					<div className='formRow'>
						<div className='formFieldWrap'>
							<label className='formFieldLabel' htmlFor='email'>
								<span className='errorMessage'>
									{touched['email'] && errors['email']}
								</span>
							</label>

							<div className='formFieldWrapInner'>
								<input
									type='email'
									id='email'
									className='email formField'
									{...getFieldProps('email')}
									placeholder='Email address'
								/>
							</div>
						</div>
					</div>
					<div className='formFieldWrap'>
						<label className='formFieldLabel' htmlFor='country'>
							<span className='errorMessage'>
								{touched['country'] && errors['country']}
							</span>
						</label>

						<div className='formFieldWrapInner'>
							<input
								type='string'
								id='country'
								className='country formField'
								{...getFieldProps('country')}
								placeholder='What Country Are You From'
							/>
						</div>
					</div>
					<div className='formRow'>
						<button type='submit'>Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default WaitListForm;
