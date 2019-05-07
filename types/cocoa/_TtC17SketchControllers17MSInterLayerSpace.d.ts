/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC17SketchControllers17MSInterLayerSpace<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = CDUnknownBlockType>(): R;
    initWithItem_item_axis<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_initWithItem: P0, _item: P1, _axis: P2): R;
    heightAnchor<R = MSLayoutDimension>(): R;
    setHeightAnchor<R = void, P0 = MSLayoutDimension>(_v: P0): R;
    widthAnchor<R = MSLayoutDimension>(): R;
    setWidthAnchor<R = void, P0 = MSLayoutDimension>(_v: P0): R;
    axis<R = number>(): R;
    secondItem<R = MSLayer>(): R;
    firstItem<R = MSSnappable>(): R;
    // + _TtC17SketchControllers17MSInterLayerSpace(SketchControllers):
    anchorForSnapping<R = MSLayoutDimension>(): R;
    frame<R = CGRect>(): R;
    // + _TtC17SketchControllers17MSInterLayerSpace(SketchControllers1):
    name<R = NSString>(): R;
  }
  namespace _TtC17SketchControllers17MSInterLayerSpace {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _TtC17SketchControllers17MSInterLayerSpace>(): R;
      new: <R = _TtC17SketchControllers17MSInterLayerSpace>() => R;
  
  }
  }
}
