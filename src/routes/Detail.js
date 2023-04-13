import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DetailMovie from "../components/DetailMovie";
import styles from "../routes/Home.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <DetailMovie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            originalImg={movie.background_image_original}
            mediumImg={movie.medium_cover_image}
            title={movie.title}
            description_intro={movie.description_intro}
            rating={movie.rating}
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
