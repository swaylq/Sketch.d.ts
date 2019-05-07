/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEvent<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
    // + NSEvent(EventShouldDrag): 
    isRightClick<R = boolean>(): R;
    isDoubleClick<R = boolean>(): R;
    shouldStartDrag<R = boolean>(): R;
  }
  namespace NSEvent {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
      alloc<R = NSEvent>(): R;
      new: <R = NSEvent>() => R;
      _touchesFromSet_matchingPhase_inView_includeResting<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = boolean>(__touchesFromSet: P0, _matchingPhase: P1, _inView: P2, _includeResting: P3): R;
  
  }
  }
}

declare const NSEvent: cocoa.NSEvent.CLASS;
