import Estatistica from '@/components/Estatistica';
import styles from '../styles/Result.module.css';
import { useRouter } from 'next/router';
import Button from '@/components/Button';

export default function Resultado() {
    const router = useRouter()

    const total = Number(router.query.total);
    const certas = Number(router.query.certas);
    const percentual = Math.round((certas / total) * 100)

    return (
        <div className={styles.result}>
            <h1>Resultado Final</h1>
            <div style={{display: "flex"}}>
                <Estatistica texto='Perguntas' valor={total}/>
                <Estatistica texto='Certas' valor={certas} corFundo='#9cd2a4'/>
                <Estatistica texto='Percentual' valor={`${percentual}%`} corFundo='#de6a33'/>
            </div>
            <Button href="/" texto='Textar Novamente' />
        </div>
    )
}