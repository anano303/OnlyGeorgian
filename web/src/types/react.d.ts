import 'react';
import { StaticImageData } from 'next/image';

declare module 'react' {
    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
        src?: string | StaticImageData | undefined;
    }
}
