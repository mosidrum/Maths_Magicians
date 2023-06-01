import Api from '../Api';
import Loading from '../../assets/loading.gif';

const Quote = () => {
  const {
    res, loading, error, author,
  } = Api('https://api.api-ninjas.com/v1/quotes?category=computers');
  if (loading) {
    return <img src={Loading} className="loader" alt="Loader" />;
  }
  if (error) {
    return <p>There was an error fetching the quote</p>;
  }
  return (
    <div className="quote">
      <h2>{author}</h2>
      <p>{res}</p>
    </div>
  );
};

export default Quote;
