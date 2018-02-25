class Project extends React.Component {
  constructor() {
    super();

    this.state = {
      currentProject: 0,
      projects: [
        {
          title: "Moxie's",
          description:
            "Front-End Development for Moxie's as part of the Simple Simple Ads development team. A smidgen of back-end work as well. 2015.",
          technologies: ["Drupal", "SASS", "JS", "PHP"],
          url: "https://www.moxies.com"
        },
        {
          title: "Local 510",
          description:
            "Full site build for Local 510. Design by Concorde Group. 2017.",
          technologies: ["Drupal", "SASS", "Babel", "Gulp", "PHP"],
          url: "https://local510.ca"
        }
      ]
    };
  }
  changeProject(dir) {
    if (dir === "forward") {
      if (this.state.currentProject < this.state.projects.length - 1) {
        const currentProject = this.state.currentProject + 1;
        this.setState({
          currentProject
        });
      }
    } else {
      if (this.state.currentProject > 0) {
        const currentProject = this.state.currentProject - 1;
        this.setState({
          currentProject
        });
      }
    }
  }
  componentDidMount() {}
  render() {
    const curr = this.state.projects[this.state.currentProject];
    return (
      <div>
        <h1 className="section__title">Projects</h1>
        <div className="project">
          <span className="project__count">
            0<span>{this.state.currentProject + 1}</span>
          </span>
          <div className="project__text">
            <div className="project__text__wrap">
              <h2 className="project__title">{curr.title}</h2>
              <p className="project__description">{curr.description}</p>
            </div>

            <ul className="project__tech">
              {curr.technologies.map(tech => {
                return (
                  <li className="project__tech__item" key={tech}>
                    {tech}
                  </li>
                );
              })}
            </ul>

            <div className="project__arrows">
              <a
                className="project__arrow project__arrow--left"
                onClick={() => this.changeProject("bacward")}
              >
                {`<`}
              </a>
              <a
                className="project__arrow project__arrow--right"
                onClick={() => this.changeProject("forward")}
              >
                >
              </a>
            </div>
            <a href={curr.url} target="_blank" className="button project__view">
              View Project
            </a>
          </div>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/36124/desktop-test.png"
            className="project__image"
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Project />, document.querySelector(".projects"));
