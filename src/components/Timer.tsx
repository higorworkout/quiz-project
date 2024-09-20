import React from 'react';
import styles from '../styles/Timer.module.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';


interface TimerProps {
  key: any;
  duration: number;
  timeOut: () => void
}

const Timer = (props: TimerProps) => {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer 
        duration={props.duration}
        size={120}
        isPlaying
        onComplete={props.timeOut}
        colors={['#BCE596','#f7b801','#ed827a']}
        colorsTime={[10, 6, 3]}
      >
        {({ remainingTime }) => remainingTime}
      </ CountdownCircleTimer> 
    </div>
  )
}

export default Timer
