/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNibAXRelationshipConnector<T0 = void, T1 = void, T2 = void> extends NSNibConnector {
    _isAXConnector<R = boolean>(): R;
  }
  namespace NSNibAXRelationshipConnector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSNibConnector {
      alloc<R = NSNibAXRelationshipConnector>(): R;
      new: <R = NSNibAXRelationshipConnector>() => R;
    }
  }
}

declare const NSNibAXRelationshipConnector: cocoa.NSNibAXRelationshipConnector.CLASS;
