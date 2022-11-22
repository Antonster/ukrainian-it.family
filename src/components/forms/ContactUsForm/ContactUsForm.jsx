import { MainButton } from '@components/elements';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import styles from './ContactUsForm.module.scss';

const imageMimeType = /(document|pdf|plain)/i;

export const ContactUsForm = ({
  onCloseModal,
  formGap,
  formLabel,
  formDescription,
  fileLabel,
  linkField,
  descriptionField,
}) => {
  const t = useTranslations('Forms.ContactUsForm');
  const schema = useMemo(
    () =>
      yup.object({
        name: yup.string().required(t('FieldsErrors.0')),
        email: yup.string().email(t('FieldsErrors.1')).required(t('FieldsErrors.0')),
        file: yup.object(),
        link: yup.string(),
        description: yup.string(),
      }),
    [],
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const currentFile = watch('file');

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
        setFileError(t('FileErrors.0'));
        return;
      }
      if (newFile.size >= 8000000) {
        setFileError(t('FileErrors.1'));
        return;
      }

      setFileError();
      setValue('file', file[0]);
    },
    [setValue],
  );

  const onDeleteFile = useCallback(() => {
    setValue('file', '');
  }, [setValue]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop: onUploadFile });

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {onCloseModal && (
        <button className={styles['form__close-button']} type="button" onClick={onCloseModal}>
          <Image src="/static/images/cross-blue.svg" alt="cross icon" width={20} height={20} />
        </button>
      )}

      <div className={`${styles.form__content} ${formGap ? styles.gap : ''}`}>
        <div className={styles['form__content-title-container']}>
          <div className={styles['form__content-title']}>
            {formLabel}
            <span className={styles['form__content-title-dot']}>.</span>
          </div>
          {formDescription && (
            <div className={styles['form__content-subtitle']}>{formDescription}</div>
          )}
        </div>

        <div className={styles['form__content-field']}>
          <label className={styles['form__content-field-label']} htmlFor="name">
            {t('NameLabel')}
            <span className={styles['form__content-field-required']}>*</span>
          </label>
          <input
            className={`${styles['form__content-field-input']} ${errors?.name ? styles.error : ''}`}
            id="name"
            placeholder={t('NamePlaceholder')}
            {...register('name')}
          />

          {errors?.name && <div className={styles['form__field-error']}>{errors.name.message}</div>}
        </div>

        <div className={styles['form__content-field']}>
          <label className={styles['form__content-field-label']} htmlFor="email">
            {t('EmailLabel')}
            <span className={styles['form__content-field-required']}>*</span>
          </label>
          <input
            className={`${styles['form__content-field-input']} ${
              errors?.email ? styles.error : ''
            }`}
            id="email"
            placeholder={t('EmailPlaceholder')}
            {...register('email')}
          />

          {errors?.email && (
            <div className={styles['form__field-error']}>{errors.email.message}</div>
          )}
        </div>

        {fileLabel && (
          <div className={styles['form__curriculum-vitae']}>
            <div className={styles['form__content-field']}>
              <div className={styles['form__content-field-label']}>{fileLabel}</div>
              {currentFile ? (
                <div className={styles['form__content-field-file']}>
                  <div className={styles['form__content-field-file-title-wrapper']}>
                    <div className={styles['form__content-field-file-title']}>
                      {currentFile.name}
                    </div>
                  </div>
                  <button
                    className={styles['form__content-field-file-delete']}
                    type="button"
                    onClick={onDeleteFile}
                  >
                    {t('DeleteButtonText')}
                  </button>
                </div>
              ) : (
                <>
                  <div className={styles['form__content-field-dropzone']} {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className={styles['form__content-field-dropzone-text']}>
                      <div>
                        {t('UploadButtonText')} {fileLabel}
                      </div>
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

            {linkField && (
              <>
                <div className={styles.form__separator}>
                  <div className={styles['form__separator-line']} />
                  <div>{t('SeparatorText')}</div>
                  <div className={styles['form__separator-line']} />
                </div>

                <div className={styles['form__content-field']}>
                  <label className={styles['form__content-field-label']} htmlFor="name">
                    {t('LinkLabel')}
                  </label>
                  <input
                    className={styles['form__content-field-input']}
                    id="link"
                    placeholder={t('LinkPlaceholder')}
                    {...register('link')}
                  />
                </div>
              </>
            )}
          </div>
        )}

        {descriptionField && (
          <div className={styles['form__content-field']}>
            <label className={styles['form__content-field-label']} htmlFor="description">
              {t('DescriptionLabel')}
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
        )}

        <div className={styles.form__description}>
          {t('LinkDescription')}{' '}
          <a className={styles['form__description-email']} href="mailto: example@email.com">
            example@email.com
          </a>
        </div>
      </div>

      <MainButton type="submit" width="100%" text={t('SubmitButtonText')} size="big" />
    </form>
  );
};

ContactUsForm.propTypes = {
  onCloseModal: PropTypes.func,
  formGap: PropTypes.bool,
  formLabel: PropTypes.string.isRequired,
  formDescription: PropTypes.string,
  fileLabel: PropTypes.string,
  linkField: PropTypes.bool,
  descriptionField: PropTypes.bool,
};
