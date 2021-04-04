import React from 'react';

function DemoInfo(props) {
  return (
    <ul className="list-group">
      {Object.entries(props.metadata).map(([key, value], index) => (
        <li className="list-group-item" key={index}>
          {key}: {value}
        </li>
      ))}
    </ul>
  );
}

export default DemoInfo;

//   if (props.metadata.length > 0) {
//     infos = Object.entries(props.metadata[0]).map(([key, value]) => {
//       `${key}: ${value}`;
//     });
//   }
