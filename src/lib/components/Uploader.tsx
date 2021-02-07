/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react'
import { BsImages } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import { Wrapper } from './styles/uploaderStyles'

interface UploaderProps {
  defaultFiles?: string[]
  onChange?: (files: FileList) => void
}

const Uploader: React.FC<UploaderProps> = ({ onChange, defaultFiles }) => {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    if (defaultFiles && defaultFiles.length > 0) {
      setImages(defaultFiles)
    }
  }, [defaultFiles])

  return (
    <Wrapper datatype='uploader'>
      <div>
        <div>
          {images.map((img, i) => (
            <div key={i} data-number={i + 1}>
              <img src={img} alt='' />
              <div>
                <FaTimes
                  onClick={() => {
                    const newImages = [...images]
                    newImages.splice(i, 1)
                    setImages(newImages)
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <label>
          <input
            onChange={(e) => {
              const files = e.target.files
              if (files) {
                setImages(
                  Array.from(files).map((file) => URL.createObjectURL(file))
                )
                onChange?.(files)
              }
            }}
            type='file'
            hidden
            multiple
            accept='.jpg,.jpeg,.png'
          />
          <BsImages /> Choose image(s)
        </label>
        <p>PNG & JPG Accepted</p>
      </div>
    </Wrapper>
  )
}

export default Uploader
