import styles from "../styles/movie-credit.module.css";

const API_URL = process.env.REACT_APP_API_KEY;

export async function getCredit(id:string) {
  const res = await fetch(`${API_URL}/movies/${id}/credits`);
  return res.json();
}

export default async function Credits({id}: {id:string}){
  const credit = await getCredit(id);
  return <>
    <p className={styles.componentTitle}>charactor</p>
    <div className={styles.container}>
      {credit.map((person) => (
        <span key={person.id} className={styles.credit}>
          {person.profile_path ? <img src={person.profile_path} alt={person.name} className={styles.profile}/> : <div className={styles.unknownProfile}>?</div>}
          <h2 className={styles.actName}>{person.name}</h2>
          <h3 className={styles.charName}>{person.character}</h3>
        </span>
      ))}
    </div>
  </>
}