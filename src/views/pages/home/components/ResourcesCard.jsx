import styles from './ResourcesCard.module.scss';

const ResourceCard = ({ imgUrl, title, desc, link }) => {

    return (
        <div className={styles['card']}>
            <div className={styles['card__image']}>
                <img src={imgUrl} />
            </div>
            <h3>
                {title}
            </h3>
            <p>
                {desc}
            </p>
            <a href={link}>
                Read more
            </a>

        </div >
    )
}

export default ResourceCard;