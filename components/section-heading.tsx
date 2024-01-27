import React, { ReactNode} from 'react';

type SectionHeadingProps = {
    children: ReactNode;
    className?: string;
}

export default function SectionHeading({children,className}: SectionHeadingProps) {
  return (
    <h2 className={`text-3xl font-medium capitalize mb-8 text-center ${className}`}>{children}</h2>
  )
}
