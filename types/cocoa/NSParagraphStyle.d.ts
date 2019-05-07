/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSParagraphStyle<T0 = void, T1 = void, T2 = void> {
    // + NSParagraphStyle(Chocolat): 
    initWithJSONDecoder<R = unknown, P0 = unknown>(_initWithJSONDecoder: P0): R;
    encodeAsJSON<R = void, P0 = unknown>(_encodeAsJSON: P0): R;
    propertiesToArchive<R = unknown>(): R;
    // + NSParagraphStyle(ModelSyncSupport): 
    propertiesDictionary<R = unknown>(): R;
    propertiesAreEqual<R = boolean, P0 = unknown>(_propertiesAreEqual: P0): R;
    // + NSParagraphStyle(SVG): 
    addSVGAttributes<R = void, P0 = unknown>(_addSVGAttributes: P0): R;
    // + NSParagraphStyle(TreeAsDictionarySupport): 
    treeAsDictionary<R = unknown>(): R;
    // + NSParagraphStyle(Chocolat):
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + NSParagraphStyle(MSFixedLineHeight):
    fixedLineHeight_ms<R = number>(): R;
  }
  namespace NSParagraphStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSParagraphStyle(Alignment): 
      paragraphStyleWithAlignment_ms<R = unknown, P0 = number>(_paragraphStyleWithAlignment_ms: P0): R;
    }
  }
}

declare const NSParagraphStyle: cocoa.NSParagraphStyle.CLASS;
