# react-fixed-grid

Create a fixed grid system for react.

[![Build Status](https://travis-ci.org/aestetype/react-fixed-grid.svg?branch=master)](https://travis-ci.org/aestetype/react-fixed-grid)

## Installation

With npm: `npm install @aestetype/react-fixed-grid --save`

Or with yarn: `yarn add @aestetype/react-fixed-grid`

## Usage

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, GridItem } from '@aestetype/react-fixed-grid';

class App extends Component {
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
    const { boxes, width, height } = this.state;
    return (
      <Grid
        rows={8}
        columns={12}
        onItemChange={this.onItemChange}
        width={1920}
        height={1080}
        margin={10}
        gutter={5}
      >
        {boxes.map((box, index) =>
          <GridItem
            x={box.x} y={box.y} w={box.w} h={box.h} key={index}
            isDraggable isResizable
            draggableClassName="draggable"
            resizableClassName="resizable"
          >
            <div>
              <div className="draggable">
                <i className="material-icons">drag_handle</i>
              </div>
              <div className="resizable">
                <i className="material-icons">open_with</i>
              </div>
              Box {index}
            </div>
          </GridItem>,
        )}
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
```
