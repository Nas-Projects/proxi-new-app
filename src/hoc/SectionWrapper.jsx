// import { motion } from 'framer-motion';
// import styles from '../app/styles';
// import { staggerContainer } from '../utils/motion';

// const SectionWrapper = (Component, idName) => function HOC() {
//     return (
//         <motion.section
//             variants={staggerContainer()}
//             initial='hidden'
//             whileInView='show'
//             viewport={{ once: true, amount: 0.25 }}
//             className={`${styles.padding} max-w-screen`}
//         >
//             <span className='hash-span' id={idName}>
//                 &nbsp;
//             </span>
//             <Component />
//         </motion.section>
//     )
// };

// export default SectionWrapper;


import { motion } from 'framer-motion';
import styles from '../app/styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => function HOC(props) { // Accept props here
    return (
        <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-screen`}
        >
            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
            <Component {...props} /> {/* Pass props to the wrapped component */}
        </motion.section>
    )
};

export default SectionWrapper;
