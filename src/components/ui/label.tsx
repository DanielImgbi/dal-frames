"use client"

import * as React from "react"


const Label = React.forwardRef<HTMLLabelElement, React.ComponentProps<"label">>(({ className, ...props }, ref) => {
  const LabelPrimitive = "label"

  return (
    <LabelPrimitive
      ref={ref}
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
      {...props}
    />
  )
})
Label.displayName = 'Label'

export { Label }
