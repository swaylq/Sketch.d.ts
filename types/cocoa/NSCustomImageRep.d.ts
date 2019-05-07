/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCustomImageRep<T0 = void, T1 = void, T2 = void> extends NSImageRep {
    initWithSize_flipped_drawingHandler<R = unknown, P0 = CGSize, P1 = boolean, P2 = CDUnknownBlockType>(_initWithSize: P0, _flipped: P1, _drawingHandler: P2): R;
    initWithDrawSelector_delegate<R = unknown, P0 = string, P1 = unknown>(_initWithDrawSelector: P0, _delegate: P1): R;
    setFlipped<R = void, P0 = boolean>(_setFlipped: P0): R;
    isFlipped<R = boolean>(): R;
    drawHandler<R = CDUnknownBlockType>(): R;
    initWithSize_drawHandler<R = unknown, P0 = CGSize, P1 = CDUnknownBlockType>(_initWithSize: P0, _drawHandler: P1): R;
    initWithSize_flipped_drawHandler<R = unknown, P0 = CGSize, P1 = boolean, P2 = CDUnknownBlockType>(_initWithSize: P0, _flipped: P1, _drawHandler: P2): R;
    initWithDrawSelector_delegate_flipped<R = unknown, P0 = string, P1 = unknown, P2 = boolean>(_initWithDrawSelector: P0, _delegate: P1, _flipped: P2): R;
    delegate<R = unknown>(): R;
    drawSelector<R = string>(): R;
    drawingHandler<R = CDUnknownBlockType>(): R;
  }
  namespace NSCustomImageRep {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageRep {
      alloc<R = NSCustomImageRep>(): R;
      new: <R = NSCustomImageRep>() => R;
    }
  }
}

declare const NSCustomImageRep: cocoa.NSCustomImageRep.CLASS;
