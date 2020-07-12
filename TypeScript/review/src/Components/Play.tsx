import React, { Component, PureComponent } from "react";

interface defaultProps {
  name: string;
  age?: number;
  readonly keywords: string;
}

export default class Play extends React.PureComponent<defaultProps> {
  constructor(props: defaultProps) {
    super(props);
    this.state={
        keywords: 'hhh'
    }
  }

  render() {
    const { keywords } = this.props;
    console.log("keywords", keywords, this.props,this.state.keywords);
    return <div>hhh</div>;
  }
}
