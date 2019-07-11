import React from 'react';
import Card from '../../components/Card/Card';
import styles from './Api.module.css';

const Api = () => {
  return (
      <div className={styles.api}>
        <Card>
          <h2>You fixed the API section!</h2>
          <p>Here is a nice hint</p>
          <ul>
            <li>Is everything spelled correctly? Is it formatted correctly?</li>
            <li>What about folders?</li>
          </ul>
        </Card>
      </div>
  );
}

export default Api;


// const About = () =>{
//   return(
//    <div className = {styles.about}>
//        <h2>About Page</h2>
   
//    </div>

//   );
// }

// export default About;