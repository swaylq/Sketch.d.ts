/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedStylePastingProtocol<T0 = void, T1 = void, T2 = void> {
    handlePasteIntoDocument<R = NSString, P0 = MSDocumentData>(_handlePasteIntoDocument: P0): R;
    currentObjectID_MSSharedStylePasting<R = NSString>(): R;
  }
  namespace MSSharedStylePastingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
