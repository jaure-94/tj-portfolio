import { motion, useAnimation, useInView } from 'motion/react'
import React, { ReactElement, ReactNode, useEffect, useRef } from 'react'

type Props = {
  children: ReactElement | ReactNode;
  width?: "fit-content" | "100%";
}

const Reveal = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const transition = {
    duration: 0.8,
    delay: 0.4,
    ease: [0, 0.71, 0.3, 1.01]
  }

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, )

  return (
    <div ref={ref} className={`relative ${width} `}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={transition}
      >{children}</motion.div>
    </div>
  )
}

export default Reveal