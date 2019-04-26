/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBridgedTextTouchBarController<T0 = void, T1 = void, T2 = void> extends NSObject, NSTouchBarDelegateProtocol, NSCandidateListTouchBarItemDelegateProtocol {
    lastCandidateString<R = NSString>(): R;
    setLastCandidateString<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSBridgedTextTouchBarController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSTouchBarDelegateProtocol, NSCandidateListTouchBarItemDelegateProtocol {
      alloc<R = NSBridgedTextTouchBarController>(): R;
      new: <R = NSBridgedTextTouchBarController>() => R;
    }
  }
}

declare const NSBridgedTextTouchBarController: cocoa.NSBridgedTextTouchBarController.CLASS;
