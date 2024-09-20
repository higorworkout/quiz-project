import Link from 'next/link';
import styles from '../styles/Button.module.css';

interface ButtonProps {
    href?: string
    texto?: string
    onClick?: (e: any) => void
}

const Button = (props: ButtonProps) => {
  function renderizarButton() {
    return (
      <button className={styles.button} onClick={props.onClick}>
        {props.texto}
      </button>
    )
  }

  return props.href ? (
    <Link href={props.href}>
       {renderizarButton()}
    </Link>
  ) : renderizarButton()
  
}

export default Button
