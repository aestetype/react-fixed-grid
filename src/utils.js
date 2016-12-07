export function calcPosition({ x, y, w, h, rowHeight, colWidth, margin, gutter }, state) {
  const pos = {
    width: (colWidth * w) + (gutter * (w - 1)),
    height: (rowHeight * h) + (gutter * (h - 1)),
    top: (rowHeight * x) + (gutter * x) + margin,
    left: (colWidth * y) + (gutter * y) + margin,
  };
  if (state && state.resizing) {
    pos.width += state.resizing.width;
    pos.height += state.resizing.height;
  }
  return pos;
}

export function calcWH({ h: hProp, w: wProp, rowHeight, colWidth }, { width, height }) {
  const w = Math.round(((wProp * colWidth) + width) / colWidth);
  const h = Math.round(((hProp * rowHeight) + height) / rowHeight);
  return { w, h };
}

export function calcXY({ x: xProp, y: yProp, rowHeight, colWidth }, { top, left }) {
  const y = Math.round(((yProp * colWidth) + left) / colWidth);
  const x = Math.round(((xProp * rowHeight) + top) / rowHeight);
  return { x, y };
}
