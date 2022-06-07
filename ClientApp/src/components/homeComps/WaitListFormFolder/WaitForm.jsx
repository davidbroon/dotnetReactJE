import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './waitListForm.style.css';

const WaitListForm = (borderLine) => {
	const [open, setOpen] = useState(false);
	const [display, setDisplay] = useState('none');

	useEffect(() => {
		open ? setDisplay('inline-flex') : setDisplay('none');
	}, [open]);

	const {
		values,
		handleSubmit,
		submitCount,
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
		onSubmit(values) {
			// We added a `username` value for the user which is everything before @ in their email address.
			setValues({
				...values,
				username: `@${values.email.split('@')[0]}`,
			});
			const userEmail = values.email;
			const userName = values.name;
			const userCountry = values.country;
			const adminEmail = 'davidbroon13@hotmail.com';
			const subject = 'Registering Interest in Journey Equip';
			const emailBody =
				"Journey Equip, %0D%0A I'd like to Register my interest in the school starting autumn 2022-2023 %0D%0A %0D%0A Name: " +
				userName +
				'%0D%0A Email: ' +
				userEmail +
				'%0D%0A Country: ' +
				userCountry;
			document.location =
				'mailto:' + adminEmail + '?subject=' + subject + '&body=' + emailBody;
		},
	});

	useEffect(() => {
		if (values.email === 'flaggedemail@mail.com') {
			// It could be a string or any other type
			setFieldValue('isEmailFlagged', { flagged: true, reason: 'test' });
		}
	}, [values.email, setFieldValue]);

	return (
		<>
			<div className='openFormButton' onClick={() => setOpen(!open)}>
				<div className={borderLine}></div>
				<Button
					type='button'
					className='styleButton'
					onClick={() => console.log('resfsd')}
				>
					Register Your Interest
				</Button>
			</div>
			<div className='formWrapper' style={{ display: display }}>
				<form className='baseForm' onSubmit={handleSubmit} noValidate>
					<div className='formRow col-1'>
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
					<div className='formRow col-1'>
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
					<div className='formRow col-1'>
						<button type='submit'>Submit</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default WaitListForm;
