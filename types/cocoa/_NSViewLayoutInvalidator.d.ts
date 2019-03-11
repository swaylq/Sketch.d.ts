/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewLayoutInvalidator<T = any> extends cocoa.NSObject {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    keyPathsForPropertiesObservedDirectly<R = unknown>(): R;
    dealloc<R = void>(): R;
    observedView<R = cocoa.NSView>(): R;
    setObservedView<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface _NSViewLayoutInvalidator<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSViewLayoutInvalidator>(): R;
      new: <R = _NSViewLayoutInvalidator>() => R;
      newInvalidatorForView<R = unknown, P0 = unknown>(_newInvalidatorForView: P0): R;
    }
  }
}
