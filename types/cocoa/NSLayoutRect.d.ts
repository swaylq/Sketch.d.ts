/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutRect<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
    constraintsContainingWithinLayoutRect<R = unknown, P0 = unknown>(_constraintsContainingWithinLayoutRect: P0): R;
    constraintsEqualToLayoutRect<R = unknown, P0 = unknown>(_constraintsEqualToLayoutRect: P0): R;
    layoutRectBySlicingWithProportion_fromEdge<R = unknown, P0 = number, P1 = number>(_layoutRectBySlicingWithProportion: P0, _fromEdge: P1): R;
    layoutRectBySlicingWithDimension_fromEdge<R = unknown, P0 = unknown, P1 = number>(_layoutRectBySlicingWithDimension: P0, _fromEdge: P1): R;
    layoutRectBySlicingWithDistance_fromEdge<R = unknown, P0 = number, P1 = number>(_layoutRectBySlicingWithDistance: P0, _fromEdge: P1): R;
    _rectangleBySlicingWithDimension_plusConstant_fromEdge<R = unknown, P0 = unknown, P1 = number, P2 = number>(__rectangleBySlicingWithDimension: P0, _plusConstant: P1, _fromEdge: P2): R;
    layoutRectByInsettingTopWithDimension_leadingWithDimension_bottomWithDimension_trailingWithDimension<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_layoutRectByInsettingTopWithDimension: P0, _leadingWithDimension: P1, _bottomWithDimension: P2, _trailingWithDimension: P3): R;
    layoutRectByInsettingTop_leading_bottom_trailing<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_layoutRectByInsettingTop: P0, _leading: P1, _bottom: P2, _trailing: P3): R;
    _equationDescriptionInParent<R = unknown>(): R;
    debugDescription<R = unknown>(): R;
    description<R = unknown>(): R;
    isEqualToRectangle<R = boolean, P0 = unknown>(_isEqualToRectangle: P0): R;
    dealloc<R = void>(): R;
    initWithLeadingAnchor_topAnchor_widthAnchor_heightAnchor_name<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(_initWithLeadingAnchor: P0, _topAnchor: P1, _widthAnchor: P2, _heightAnchor: P3, _name: P4): R;
    initWithLeadingAnchor_topAnchor_widthAnchor_heightAnchor<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithLeadingAnchor: P0, _topAnchor: P1, _widthAnchor: P2, _heightAnchor: P3): R;
    observableValueInItem<R = unknown, P0 = unknown>(_observableValueInItem: P0): R;
    valueInItem<R = CGRect, P0 = unknown>(_valueInItem: P0): R;
    layoutRectWithName<R = unknown, P0 = unknown>(_layoutRectWithName: P0): R;
    nsli_isLegalConstraintItem<R = boolean>(): R;
    nsli_superitem<R = unknown>(): R;
    ruleContainingLayoutRect<R = unknown, P0 = unknown>(_ruleContainingLayoutRect: P0): R;
    ruleEqualToLayoutRect<R = unknown, P0 = unknown>(_ruleEqualToLayoutRect: P0): R;
    centerLayoutPoint<R = NSLayoutPoint>(): R;
    heightAnchor<R = NSLayoutDimension>(): R;
    widthAnchor<R = NSLayoutDimension>(): R;
    trailingAnchor<R = NSLayoutXAxisAnchor>(): R;
    centerXAnchor<R = NSLayoutXAxisAnchor>(): R;
    leadingAnchor<R = NSLayoutXAxisAnchor>(): R;
    bottomAnchor<R = NSLayoutYAxisAnchor>(): R;
    centerYAnchor<R = NSLayoutYAxisAnchor>(): R;
    topAnchor<R = NSLayoutYAxisAnchor>(): R;
  }
  namespace NSLayoutRect {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
      alloc<R = NSLayoutRect>(): R;
      new: <R = NSLayoutRect>() => R;
      layoutRectWithCenterLayoutPoint_widthAnchor_heightAnchor<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_layoutRectWithCenterLayoutPoint: P0, _widthAnchor: P1, _heightAnchor: P2): R;
      layoutRectWithCenterXAnchor_centerYAnchor_widthAnchor_heightAnchor<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_layoutRectWithCenterXAnchor: P0, _centerYAnchor: P1, _widthAnchor: P2, _heightAnchor: P3): R;
      layoutRectWithLeadingAnchor_topAnchor_trailingAnchor_bottomAnchor<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_layoutRectWithLeadingAnchor: P0, _topAnchor: P1, _trailingAnchor: P2, _bottomAnchor: P3): R;
      layoutRectWithLeadingAnchor_topAnchor_widthAnchor_heightAnchor<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_layoutRectWithLeadingAnchor: P0, _topAnchor: P1, _widthAnchor: P2, _heightAnchor: P3): R;
    }
  }
}

declare const NSLayoutRect: cocoa.NSLayoutRect.CLASS;
