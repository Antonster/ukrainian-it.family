import { MainButton } from '@elements';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import styles from './ContactUsPartnerForm.module.scss';

const schema = yup.object({
  name: yup.string().required('Required field'),
  email: yup.string().email('Email must be valid').required('Required field'),
  description: yup.string(),
});

export const ContactUsPartnerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback((formData) => {
    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    console.log(formData);
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__content}>
        <div className={styles['form__content-title-container']}>
          <div className={styles['form__content-title']}>
            Or fill the form<span className={styles['form__content-title-dot']}>.</span>
          </div>
          <div className={styles['form__content-subtitle']}>
            Drop us a line and we’ll contact you as soon as possible
          </div>
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

        <div className={styles['form__content-field']}>
          <label className={styles['form__content-field-label']} htmlFor="description">
            Onboard us into your project
          </label>
          <textarea
            className={`${styles['form__content-field-input']} ${
              errors?.description ? styles.error : ''
            }`}
            id="description"
            {...register('description')}
          />

          {errors?.description && (
            <div className={styles['form__field-error']}>{errors.email.message}</div>
          )}
        </div>
      </div>

      <MainButton type="submit" width="100%" text="send" size="big" />
    </form>
  );
};
