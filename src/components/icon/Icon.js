function Icon (props) {
  const {icon} = props;
  return (
    <div>
      {icon.map (item => {
        return (
          <div key={item.id}>
            <h1>{item.p}</h1>
          </div>
        );
      })}
    </div>
  );
}
export default Icon;
