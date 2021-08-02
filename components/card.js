import Image from 'next/image';
import {API_URL} from '../config/index';
import Link from 'next/link'
import styles from '../styles/card.module.css';
export default function MovieCard({movie}) {
    return (
        <div>
            <h1>{movie.name}</h1>
            <Image src={API_URL + movie.image.url} width={350} height={420}/>
            <Link href={`/movies/${movie.slug}`}>
                <a className={styles.cardLink}>More Details</a>
            </Link>
        </div>
    );
}