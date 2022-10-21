import MainButton from '@components/main-button';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from '@styles/components/contact-us-form.module.scss';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Required field'),
  email: yup.string().email('Email must be valid').required('Required field'),
  curriculumVitae: yup.string(),
  link: yup.string(),
});

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { getRootProps, getInputProps } = useDropzone({ onDrop: () => {} });

  const onSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__content}>
        <div className={styles['form__content-title']}>
          Contact us<span className={styles['form__content-title-dot']}>.</span>
        </div>

        <div className={styles['form__content-field']}>
          <label className={styles['form__content-field-label']} htmlFor="name">
            Your name<span className={styles['form__content-field-required']}>*</span>
          </label>
          <input
            className={`${styles['form__content-field-input']} ${errors?.name ? styles.error : ''}`}
            id="name"
            placeholder="Enter your name"
            {...register('name')}
          />

          {errors?.name && <div className={styles['form__field-error']}>{errors.name.message}</div>}
        </div>

        <div className={styles['form__content-field']}>
          <label className={styles['form__content-field-label']} htmlFor="email">
            Your email<span className={styles['form__content-field-required']}>*</span>
          </label>
          <input
            className={`${styles['form__content-field-input']} ${
              errors?.email ? styles.error : ''
            }`}
            id="email"
            placeholder="example@email.com"
            {...register('email')}
          />

          {errors?.email && (
            <div className={styles['form__field-error']}>{errors.email.message}</div>
          )}
        </div>

        <div className={styles['form__curriculum-vitae']}>
          <div className={styles['form__content-field']}>
            <div className={styles['form__content-field-label']}>CV</div>
            <div className={styles['form__content-field-dropzone']} {...getRootProps()}>
              <input {...getInputProps()} {...register('curriculumVitae')} />
              <div>upload CV</div>
            </div>
          </div>

          <div className={styles.form__separator}>
            <div className={styles['form__separator-line']} />
            <div>OR</div>
            <div className={styles['form__separator-line']} />
          </div>

          <div className={styles['form__content-field']}>
            <label className={styles['form__content-field-label']} htmlFor="name">
              Link
            </label>
            <input
              className={styles['form__content-field-input']}
              id="link"
              placeholder="Enter your link"
              {...register('link')}
            />
          </div>
        </div>

        <div className={styles.form__description}>
          You can also contact us via{' '}
          <a className={styles['form__description-email']} href="mailto: example@email.com">
            example@email.com
          </a>
        </div>
      </div>

      <MainButton type="submit" width="100%" text="send" size="big" />
    </form>
  );
};

export default ContactUsForm;
