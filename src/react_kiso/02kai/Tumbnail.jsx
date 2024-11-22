import React from "react";
import logo from '../../logo.svg'

const Tumbnail = () => {
  const caption =  'トラハックのかっこいい写真'
  const imagePath = logo
  
  return (
    <> {/*React.Fragmentの省略記法: <> </>。<div>タグはむやみに使わない*/}
      <p>{caption}</p>
      <img src={imagePath} alt={'トラハック'} />
    </>
  )
}

export default Tumbnail;
