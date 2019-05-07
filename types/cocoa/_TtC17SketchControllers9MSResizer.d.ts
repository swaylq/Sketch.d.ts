/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC17SketchControllers9MSResizer<T0 = void, T1 = void, T2 = void> extends _TtC17SketchControllers6MSTool {
    parentCoordinateSpace<R = MSLayerCoordinateSpace>(): R;
    flippedVertically<R = boolean>(): R;
    setFlippedVertically<R = void, P0 = boolean>(_v: P0): R;
    flippedHorizontally<R = boolean>(): R;
    setFlippedHorizontally<R = void, P0 = boolean>(_v: P0): R;
    bounds<R = CGRect>(): R;
    handle<R = number>(): R;
    setHandle<R = void, P0 = number>(_v: P0): R;
    // + _TtC17SketchControllers9MSResizer(SketchControllers1): 
    debugQuickLookObject<R = unknown>(): R;
    // + _TtC17SketchControllers9MSResizer(SketchControllers):
    layers<R = NSArray>(): R;
  }
  namespace _TtC17SketchControllers9MSResizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _TtC17SketchControllers6MSTool {
      alloc<R = _TtC17SketchControllers9MSResizer>(): R;
      new: <R = _TtC17SketchControllers9MSResizer>() => R;
  
  }
  }
}
