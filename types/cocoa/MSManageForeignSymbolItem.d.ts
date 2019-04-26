/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSManageForeignSymbolItem<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    initWithForeignSymbol<R = unknown, P0 = unknown>(_initWithForeignSymbol: P0): R;
    library<R = MSAssetLibrary>(): R;
    foreignSymbol<R = MSForeignSymbol>(): R;
    libraryName<R = NSString>(): R;
    symbolName<R = NSString>(): R;
  }
  namespace MSManageForeignSymbolItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSManageForeignSymbolItem>(): R;
      new: <R = MSManageForeignSymbolItem>() => R;
    }
  }
}

declare const MSManageForeignSymbolItem: cocoa.MSManageForeignSymbolItem.CLASS;
