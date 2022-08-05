import React, { useState } from 'react';

const Structure = ({ data }) => {

  const [expand, setExpand] = useState(false);

  if (data.isFolder) {
    return (
      <div className="structure">
        <span style={{ cursor: 'pointer', fontSize: '1.55rem', textDecoration: 'underline' }} onClick={() => (setExpand(!expand))}>{data.name}</span>
        <br />
        <div style={{ display: expand ? 'block' : 'none' }} className="isFolder">
          {
            data.items.map((elem, index) => {
              return (
                <Structure key={index} data={elem} />
              )
            })
          }
        </div>
      </div>
    )
  }
  else {
    return (
      <span style={{ fontSize: '1.55rem' }}>
        {
          data.name
        }
        <br />
      </span>
    )
  }

}

export default Structure