class Project extends React.Component {
  constructor() {
    super();

    this.state = {
      loaded: false,
      currentProject: 0,
      beginning: true,
      end: false,
      animationDirection: "",
      animationDuration: "6000",
      projects: [
        {
          title: "Moxie's",
          description:
            "Front-End Development for Moxie's as part of the Simple Simple Ads development team. A smidgen of back-end work as well. 2015.",
          technologies: ["Drupal", "SASS", "JS", "PHP"],
          image: "dist/images/project-moxies-duotone.png",
          url: "https://www.moxies.com"
        },
        {
          title: "Local 510",
          description:
            "Full site build for Local 510. Design by Concorde Group as part of the Simple Simple Ads development team. 2017.",
          technologies: ["Drupal", "SASS", "JS", "Babel", "Gulp", "PHP"],
          image: "dist/images/project-local510-duotone.png",
          url: "https://local510.ca"
        },
        {
          title: "Spredfast",
          description:
            "Miscellaneous components and pages for the Spredfast website as part of the Simple Simple Ads development team. Notably landing page banners. 2017 - 2018.",
          technologies: [
            "Drupal",
            "SASS",
            "JS",
            "Babel",
            "Grunt",
            "Figma/Sketch"
          ],
          image: "dist/images/project-spredfast-duotone.jpg",
          url: "https://spredfast.com"
        },
        {
          title: "Chop",
          description:
            "Full theme build and front-end interactive elements developed for Chop Steakhouse's website as part of the Simple Simple Ads development team. 2016.",
          technologies: ["Drupal", "SASS", "JS", "Babel", "Gulp"],
          image: "dist/images/project-chop-duotone.jpg",
          url: "https://chop.ca"
        }
      ]
    };
  }
  fireAnimations(duration) {
    // add out class
    this.setState({
      animating: true,
      animationDirection: "out"
    });
    // remove anim class to reset
    setTimeout(() => {
      this.setState({
        animating: false,
        animationDirection: "in"
      });
    }, duration / 2.5);
    // add in state
    setTimeout(() => {
      this.setState({
        animating: true,
        animationDirection: ""
      });
    }, duration / 2);
    // remove animation
    setTimeout(() => {
      this.setState({
        animating: false,
        animationDirection: ""
      });
    }, duration);
  }
  checkEnd() {
    if (this.state.currentProject === this.state.projects.length - 1) {
      this.setState({
        end: true
      });
    }
    if (this.state.currentProject === 0) {
      this.setState({
        beginning: true
      });
    }
  }
  changeProject(dir) {
    if (dir === "forward") {
      if (this.state.currentProject < this.state.projects.length - 1) {
        const currentProject = this.state.currentProject + 1;
        this.fireAnimations(1200);
        setTimeout(() => {
          this.setState({
            beginning: false,
            end: false,
            currentProject
          });
        }, 600);
      }
    } else {
      if (this.state.currentProject > 0) {
        const currentProject = this.state.currentProject - 1;
        this.fireAnimations(1200);
        setTimeout(() => {
          this.setState({
            currentProject,
            beginning: false,
            end: false
          });
        }, 600);
      }
    }
    setTimeout(() => {
      this.checkEnd();
    }, 601);
  }
  renderArrows() {
    if (this.state.beginning) {
      return (
        <div className="project__arrows">
          <a
            className="project__arrow project__arrow--disabled"
            onClick={() => this.changeProject("backward")}
          >{`<`}</a>
          <a
            className="project__arrow"
            onClick={() => this.changeProject("forward")}
          >
            >
          </a>
        </div>
      );
    } else if (this.state.end) {
      return (
        <div className="project__arrows">
          <a
            className="project__arrow"
            onClick={() => this.changeProject("backward")}
          >{`<`}</a>
          <a
            className="project__arrow project__arrow--disabled"
            onClick={() => this.changeProject("forward")}
          >
            >
          </a>
        </div>
      );
    } else {
      return (
        <div className="project__arrows">
          <a
            className="project__arrow"
            onClick={() => this.changeProject("backward")}
          >{`<`}</a>
          <a
            className="project__arrow"
            onClick={() => this.changeProject("forward")}
          >
            >
          </a>
        </div>
      );
    }
  }
  loadImages(image) {
    let img = new Image();
    img.src = image;
  }
  componentWillMount() {
    
    const _this = this;
    const length = this.state.projects.length;
    let loaded = 0;
    this.state.projects.forEach(
      project => {
        const image = project.image;
        _this.loadImages(image);
        loaded++;
        if (loaded === length) {
          this.setState({
            loaded: true
          });
        }
      });
  }
  componentDidMount() {
    const landing = document.querySelector(".landing");
    setTimeout(() => {
      // slow it down to make it look fast
      landing.classList.add("landing--loaded");
    });
  }
  render() {
    if (this.state.loaded) {
      const curr = this.state.projects[this.state.currentProject];
      return (
        <div>
          <h1 className="section__title">Projects</h1>
          <div
            className={
              this.state.animating ? `project project--animated` : `project`
            }
          >
            <span
              className={`project__count project__count--${
                this.state.animationDirection
              }`}
            >
              0<span>{this.state.currentProject + 1}</span>
            </span>
            <div
              className={
                this.state.animationDirection !== ``
                  ? `project__text project__text--${
                      this.state.animationDirection
                    }`
                  : `project__text`
              }
            >
              <div
                className={
                  this.state.animationDirection !== ``
                    ? `project__text__wrap project__text__wrap--${
                        this.state.animationDirection
                      }`
                    : `project__text__wrap`
                }
              >
                <h2 className="project__title">{curr.title}</h2>
                <p className="project__description">{curr.description}</p>
              </div>

              <ul
                className={
                  this.state.animationDirection !== ``
                    ? `project__tech project__tech--${
                        this.state.animationDirection
                      }`
                    : `project__tech`
                }
              >
                {curr.technologies.map(tech => {
                  return (
                    <li className="project__tech__item" key={tech}>
                      {tech}
                    </li>
                  );
                })}
              </ul>

              {this.renderArrows()}

              <a
                href={curr.url}
                target="_blank"
                rel="noopener"
                className="button project__view"
              >
                View Project
              </a>
            </div>
            <div className="project__image-wrap">
              <img
                src={curr.image}
                alt={`Project Image: ${curr.title}`}
                className={
                  this.state.animationDirection !== ``
                    ? `project__image project__image--${
                        this.state.animationDirection
                      }`
                    : `project__image`
                }
              />
            </div>
          </div>
        </div>
      );
    } else {
      return <p>loading</p>;
    }
  }
}

ReactDOM.render(<Project />, document.querySelector(".projects"));
