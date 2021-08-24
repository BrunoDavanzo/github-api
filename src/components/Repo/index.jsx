import "./styles.css";

export function Repo({ name, url }) {
  return (
    <div className="box-repos">
      <h3>{name}</h3>
      <a href={url} className="url-repos" target="{_blank}">
        <h4>{url}</h4>
      </a>
    </div>
  );
}
