export const DescriptionWrapper = (props) => {
  const { title, details } = props

  return <>
    <div>{title}</div>
    <div>{details}</div>
    {props.children}
  </>
}
