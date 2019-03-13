/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCompoundSnapItem<T = any> extends MSSnapItem {
    setRectForSnapping<R = void, P0 = CGRect>(_setRectForSnapping: P0): R;
    rectForSnapping<R = CGRect>(): R;
    shouldConstrainProportions<R = boolean>(): R;
    centerYAnchor<R = unknown>(): R;
    centerXAnchor<R = unknown>(): R;
    bottomAnchor<R = unknown>(): R;
    topAnchor<R = unknown>(): R;
    rightAnchor<R = unknown>(): R;
    leftAnchor<R = unknown>(): R;
    unionRect<R = CGRect>(): R;
    setUnionRect<R = void, P0 = CGRect>(_v: P0): R;
    relativeRects<R = NSArray>(): R;
    setRelativeRects<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface MSCompoundSnapItem<T = any> extends MSSnapItem {
      alloc<R = MSCompoundSnapItem>(): R;
      new: <R = MSCompoundSnapItem>() => R;
    }
  }
}

declare const MSCompoundSnapItem: cocoa.classes.MSCompoundSnapItem;
