import React from 'react'
import styles from "./Loading.module.scss"
import { CircularProgress } from '@chakra-ui/react'

function Loading() {
  return (
    <div className={styles.loading}>
        <CircularProgress isIndeterminate color='blue.400' /> 
    </div>
    )
}

export default Loading