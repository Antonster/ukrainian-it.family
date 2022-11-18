import { MainButton } from '@components/elements';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import styles from './ContactUsPartnerForm.module.scss';

const schema = yup.object({
  name: yup.string().required('Required field'),
  email: yup.string().email('Email must be valid').required('Required field'),
  brief: yup.object(),
  description: yup.string(),
});

const imageMimeType = /(document|pdf|plain)/i;

export const ContactUsPartnerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const currentFile = watch('brief');

  const [fileError, setFileError] = useState();

  const onSubmit = useCallback((formData) => {
    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    console.log(formData);
  }, []);

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
      setValue('brief', file[0]);
    },
    [setValue],
  );

  const onDeleteFile = useCallback(() => {
    setValue('brief', '');
  }, [setValue]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop: onUploadFile });

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

        <div className={styles.form__task}>
          <div className={styles['form__content-field']}>
            <div className={styles['form__content-field-label']}>Project Brief</div>
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
                    <div>upload brief</div>
                    <Image
                      src="/static/images/arrow-blue.svg"
                      alt="arrow icon"
                      width={25}
                      height={25}
                    />
                  </div>
                </div>
                {fileError && <div className={styles['form__field-error']}>{fileError}</div>}
              </>
            )}
          </div>
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
