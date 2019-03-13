/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableForeignObject<T = any> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    symbolPrivate<R = boolean>(): R;
    setSymbolPrivate<R = void, P0 = boolean>(_v: P0): R;
    sourceLibraryName<R = NSString>(): R;
    setSourceLibraryName<R = void, P0 = NSString>(_v: P0): R;
    libraryID<R = NSString>(): R;
    setLibraryID<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableForeignObject<T = any> extends MSImmutableModelObject {
      alloc<R = _MSImmutableForeignObject>(): R;
      new: <R = _MSImmutableForeignObject>() => R;
    }
  }
}
