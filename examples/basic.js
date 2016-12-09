import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import injectSheet from 'react-jss';
import EventListener from 'react-event-listener';
import { Grid, GridItem } from '../src/index';

const styles = {
  draggable: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 30,
    width: 30,
    cursor: 'pointer',
    background: 'red',
  },
  resizable: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: 30,
    width: 30,
    cursor: 'pointer',
    background: 'red',
  },
};

class BasicDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1920,
      height: 1080,
      boxes: [
        { x: 0, y: 0, w: 1, h: 1 },
        { x: 1, y: 0, w: 2, h: 2 },
      ],
    };
  }

  componentDidMount() {
    this.setRatio();
  }

  onItemChange = (index, { x, y, w, h }) => {
    const boxes = this.state.boxes;
    boxes[index] = { x, y, w, h };
    this.setState({ boxes });
  }

  onWindowResize = () => {
    this.setRatio();
  }

  setRatio = () => {
    const width = window.innerWidth;
    this.setState({ width, height: width / (19 / 9) });
  }

  render() {
    const { sheet: { classes } } = this.props;
    const { boxes, width, height } = this.state;
    return (
      <div>
        <EventListener target="window" onResize={this.onWindowResize} />
        <Grid
          rows={8}
          columns={12}
          onItemChange={this.onItemChange}
          width={width}
          height={height}
          margin={10}
          gutter={5}
        >
          {boxes.map((box, index) =>
            <GridItem
              x={box.x} y={box.y} w={box.w} h={box.h} key={index}
              isDraggable isResizable
              draggableClassName={classes.draggable}
              resizableClassName={classes.resizable}
            >
              <div className={classes.draggable} />
              <div className={classes.resizable} />
              Box {index}
            </GridItem>,
          )}
        </Grid>
      </div>
    );
  }
}

BasicDemo.propTypes = {
  sheet: PropTypes.object.isRequired,
};

const StyledBasicDemo = injectSheet(styles)(BasicDemo);

ReactDOM.render(<StyledBasicDemo />, document.getElementById('demo'));
