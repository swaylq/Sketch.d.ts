/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutRectangle<T0 = void, T1 = void, T2 = void> extends NSLayoutRect {
    rectangleWithName<R = unknown, P0 = unknown>(_rectangleWithName: P0): R;
    constraintsContainingWithinRectangle<R = unknown, P0 = unknown>(_constraintsContainingWithinRectangle: P0): R;
    constraintsEqualToRectangle<R = unknown, P0 = unknown>(_constraintsEqualToRectangle: P0): R;
    rectangleBySlicingWithProportion_fromEdge<R = unknown, P0 = number, P1 = number>(_rectangleBySlicingWithProportion: P0, _fromEdge: P1): R;
    rectangleBySlicingWithDimension_fromEdge<R = unknown, P0 = unknown, P1 = number>(_rectangleBySlicingWithDimension: P0, _fromEdge: P1): R;
    rectangleBySlicingWithDistance_fromEdge<R = unknown, P0 = number, P1 = number>(_rectangleBySlicingWithDistance: P0, _fromEdge: P1): R;
    rectangleByInsettingTopByDimension_leadingByDimension_bottomByDimension_trailingByDimension<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_rectangleByInsettingTopByDimension: P0, _leadingByDimension: P1, _bottomByDimension: P2, _trailingByDimension: P3): R;
    rectangleByInsettingTop_leading_bottom_trailing<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_rectangleByInsettingTop: P0, _leading: P1, _bottom: P2, _trailing: P3): R;
    centerPoint<R = NSLayoutPoint>(): R;
  }
  namespace NSLayoutRectangle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSLayoutRect {
      alloc<R = NSLayoutRectangle>(): R;
      new: <R = NSLayoutRectangle>() => R;
      rectangleWithCenter_width_height<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_rectangleWithCenter: P0, _width: P1, _height: P2): R;
      rectangleWithLeading_top_trailing_bottom<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_rectangleWithLeading: P0, _top: P1, _trailing: P2, _bottom: P3): R;
      rectangleWithLeading_top_width_height<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_rectangleWithLeading: P0, _top: P1, _width: P2, _height: P3): R;
    }
  }
}

declare const NSLayoutRectangle: cocoa.NSLayoutRectangle.CLASS;
