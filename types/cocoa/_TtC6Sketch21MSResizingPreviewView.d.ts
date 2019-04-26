/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC6Sketch21MSResizingPreviewView<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = CDUnknownBlockType>(): R;
    runAnimation<R = void>(): R;
    awakeFromNib<R = void>(): R;
    resizingConstraint<R = number>(): R;
    setResizingConstraint<R = void, P0 = number>(_v: P0): R;
  }
  namespace _TtC6Sketch21MSResizingPreviewView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _TtC6Sketch21MSResizingPreviewView>(): R;
      new: <R = _TtC6Sketch21MSResizingPreviewView>() => R;
    }
  }
}
