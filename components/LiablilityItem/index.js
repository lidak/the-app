import './style.styl';

export default ({title, amount, removeClicked}) => (
  <div className="liability-item">
    <div>{title}</div>
    <div>{amount}</div>
    <button onClick={removeClicked.bind(null, title)}>Remove</button>
  </div>
)


