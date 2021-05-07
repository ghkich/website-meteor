import React from 'react'
import {SvgImage} from '../components/SvgImage'

const svg = (
  <svg width="1em" height="1em" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.77933 13.5864L7.77991 13.5836H9.6237L10.4977 9.36996H11.9515C12.6334 9.36996 12.6334 9.65284 12.537 10.1201L11.8551 13.5864H13.7987L14.4777 9.74643C14.6727 8.80912 14.09 8.0618 12.537 7.9654H10.789L11.1767 6H9.33237L7.77991 13.5836H7.77933V13.5864ZM0.885383 15.5572L2.43842 7.96795H6.03074C7.58378 8.06435 8.35924 8.81167 8.35924 10.1233C8.35924 12.3716 6.51488 13.677 4.86544 13.5897H3.11748L2.72693 15.5579H0.882568L0.885383 15.5572ZM3.50521 12.1851L3.99146 9.37602H5.25317C5.93504 9.37602 6.41847 9.65609 6.41847 10.2197C6.31925 11.8115 5.54449 12.0916 4.67052 12.1851H3.50521ZM15.1992 7.96795L13.6433 15.5572L15.4877 15.5579L15.8754 13.5897H17.6234C19.2757 13.677 21.12 12.3716 21.12 10.1233C21.12 8.81167 20.3446 8.06435 18.7915 7.96795H15.1992ZM16.7515 9.37602L16.2653 12.1851H17.4278C18.3046 12.0916 19.0793 11.8115 19.1757 10.2197C19.1757 9.65609 18.6923 9.37602 18.0132 9.37602H16.7515Z"
      fill="currentColor"
    />
  </svg>
)

export const IconPHP = (props) => <SvgImage svg={svg} {...props} />
