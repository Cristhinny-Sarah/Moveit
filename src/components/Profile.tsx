import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile () {
  const { level } = useContext(ChallengesContext);  
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/49562421?s=400&u=54ed571c9bda1b9035c7d22dfb76000c7b048eb8&v=4" alt="Cristhinny Sarah"/>
      <div>
        <strong>Cristhinny Sarah</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}