import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from '../src/index';
import GridItem from '../src/grid-item';

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
            draggableClassName={'handle'}
            resizableClassName={'resize'}
          >
            <div className="handle" />
            <div className="resize" />
            Box {index}
          </GridItem>,
        )}
      </Grid>
    );
  }
}

ReactDOM.render(<BasicDemo />, document.getElementById('demo'));
