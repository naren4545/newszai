'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

export default function FileUpload() {
  const [dragActive, setDragActive] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string>('')
  const [error, setError] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const MAX_SIZE = 50 * 1024 * 1024 // 50MB
  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/svg+xml']

  const validateFile = (file: File) => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError('File type must be JPG, PNG, or SVG')
      return false
    }
    if (file.size > MAX_SIZE) {
      setError('File size must be less than 50MB')
      return false
    }
    return true
  }

  const handleFile = (file: File) => {
    setError('')
    if (validateFile(file)) {
      setFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      handleFile(droppedFile)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files?.[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleButtonClick = () => {
    inputRef.current?.click()
  }

  return (
    <div className="w-full  mx-auto  flex flex-col justify-center">
     
      
      <div
        className={`relative w-full p-2 border-[0.8px] py-10 rounded-xl bg-white  border-black ${
          dragActive 
            ? 'border-primary bg-primary/5' 
            : ''
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept=".jpg,.jpeg,.png,.svg"
          onChange={handleChange}
        />

        <div className="flex flex-col items-center justify-center gap-4">
          {preview ? (
            <div className="relative w-full aspect-video">
              <Image
                src={preview}
                alt="Preview"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          ) : (
            <>
              <p className="text-center text-gray-600">
                Drag files to upload
              </p>
              <p className="text-center text-gray-500">or</p>
            </>
          )}

          <button
          type='button'
            onClick={handleButtonClick}
            className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            Browse Files
          </button>

          <div className="text-sm text-gray-500 space-y-1 text-center">
            <p>Max file size: 50MB</p>
            <p>Supported file types: JPG, PNG, SVG</p>
          </div>

          {error && (
            <p className="text-sm text-red-500 mt-2">{error}</p>
          )}
        </div>
      </div>
    </div>
  )
}

