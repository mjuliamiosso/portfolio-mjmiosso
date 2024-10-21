import React from 'react';
import styles from './Contact.module.scss'
import ContactCard from '../../components/ContactCard/ContactCard'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin, FaGithub  } from "react-icons/fa";

const Form = () => {

  return (
    <section id='contact' className='paddingSection'>
      <div className='container'>
        <h2 className='subtitle dashLg'>Entre em contato</h2>
        <div className={styles.cardContainer}>
          <ContactCard
            icon={<MdEmail />}
            title={'E-mail'}
            contact={'mjuliamiosso@gmail.com'}
            link={'mailto:mjuliamiosso@gmail.com'}
          />
          <ContactCard
            icon={<FaPhone />}
            title={'Telefone'}
            contact={'(12)98805-5373'}
            // link={''}
          />
          <ContactCard
            icon={<FaLinkedin />}
            title={'Linkedin'}
            contact={'Maria Júlia Miosso'}
            link={'https://www.linkedin.com/in/maria-julia-miosso/'}
          />
          <ContactCard
            icon={<FaGithub />}
            title={'Github'}
            contact={'mjuliamiosso'}
            link={'https://github.com/mjuliamiosso'}
          />
        </div>
      </div>
    </section>
  )
}

export default Form