/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableLayoutGrid<T0 = void, T1 = void, T2 = void> extends MSImmutableBaseGrid {
    totalWidth<R = number>(): R;
    setTotalWidth<R = void, P0 = number>(_v: P0): R;
    rowHeightMultiplication<R = number>(): R;
    setRowHeightMultiplication<R = void, P0 = number>(_v: P0): R;
    numberOfColumns<R = number>(): R;
    setNumberOfColumns<R = void, P0 = number>(_v: P0): R;
    horizontalOffset<R = number>(): R;
    setHorizontalOffset<R = void, P0 = number>(_v: P0): R;
    guttersOutside<R = boolean>(): R;
    setGuttersOutside<R = void, P0 = boolean>(_v: P0): R;
    gutterWidth<R = number>(): R;
    setGutterWidth<R = void, P0 = number>(_v: P0): R;
    gutterHeight<R = number>(): R;
    setGutterHeight<R = void, P0 = number>(_v: P0): R;
    drawVertical<R = boolean>(): R;
    setDrawVertical<R = void, P0 = boolean>(_v: P0): R;
    drawHorizontalLines<R = boolean>(): R;
    setDrawHorizontalLines<R = void, P0 = boolean>(_v: P0): R;
    drawHorizontal<R = boolean>(): R;
    setDrawHorizontal<R = void, P0 = boolean>(_v: P0): R;
    columnWidth<R = number>(): R;
    setColumnWidth<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSImmutableLayoutGrid {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableBaseGrid {
      alloc<R = _MSImmutableLayoutGrid>(): R;
      new: <R = _MSImmutableLayoutGrid>() => R;
    }
  }
}
