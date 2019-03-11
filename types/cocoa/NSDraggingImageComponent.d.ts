/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDraggingImageComponent<T = any> extends cocoa.NSObject {
    animationKeyFrameBlock<R = cocoa.CDUnknownBlockType>(): R;
    image<R = unknown>(): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithKey<R = unknown, P0 = unknown>(_initWithKey: P0): R;
    _initWithCoreDragComponent<R = unknown, P0 = unknown>(__initWithCoreDragComponent: P0): R;
    frame<R = cocoa.CGRect>(): R;
    setFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    contents<R = unknown>(): R;
    setContents<R = void, P0 = unknown>(_v: P0): R;
    key<R = cocoa.NSString>(): R;
    setKey<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSDraggingImageComponent<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSDraggingImageComponent>(): R;
      new: <R = NSDraggingImageComponent>() => R;
      draggingImageComponentWithKey<R = unknown, P0 = unknown>(_draggingImageComponentWithKey: P0): R;
      _imageComponentWithCoreDragComponent<R = unknown, P0 = unknown>(__imageComponentWithCoreDragComponent: P0): R;
    }
  }
}

declare const NSDraggingImageComponent: cocoa.classes.NSDraggingImageComponent;
