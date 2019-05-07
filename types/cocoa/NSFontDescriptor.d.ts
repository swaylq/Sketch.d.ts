/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFontDescriptor<T0 = void, T1 = void, T2 = void> {
    // + NSFontDescriptor(JSONEncoder): 
    initWithJSONDecoder<R = unknown, P0 = unknown>(_initWithJSONDecoder: P0): R;
    encodeAsJSON<R = void, P0 = unknown>(_encodeAsJSON: P0): R;
    // + NSFontDescriptor(ModelSyncSupport): 
    propertiesAreEqual<R = boolean, P0 = unknown>(_propertiesAreEqual: P0): R;
  }
  namespace NSFontDescriptor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const NSFontDescriptor: cocoa.NSFontDescriptor.CLASS;
