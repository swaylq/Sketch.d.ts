/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayoutRelationship<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    hash<R = number>(): R;
    initWithFirstItem_attribute_secondAnchor<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithFirstItem: P0, _attribute: P1, _secondAnchor: P2): R;
    initWithItem_attribute_item_attribute<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = number>(_initWithItem: P0, _attribute: P1, _item: P2, _attribute1: P3): R;
    initWithAnchor_anchor<R = unknown, P0 = unknown, P1 = unknown>(_initWithAnchor: P0, _anchor: P1): R;
    secondAttribute<R = number>(): R;
    secondItem<R = unknown>(): R;
    secondAnchor<R = MSLayoutAnchor>(): R;
    firstAttribute<R = number>(): R;
    firstItem<R = unknown>(): R;
    firstAnchor<R = MSLayoutAnchor>(): R;
    firstAnchorPoint<R = CGPoint>(): R;
    rect<R = CGRect>(): R;
  }
  namespace MSLayoutRelationship {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSLayoutRelationship>(): R;
      new: <R = MSLayoutRelationship>() => R;
      spacingMeasurementWithItem_toItem_onAxis<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_spacingMeasurementWithItem: P0, _toItem: P1, _onAxis: P2): R;
      dimensionMeasurementWithItem_axis<R = unknown, P0 = unknown, P1 = number>(_dimensionMeasurementWithItem: P0, _axis: P1): R;
    }
  }
}

declare const MSLayoutRelationship: cocoa.MSLayoutRelationship.CLASS;
