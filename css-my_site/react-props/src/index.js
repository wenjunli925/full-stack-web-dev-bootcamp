import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (<div>

    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
  </div>);

}

ReactDOM.render(
  // <div>
  //   <h1>My Contacts</h1>

  //   <h2>Beyonce</h2>
  //   <img
  //     src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
  //     alt="avatar_img"
  //   />
  //   <p>+123 456 789</p>
  //   <p>b@beyonce.com</p>

  //   <h2>Jack Bauer</h2>
  //   <img
  //     src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
  //     alt="avatar_img"
  //   />
  //   <p>+987 654 321</p>
  //   <p>jack@nowhere.com</p>

  //   <h2>Chuck Norris</h2>
  //   <img
  //     src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
  //     alt="avatar_img"
  //   />
  //   <p>+918 372 574</p>
  //   <p>gmail@chucknorris.com</p>
  // </div>,

  <div>
    <h1>My Contacts</h1>
    <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel="+123 456 789" email="b@beyonce.com" />
    <Card name="John" img="https://i0.wp.com/johnroach.net/wp-content/uploads/2021/07/NARS.jpeg?w=2000" tel="+123 456 789" email="roachj@newschool.edu" />
  </div>,
  document.getElementById("root")
);
