/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutPoint<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
    constraintsEqualToPoint<R = unknown, P0 = unknown>(_constraintsEqualToPoint: P0): R;
    pointByOffsettingWithXOffsetDimension_yOffsetDimension<R = unknown, P0 = unknown, P1 = unknown>(_pointByOffsettingWithXOffsetDimension: P0, _yOffsetDimension: P1): R;
    pointByOffsettingWithXOffset_yOffset<R = unknown, P0 = number, P1 = number>(_pointByOffsettingWithXOffset: P0, _yOffset: P1): R;
    constraintsEqualToLayoutPoint<R = unknown, P0 = unknown>(_constraintsEqualToLayoutPoint: P0): R;
    layoutPointByOffsettingWithXOffsetDimension_yOffsetDimension<R = unknown, P0 = unknown, P1 = unknown>(_layoutPointByOffsettingWithXOffsetDimension: P0, _yOffsetDimension: P1): R;
    layoutPointByOffsettingWithXOffset_yOffset<R = unknown, P0 = number, P1 = number>(_layoutPointByOffsettingWithXOffset: P0, _yOffset: P1): R;
    dealloc<R = void>(): R;
    initWithXAxisAnchor_yAxisAnchor<R = unknown, P0 = unknown, P1 = unknown>(_initWithXAxisAnchor: P0, _yAxisAnchor: P1): R;
    valueInItem<R = CGPoint, P0 = unknown>(_valueInItem: P0): R;
    ruleEqualToLayoutPoint<R = unknown, P0 = unknown>(_ruleEqualToLayoutPoint: P0): R;
    yAxisAnchor<R = NSLayoutYAxisAnchor>(): R;
    xAxisAnchor<R = NSLayoutXAxisAnchor>(): R;
  }
  namespace NSLayoutPoint {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
      alloc<R = NSLayoutPoint>(): R;
      new: <R = NSLayoutPoint>() => R;
      pointWithXAxisAnchor_yAxisAnchor<R = unknown, P0 = unknown, P1 = unknown>(_pointWithXAxisAnchor: P0, _yAxisAnchor: P1): R;
      layoutPointWithXAxisAnchor_yAxisAnchor<R = unknown, P0 = unknown, P1 = unknown>(_layoutPointWithXAxisAnchor: P0, _yAxisAnchor: P1): R;
    }
  }
}

declare const NSLayoutPoint: cocoa.NSLayoutPoint.CLASS;
