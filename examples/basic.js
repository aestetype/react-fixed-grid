import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import injectSheet from 'react-jss';
import Grid from '../src/index';
import GridItem from '../src/grid-item';

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
      boxes: [
        { x: 0, y: 0, w: 1, h: 1 },
        { x: 1, y: 0, w: 2, h: 2 },
      ],
    };
  }

  onItemChange = (index, { x, y, w, h }) => {
    const boxes = this.state.boxes;
    boxes[index] = { x, y, w, h };
    this.setState({ boxes });
  }

  render() {
    const { sheet: { classes } } = this.props;
    const { boxes } = this.state;
    return (
      <Grid
        rows={8}
        columns={12}
        onItemChange={this.onItemChange}
        width={1600}
        height={700}
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
    );
  }
}

BasicDemo.propTypes = {
  sheet: PropTypes.object.isRequired,
};

const StyledBasicDemo = injectSheet(styles)(BasicDemo);

ReactDOM.render(<StyledBasicDemo />, document.getElementById('demo'));
