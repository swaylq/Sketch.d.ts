/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDraggingImageComponent<T0 = void, T1 = void, T2 = void> extends NSObject {
    animationKeyFrameBlock<R = CDUnknownBlockType>(): R;
    image<R = unknown>(): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithKey<R = unknown, P0 = unknown>(_initWithKey: P0): R;
    _initWithCoreDragComponent<R = unknown, P0 = unknown>(__initWithCoreDragComponent: P0): R;
    frame<R = CGRect>(): R;
    setFrame<R = void, P0 = CGRect>(_v: P0): R;
    contents<R = unknown>(): R;
    setContents<R = void, P0 = unknown>(_v: P0): R;
    key<R = NSString>(): R;
    setKey<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSDraggingImageComponent {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDraggingImageComponent>(): R;
      new: <R = NSDraggingImageComponent>() => R;
      draggingImageComponentWithKey<R = unknown, P0 = unknown>(_draggingImageComponentWithKey: P0): R;
      _imageComponentWithCoreDragComponent<R = unknown, P0 = unknown>(__imageComponentWithCoreDragComponent: P0): R;
    }
  }
}

declare const NSDraggingImageComponent: cocoa.NSDraggingImageComponent.CLASS;
