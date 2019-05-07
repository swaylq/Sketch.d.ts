/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFontList<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    prepareForDealloc<R = void>(): R;
    stopCachingFonts<R = void>(): R;
    dispatchStartCachingFonts<R = void>(): R;
    startCachingFonts<R = void>(): R;
    clearFilter<R = void>(): R;
    filter<R = void, P0 = unknown>(_filter: P0): R;
    fontForFontFamilyAtIndex<R = unknown, P0 = number>(_fontForFontFamilyAtIndex: P0): R;
    nameOfFontFamilyAtIndex<R = unknown, P0 = number>(_nameOfFontFamilyAtIndex: P0): R;
    numberOfFontFamilies<R = number>(): R;
    findCommonFontsInDocument<R = void, P0 = unknown>(_findCommonFontsInDocument: P0): R;
    findSystemFonts<R = void>(): R;
    reloadFonts<R = void>(): R;
    initWithDocumentData<R = unknown, P0 = unknown>(_initWithDocumentData: P0): R;
    filterFonts<R = NSArray>(): R;
    setFilterFonts<R = void, P0 = NSArray>(_v: P0): R;
    allFonts<R = NSArray>(): R;
    setAllFonts<R = void, P0 = NSArray>(_v: P0): R;
    systemFonts<R = NSArray>(): R;
    setSystemFonts<R = void, P0 = NSArray>(_v: P0): R;
    documentData<R = MSDocumentData>(): R;
    documentFontFamilyNames<R = NSArray>(): R;
    setDocumentFontFamilyNames<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace MSFontList {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSFontList>(): R;
      new: <R = MSFontList>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const MSFontList: cocoa.MSFontList.CLASS;
