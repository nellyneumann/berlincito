import React from "react";
import PropTypes from "prop-types";
import styles from "./ContentContainer.module.css";
import { Card } from "react-bootstrap";
import dataService from "../auth/data.service";
import { Component } from "react";


export default class ContentContainer extends Component {
  state = { listOfBLogposts: [] };

  getAllBlogposts = () => {
    dataService
      .getBlogposts()
      .then((responseFromApi) => {
        console.log(responseFromApi);
        if (responseFromApi !== undefined) {
          this.setState({
            listOfBLogposts: responseFromApi,
          });
        } else {
          console.log(responseFromApi);
        }
      })
      .catch((err) => {
        console.log("an error happened");
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAllBlogposts();
  }
  render() {
    return (
      <div className={styles.ContentContainer} data-testid="ContentContainer">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-8">
              <article>
              {this.state.listOfBLogposts.map((blogpost) => {
              return (
                <div key={blogpost._id} className={styles.ContentContainer}>
                  <h3>{blogpost.title}</h3>
                  <p>Escrito por: {blogpost.postedBy}</p>
                  <p>Fecha: {blogpost.date}</p>
                  {blogpost.tags}
                  <p>{blogpost.text}</p>
                </div>
              );
            })}

              {/*
               title: String,
  postedBy: String,
  date: Date,
  text: String,
  tags: [String],
  comment: [{ "postedBy": String, "text": String}],
                <header className="mb-4">
                  <h1 className="fw-bolder mb-1">Berlincito is live!</h1>
                  <div className="text-muted fst-italic mb-2">
                    Posted on January 1, 2021 by Nelly
                  </div>
                  <a
                    className="badge bg-secondary text-decoration-none link-light"
                    href="#!"
                  >
                    Anmeldung
                  </a>
                  <a
                    className="badge bg-secondary text-decoration-none link-light"
                    href="#!"
                  >
                    Español
                  </a>
                </header>
                <p>
                  Uno de los tramites mas importantes a tu llegada a Berlín es
                  el Anmeldung. El Anmeldung es el registro que haces en el
                  ayuntamiento de la ciudad. La dirección proporcionada es la
                  dirección que usaran todas las entidades oficiales para
                  localizarte en caso de ser necesario. Lorem ipsum dolor sit
                  amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed
                  diam voluptua. At vero eos et accusam et justo duo dolores et
                  ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                  est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua. At vero eos et accusam et justo duo dolores et ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua. At vero eos et accusam et justo duo dolores et ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                  Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in
                  hendrerit in vulputate velit esse molestie consequat, vel
                  illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi. Nam
                  liber tempor cum soluta nobis eleifend option congue nihil
                  imperdiet doming id quod mazim placerat facer possim assum.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis. At vero eos et
                  accusam et justo duo dolores et ea rebum. Stet clita kasd
                  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                  amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore
                  magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                  et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                  no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, At accusam
                  aliquyam diam diam dolore dolores duo eirmod eos erat, et
                  nonumy sed tempor et et invidunt justo labore Stet clita ea et
                  gubergren, kasd magna no rebum. sanctus sea sed takimata ut
                  vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt ut labore et dolore magna aliquyam
                  erat. Consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed
                  diam voluptua. At vero eos et accusam et justo duo dolores et
                  ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                  est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua. At vero eos et accusam et justo duo dolores et ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua. At vero eos et accusam et justo duo dolores et ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Duis
                  autem vel eum iriure dolor in hendrerit in vulputate velit
                  esse molestie consequat, vel illum dolore eu feugiat nulla
                  facilisis at vero eros et accumsan et iusto odio dignissim qui
                  blandit praesent luptatum zzril delenit augue duis dolore te
                  feugait nulla facilisi. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                  wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat. Duis autem vel eum iriure dolor in hendrerit in
                  vulputate velit esse molestie consequat, vel illum dolore eu
                  feugiat nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi. Nam liber tempor cum
                  soluta nobis eleifend option congue nihil imperdiet doming id
                  quod mazim placerat facer possim assum. Lorem ipsum dolor sit
                  amet, consectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat
                  volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                  tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                  commodo
                </p>
                */}
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
