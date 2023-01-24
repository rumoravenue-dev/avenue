const Spacer = ({ height = 0 }) => {
  return (
    <>
      <div className="d-none d-lg-block" style={{ height: `${height}px` }} />
      <div className="d-block d-lg-none" style={{ height: `${height / 2}px` }} />
    </>
  )
}

export default Spacer
