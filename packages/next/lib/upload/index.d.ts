import React from 'react'
import {
  UploadProps as NextUploadProps,
  CardProps,
} from '@alifd/next/lib/upload'
declare type UploadProps = NextUploadProps & {
  textContent?: React.ReactNode
  serviceErrorMessage?: string
}
declare type ExtendUploadProps = UploadProps & {
  serviceErrorMessage?: string
}
declare type ExtendCardProps = CardProps & {
  serviceErrorMessage?: string
}
declare type ComposedUpload = React.FC<ExtendUploadProps> & {
  Card?: React.FC<ExtendCardProps>
  Dragger?: React.FC<ExtendUploadProps>
}
export declare const Upload: ComposedUpload
export default Upload
