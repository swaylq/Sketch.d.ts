/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLibraryObjectProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    document<R = MSDocumentData>(): R;
    libraryID<R = NSString>(): R;
    name<R = NSString>(): R;
  }
  namespace MSLibraryObjectProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
