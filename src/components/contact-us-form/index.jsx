import MainButton from '@components/main-button';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from '@styles/components/contact-us-form.module.scss';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Required field'),
  email: yup.string().email('Email must be valid').required('Required field'),
  curriculumVitae: yup.string(),
  link: yup.string(),
});

const imageMimeType = /(document|pdf|plain)/i;

const ContactUsForm = ({ onCloseModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const currentFile = watch('curriculumVitae');

  const [fileError, setFileError] = useState();

  const onSubmit = useCallback(
    (formData) => {
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      console.log(formData);

      if (onCloseModal) {
        onCloseModal();
      }
    },
    [onCloseModal],
  );

  const onUploadFile = useCallback(
    (file) => {
      const newFile = file[0];

      if (!newFile.type.match(imageMimeType)) {
        setFileError('Valid formats .doc, .docx, .pdf, .txt');
        return;
      }
      if (newFile.size >= 8000000) {
        setFileError('Max file size 8MB');
        return;
      }

      setFileError();
      setValue('curriculumVitae', file[0]);
    },
    [setValue],
  );

  const onDeleteFile = useCallback(() => {
    setValue('curriculumVitae', '');
  }, [setValue]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop: onUploadFile });

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {onCloseModal && (
        <button className={styles['form__close-button']} type="button" onClick={onCloseModal}>
          <img src="/static/images/cross-blue.svg" alt="cross icon" />
        </button>
      )}

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
            {currentFile ? (
              <div className={styles['form__content-field-file']}>
                <div className={styles['form__content-field-file-title-wrapper']}>
                  <div className={styles['form__content-field-file-title']}>{currentFile.name}</div>
                </div>
                <button
                  className={styles['form__content-field-file-delete']}
                  type="button"
                  onClick={onDeleteFile}
                >
                  delete
                </button>
              </div>
            ) : (
              <>
                <div className={styles['form__content-field-dropzone']} {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div className={styles['form__content-field-dropzone-text']}>
                    <div>upload CV</div>
                    <img src="/static/images/arrow-blue.svg" alt="arrow icon" />
                  </div>
                </div>
                {fileError && <div className={styles['form__field-error']}>{fileError}</div>}
              </>
            )}
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

ContactUsForm.propTypes = {
  onCloseModal: PropTypes.func,
};

export default ContactUsForm;
