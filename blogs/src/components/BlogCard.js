// import CardInfos from "../data/cardInfo";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const { id, banner_img, title, card_text, views, comments, likes } = props;

  return (
    <article className="container-items">
      <div className="top-container">
        <ul>
          <li className="first-top-container">
            <i className="fa fa-eye" aria-hidden="true"></i>
            {views}
          </li>
          <li className="second-top-container">
            <i className="fa fa-heart-o" aria-hidden="true"></i>
            {likes}
          </li>
          <li className="third-top-container">
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            {comments}
          </li>
        </ul>
        <img src={banner_img} className="img" />
      </div>
      <div>
        <h2 className="card-title">{title}</h2>
      </div>
      <p className="card-text">{card_text}</p>
      <button type="button" className="btn">
        <Link to={`/single-blogs/${id}`}>Read</Link>
      </button>
    </article>
  );
};

function BlogCardList(props) {
  const newList = props.cards.map((card) => {
    return <BlogCard key={card.id} {...card} />;
  });

  return (
    <>
      <div className="container">{newList}</div>
    </>
  );
}
export default BlogCardList;
