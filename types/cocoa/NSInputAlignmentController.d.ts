/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputAlignmentController<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSInputAlignmentController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSInputAlignmentController>(): R;
      new: <R = NSInputAlignmentController>() => R;
      alignmentDeltaFromMatches<R = CGPoint, P0 = unknown>(_alignmentDeltaFromMatches: P0): R;
    }
  }
}

declare const NSInputAlignmentController: cocoa.NSInputAlignmentController.CLASS;
